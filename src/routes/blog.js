import React, {useEffect, useState} from "react"
import DynamicParallax from "../sections/DynamicParallax";
import CodeAndTingImage from "../static/slider/montage.jpg";
import {Button, Form} from "react-bootstrap";
import {PostPreview} from "../components/Post";
import {ErrorToast} from "../components/ErrorListToast";
import {retrievePosts} from "../aws/awsBlog";

const renderPost = (post, idx) => {
    return (
        <PostPreview key={idx} post={post}/>
    )
};

const Blog = (props) => {
    const [query, setQuery] = useState("");
    const [q, setQ] = useState("");
    const [posts, setPosts] = useState([]);
    const [errorMessages, setErrorMessages] = useState([])

    useEffect(() => {
        retrievePosts(query, setPosts, setErrorMessages)
    }, [query]);

    return (
        <div id="blog">
            <DynamicParallax image={CodeAndTingImage} alt="Montage of all the things I do" content={(
                <div>
                    <h3>Welcome to my blog</h3>
                    <p>I have put together blogs on various aspects of software development, design and training</p>
                </div>
            )}/>
            <section>
                <span className="text-center" style={{width: "100%"}}>
                <Form inline>
                    <Form.Group>
                        <Form.Label>Filter Blogs</Form.Label>
                        <Form.Control type="text" placeholder="Filter" defaultValue={q}
                                      onChange={ev => setQ(ev.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" onClick={() => setQuery(q)}>Search</Button>
                </Form>
                </span>
                <h3>Posts</h3>
                {posts.length > 0 ? posts.map((post, idx) => renderPost(post, idx)) : (
                    <p>No posts found. Try changing the search criteria.</p>)}

            </section>
            <ErrorToast errorList={errorMessages} setErrorList={setErrorMessages} errorTitle="Error loading posts"/>
        </div>
    )
};

export default Blog