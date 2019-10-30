import React, {useEffect} from "react";
import {useParams} from "react-router";
import {API} from 'aws-amplify';
import {graphqlOperation} from "@aws-amplify/api";
import {getPost} from "../graphql/queries"
import {Post} from "../components/Post";
import {ErrorToast} from "../components/ErrorListToast";

const loadPost = async (postId, setPost, setErrorMessages) => {
    try {
        const post = await API.graphql(graphqlOperation(getPost, {id: postId}));
        setPost(post);
    } catch (e) {
        console.error(e.errors)
        setErrorMessages(e.errors)
    }
};

const BlogPost = () => {
    const {id} = useParams();
    const [post, setPost] = useState(undefined);
    const [errorMessages, setErrorMessages] = useState([]);

    useEffect(() => {
        loadPost(id, setPost, setErrorMessages)
    }, []);

    return (
        <React.Fragment>
            <section>
                <Post post={post}/>
            </section>
            <ErrorToast errorList={errorMessages} setErrorList={setErrorMessages} errorTitle="Error loading post"/>
        </React.Fragment>
    )
};
export default BlogPost