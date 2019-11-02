import {API} from "aws-amplify"
import {graphqlOperation} from "@aws-amplify/api";
import {createPost as gqlCreatePost} from "../graphql/mutations";

const search = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      author
      title
      publishDate
      tldr
    }
    nextToken
  }
}
`;

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

export const retrievePosts = async (searchTerm, setPosts, setErrorMessage) => {
    const filter = searchTerm ? {
        title: {contains: searchTerm},
        or: {
            content: {contains: searchTerm}
        }
    } : undefined;
    try {
        const posts = await API.graphql(graphqlOperation(search, {
            filter
        }));
        setErrorMessage([]);
        if (posts) {
            console.log(`Obtained ${posts.length} posts`);
            setPosts(posts)
        } else {
            setPosts([])
        }
    } catch (e) {
        console.error(e.errors);
        setPosts([])
        setErrorMessage(e.errors)
    }
};