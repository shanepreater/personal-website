import React, {useEffect, useState} from "react"
import DynamicParallax from "../sections/DynamicParallax";
import CodeAndTingImage from "../static/slider/montage.jpg";
import {API} from 'aws-amplify';
import {graphqlOperation} from "@aws-amplify/api";
import {Button, Form} from "react-bootstrap";
import {PostPreview} from "../components/Post";
import {ErrorToast} from "../components/ErrorListToast";

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

const retrievePosts = async (searchTerm, setPosts, setErrorMessage) => {
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
        setErrorMessage([])
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