import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API } from "aws-amplify";
import { graphqlOperation } from "@aws-amplify/api";
import { getPost } from "../graphql/queries";
import { Post } from "../components/Post";
import { CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";

const loadPost = async (postId, setPost, errorResponse) => {
  try {
    const { data } = await API.graphql(
      graphqlOperation(getPost, { id: postId })
    );
    console.log(data);
    setPost(data.getPost);
  } catch (e) {
    console.error(e);
    errorResponse(e, postId);
  }
};

const PostLoading = () => {
  return <CircularProgress />;
};

const BlogPost = ({ errorResponse }) => {
  const { id } = useParams();
  const [post, setPost] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const receivePost = post => {
    setPost(post);
    setLoading(false);
  };

  useEffect(() => {
    loadPost(id, receivePost, errorResponse);
  }, []);

  return (
    <React.Fragment>
      <section>{loading ? <PostLoading /> : <Post post={post} />}</section>
    </React.Fragment>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  errorResponse: (e, postId) => {
    console.error(e);
    const title = "Error loading blog post";
    const errorList = e.errors
      ? "<ul>" + e.errors.map(e => `<li>${e.path}: ${e.message}</li>`) + "</ul>"
      : `<p>${String(e)}</p>`;
    const message = `<p>Error has occurred whilst loading blog post ${postId}:</p>${errorList}`;

    dispatch({
      type: "error/received",
      title,
      message
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPost);
