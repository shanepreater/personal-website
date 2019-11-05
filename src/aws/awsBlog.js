import {API} from "aws-amplify"
import {graphqlOperation} from "@aws-amplify/api";
import {createPost as gqlCreatePost} from "../graphql/mutations";
import {listPosts, searchPosts} from "../graphql/queries";

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

const buildGraphQLRequest = match => {
    if (match) {
        return graphqlOperation(searchPosts, {
            filter: {
                content: {
                    match
                },
                archive: {eq: false}
            }
        })
    }
    return graphqlOperation(listPosts, {
        filter: {
            archive: {eq: false}
        }
    });
}

export const retrievePosts = async (searchTerm, setPosts, errorResponse) => {
    try {
        const {data} = await API.graphql(buildGraphQLRequest(searchTerm));
        if (data) {
            console.log(data);
            const posts = data.listPosts ? data.listPosts.items : data.searchPosts.items;
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