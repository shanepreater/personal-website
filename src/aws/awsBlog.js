import {API} from "aws-amplify"
import {graphqlOperation} from "@aws-amplify/api";
import {createPost as gqlCreatePost} from "../graphql/mutations";
import {listPosts} from "../graphql/queries";

export const createPost = async (input, setSubmitting, success, error) => {
    input.archive = false;
    try {
        const {id} = await API.graphql(graphqlOperation(gqlCreatePost, {input}));
        console.log(`Created post with ID: ${id}`);
        success("Blog post has been saved", `<p>Successfully saved the blog post with title ${input.title}</p>`);
        return id;
    } catch (e) {
        console.error(e.errors);
        const errorList = "<ul>" + e.errors.map(e => `<li>${e.path}: ${e.message}</li>`) + "</ul>";
        error("Blog creation has failed", `<p>There was a problem saving the blog post</p>${errorList}`);
    }
    setSubmitting(false);
};

export const retrievePosts = async (searchTerm, setPosts, errorResponse) => {
    const eq = `*${searchTerm}*`;
    const filter = searchTerm ? {
        or: {
            title: {eq},
            content: {eq}
        },
        archive: {eq: false}
    } : {archive: {eq: false}};
    try {
        const {data} = await API.graphql(graphqlOperation(listPosts, {
            filter
        }));
        if (data) {
            console.log(data);
            const posts = data.listPosts.items;
            console.log("Posts:");
            console.log(posts);
            if (posts) {
                console.log(`Obtained ${posts.length} posts`);
                setPosts(posts)
            }
        } else {
            setPosts([])
        }
    } catch (e) {
        console.error(e.errors);
        setPosts([]);
        errorResponse(e);
    }
};