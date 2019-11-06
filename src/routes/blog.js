import React, {useEffect, useState} from "react"
import CodeAndTingImage from "../static/slider/montage.jpg";
import {Button, Form} from "react-bootstrap";
import {PostPreview} from "../components/Post";
import {CircularProgress} from "@material-ui/core";
import {retrievePosts} from "../aws/awsBlog";
import {connect} from "react-redux";

const renderPost = (post, idx) => {
    return (
        <PostPreview key={idx} post={post}/>
    )
};

const BlogLoading = () => {
    return (
        <section>
            <h3>Blog is loading...</h3>
            <CircularProgress/>
            <p>Please wait while the blog posts load.</p>
        </section>
    )
};

const Posts = ({posts, performSearch}) => {
    const [query, setQuery] = useState("");

    return (
        <React.Fragment>
            <span className="text-center" style={{width: "100%"}}>
                <Form inline noValidate onSubmit={evt => {
                    evt.preventDefault();
                    performSearch(query)
                }}>
                    <Form.Group>
                        <Form.Label>Filter Blogs: </Form.Label> &nbsp;
                        <Form.Control type="text" placeholder="Filter" defaultValue={query}
                                      onChange={ev => setQuery(ev.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Search</Button>
                </Form>
            </span>
            <h3>Posts</h3>
            {posts.length > 0 ? posts.map((post, idx) => renderPost(post, idx)) : (
                <p>No posts found. Try changing the search criteria.</p>
            )}
        </React.Fragment>
    )
};

const Blog = ({errorResponse}) => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState("");

    const receivePosts = posts => {
        setPosts(posts);
        setLoading(false);
    };

    useEffect(() => {
        retrievePosts(query, receivePosts, errorResponse)
    }, [query]);

    return (
        <div id="blog">
            <section className="section-header">
                <img src={CodeAndTingImage} alt="Montage of all the things I do"/>
                <h3>Welcome to my blog</h3>
                <p>I have put together blogs on various aspects of software development, design and training</p>
            </section>
            <section>
                {loading ? <BlogLoading/> : <Posts posts={posts} performSearch={setQuery}/>}
            </section>
        </div>
    )
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    errorResponse: e => {
        console.error(e);
        const title = "Error loading blog posts";
        const errorList = e.errors ? "<ul>" + e.errors.map(e => `<li>${e.path}: ${e.message}</li>`) + "</ul>" : `<p>${String(e)}</p>`;
        const message = `<p>Error has occurred whilst loading blog posts:</p>${errorList}`;

        dispatch({
            type: "error/received",
            title,
            message
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);