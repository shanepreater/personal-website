import React, {useState} from "react";
import {Formik} from "formik";
import * as yup from "yup";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {DateField, TextAreaField, TextField} from "../components/FieldGroup";
import marked from "marked"
import {createPost} from "../aws/awsBlog";

const postValidation = yup.object().shape({
    author: yup.string().required(),
    title: yup.string().required(),
    tldr: yup.string().required(),
    publishDate: yup.object().required().default(() => new Date()),
    content: yup.string().required(),
    label: yup.array().of(yup.string())
});


const CreateBlog = () => {
    const [preview, setPreview] = useState(undefined);
    const displayPreview = preview ? "block": "none";

    const handleSubmit = (values, {setSubmitting}) => {
        console.log(values);
        createPost(values, setSubmitting, console.log);
    };

    const previewContent = content => {
        setPreview({__html: marked(content)})
    };

    return (
        <section>
            <h3>Create a post</h3>
            <Row>
                <Col md={6}>
                    <Formik initialValues={{publishDate: new Date(), label: []}}
                            validationSchema={postValidation} onSubmit={handleSubmit}>
                        {({
                              handleSubmit,
                              handleChange,
                              handleBlur,
                              values,
                              touched,
                              isValid,
                              errors,
                              isSubmitting
                          }) => {
                            const canSubmit = isValid && !isSubmitting && touched
                            return (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <TextField name="author"
                                               label="Author"
                                               controlId="validationAuthor"
                                               error={errors.author}
                                               valid={touched.author && !errors.author}
                                               handleChange={handleChange}
                                               value={values.author}
                                               handleBlur={handleBlur}/>
                                    <DateField name="publishDate"
                                               label={"Published Date"}
                                               controlId="validationPublishDate"
                                               error={errors.publishDate}
                                               valid={touched.publishDate && !errors.publishDate}
                                               handleChange={handleChange}
                                               value={values.publishDate}
                                               handleBlur={handleBlur}/>
                                    <TextField name="title"
                                               label="Title"
                                               controlId="validationTitle"
                                               error={errors.title}
                                               valid={touched.title && !errors.title}
                                               handleChange={handleChange}
                                               value={values.title}
                                               handleBlur={handleBlur}/>
                                    <TextAreaField name="tldr"
                                                   label="Summary"
                                                   controlId="validationTldr"
                                                   error={errors.tldr}
                                                   valid={touched.tldr && !errors.tldr}
                                                   handleChange={handleChange}
                                                   value={values.tldr}
                                                   handleBlur={handleBlur}/>
                                    <TextAreaField name="content"
                                                   label="Markdown"
                                                   controlId="validationContent"
                                                   error={errors.content}
                                                   valid={touched.content && !errors.content}
                                                   handleChange={handleChange}
                                                   value={values.content}
                                                   handleBlur={handleBlur}/>
                                    <Form.Group controlId="buttonControls">
                                        <Button variant="secondary" disabled={!values.content}
                                                onClick={() => previewContent(values.content)}>Preview</Button>
                                        <Button variant="primary" type="submit" disabled={!canSubmit}>Create
                                            Post</Button>
                                    </Form.Group>
                                </Form>)
                        }}
                    </Formik>
                </Col>
                <Col>
                    <Card style={{display: displayPreview}} className="markdown-container">
                        <Card.Header>
                            <Card.Title>Content Preview</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div dangerouslySetInnerHTML={preview}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </section>
    )
};

export default CreateBlog;