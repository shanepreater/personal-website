import React from "react";
import {Badge, Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const LabelBadge = label => (<Badge variant="primary">{label}</Badge>);

const renderLabels = labels => {
    return labels.map((label, idx) => <LabelBadge key={idx} label={label}/>)
};


export const PostPreview = post => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle>
                    <span>
                    {renderLabels(post.label)}
                    </span>
                    <span className="small">Posted on {post.publishDate}</span>
                </Card.Subtitle>
            </Card.Header>
            <Card.Body>{post.tldr}</Card.Body>
            <Card.Footer><Link to={`/blog/${post.id}`} target={Button} variant="primary">Show Post</Link></Card.Footer>
        </Card>
    )
};

export const Post = post => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle>
                    <span>
                    {renderLabels(post.label)}
                    </span>
                    <span className="small">Posted on {post.publishDate}</span>
                </Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <span dangerouslySetInnerHTML={post.content}/>
            </Card.Body>
        </Card>
    )
};