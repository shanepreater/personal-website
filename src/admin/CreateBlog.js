import React, {useCallback, useState} from "react";
import {Formik} from "formik";
import * as yup from "yup";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {DateField, TextAreaField, TextField} from "../components/FieldGroup";
import marked from "marked";
import {createPost} from "../aws/awsBlog";
import {connect} from "react-redux";

const postValidation = yup.object().shape({
    author: yup.string().required(),
    title: yup.string().required(),
    tldr: yup.string().required(),
    publishDate: yup
        .object()
        .required()
        .default(() => new Date()),
    content: yup.string().required(),
    labels: yup.array().of(yup.string())
});

const CreateBlog = ({successResponse, errorResponse}) => {
    const [preview, setPreview] = useState(undefined);
    const displayPreview = preview ? "block" : "none";

    const handleSubmit = (values, {setSubmitting}) => {
        console.log(values);
        createPost(values, setSubmitting, successResponse, errorResponse);
    };

    const previewContent = useCallback(content => {
        console.log("Previewing:", content);
        setPreview({__html: marked(content)});
    }, [setPreview]);

    return (
        <section>
            <h3>Create a post</h3>
            <Row>
                <Col md={6}>
                    <Formik
                        initialValues={{
                            publishDate: new Date(),
                            labels: [],
                            content: "",
                            author: "Shane Preater",
                            title: null,
                            tldr: ""
                        }}
                        validationSchema={postValidation}
                        onSubmit={handleSubmit}
                    >
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
                          const touchKeys = Object.keys(touched).length;
                          console.log("Touched keys", touchKeys)
                            const canSubmit = isValid && !isSubmitting && touchKeys > 0;
                            console.log("Values", values);
                            console.log("Touched", touched, isValid);
                            console.log("Can submit", canSubmit)
                            return (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <TextField
                                        name="author"
                                        label="Author"
                                        controlId="validationAuthor"
                                        error={errors.author}
                                        valid={touched.author && !errors.author}
                                        onChange={handleChange}
                                        value={values.author}
                                        onBlur={handleBlur}
                                    />
                                    <DateField
                                        name="publishDate"
                                        label={"Published Date"}
                                        controlId="validationPublishDate"
                                        error={errors.publishDate}
                                        valid={touched.publishDate && !errors.publishDate}
                                        onChange={handleChange}
                                        value={values.publishDate}
                                        onBlur={handleBlur}
                                    />
                                    <TextField
                                        name="title"
                                        label="Title"
                                        controlId="validationTitle"
                                        error={errors.title}
                                        valid={touched.title && !errors.title}
                                        onChange={handleChange}
                                        value={values.title}
                                        onBlur={handleBlur}
                                    />
                                    <TextAreaField
                                        name="tldr"
                                        label="Summary"
                                        controlId="validationTldr"
                                        error={errors.tldr}
                                        valid={touched.tldr && !errors.tldr}
                                        onChange={handleChange}
                                        value={values.tldr}
                                        onBlur={handleBlur}
                                    />
                                    <TextAreaField
                                        name="content"
                                        label="Markdown"
                                        controlId="validationContent"
                                        error={errors.content}
                                        valid={touched.content && !errors.content}
                                        onChange={handleChange}
                                        value={values.content}
                                        onBlur={handleBlur}
                                    />
                                    <Form.Group controlId="buttonControls">
                                        <Button
                                            variant="secondary"
                                            disabled={!values.content}
                                            onClick={() => previewContent(values.content)}
                                        >
                                            Preview
                                        </Button>
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            disabled={!canSubmit}
                                        >
                                            Create Post
                                        </Button>
                                    </Form.Group>
                                </Form>
                            );
                        }}
                    </Formik>
                </Col>
                <Col>
                    <Card
                        style={{display: displayPreview}}
                        className="markdown-container"
                    >
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
    );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    errorResponse: (title, message) => {
        console.log("Dispatching error: ");
        console.log(message);
        dispatch({
            type: "error/received",
            title,
            message
        });
    },
    successResponse: (title, message) => {
        dispatch({
            type: "success/received",
            title,
            message
        });
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateBlog);
