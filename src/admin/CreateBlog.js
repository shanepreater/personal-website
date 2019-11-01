import React from "react";
import {Formik} from "formik";
import * as yup from "yup";
import {Button, Form} from "react-bootstrap";
import {DateField, TextAreaField, TextField} from "../components/FieldGroup";

const postValidation = yup.object().shape({
    id: yup.number().required().positive().integer(),
    title: yup.string().required(),
    tldr: yup.string().required(),
    publishDate: yup.object().required().default(() => new Date()),
    content: yup.string().required(),
    labels: yup.array().of(yup.string())
});


const CreateBlog = (values, {setSubmitting}) => {
    const createPost = () => {
        console.log("Saving post here...");
    };

    const previewContent = content => {
        console.log("Convert to Markdown");
    };

    return (
        <section>
            <h3>Create a post</h3>
            <Formik initialValues={{publishDate: new Date(), labels: []}}
                    validationSchema={postValidation} onSubmit={createPost}>
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
                            <TextField name="id"
                                       label="ID"
                                       controlId="validationFormikId"
                                       error={errors.id}
                                       valid={touched.id && !errors.id}
                                       handleChange={handleChange}
                                       value={values.id}
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
                                <Button variant="secondary" onClick={() => previewContent(values.content)}>Preview</Button>
                                <Button variant="primary" type="submit" disabled={!canSubmit}>Create
                                    Post</Button>
                            </Form.Group>
                        </Form>)
                }}
            </Formik>
        </section>
    )
};

export default CreateBlog;