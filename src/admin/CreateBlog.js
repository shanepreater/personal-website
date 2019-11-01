import React from "react";
import {Formik} from "formik";
import * as yup from "yup";

const postValidation = yup.object().shape({
    id: yup.number().required().positive().integer(),
    title: yup.string().required(),
    tldr: yup.string().required(),
    publishDate: yup.date().default(() => new Date()),
    content: yup.string().required(),
    labels: yup.array().of(yup.string())
});


const CreateBlog = () => {
    const createPost = () => {
        console.log("Saving post here...");
    };

    return (
        <section>
            <h3>Create a post</h3>
            <Formik initialValues={{id: "", title: "", tldr: "", publishDate: new Date(), content: "", labels: []}} validationSchema={postValidation} onSubmit={createPost}>

            </Formik>
        </section>
    )
};

export default CreateBlog;