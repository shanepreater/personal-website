import {API, Auth} from "aws-amplify";
import { graphqlOperation } from "@aws-amplify/api";
import { createPost as gqlCreatePost } from "../graphql/mutations";
import { searchPosts } from "../graphql/queries";

export const createPost = async (input, setSubmitting, success, error) => {
  input.archive = false;
  try {
    API.configure({aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS"});
    const { id } = await API.graphql(
      graphqlOperation(gqlCreatePost, { input })
    );
    console.log(`Created post with ID: ${id}`);
    success(
      "Blog post has been saved",
      `<p>Successfully saved the blog post with title ${input.title}</p>`
    );
    return id;
  } catch (e) {
    console.error(e.errors);
    const errorList =
      "<ul>" + e.errors.map(e => `<li>${e.path}: ${e.message}</li>`) + "</ul>";
    error(
      "Blog creation has failed",
      `<p>There was a problem saving the blog post</p>${errorList}`
    );
  }
  setSubmitting(false);
};

const buildGraphQLRequest = match => {
  const filter = {
    archive: { eq: false }
  };
  if (match) {
    filter.content = { match };
  }
  return graphqlOperation(searchPosts, {
    filter,
    sort: { field: "publishDate", direction: "desc" }
  });
};

export const retrievePosts = async (searchTerm, setPosts, errorResponse) => {
  try {
    API.configure({aws_appsync_authenticationType: "API_KEY"});
    const { data } = await API.graphql(buildGraphQLRequest(searchTerm));
    if (data) {
      const posts = data.listPosts
        ? data.listPosts.items
        : data.searchPosts.items;
      if (posts) {
        setPosts(posts);
      }
    } else {
      setPosts([]);
    }
  } catch (e) {
    console.error(e.errors);
    setPosts([]);
    errorResponse(e);
  }
};
