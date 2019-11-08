import React from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import marked from "marked";

const LabelBadge = label => <Badge variant="primary">{label}</Badge>;

const renderLabels = labels => {
  return labels.map((label, idx) => <LabelBadge key={idx} label={label} />);
};

export const PostPreview = ({ post }) => {
  const content = {
    __html: marked(post.tldr)
  };

  return (
    <Card className="post-preview">
      <Card.Header>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle>
          <span>{renderLabels(post.labels)}</span>
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <div dangerouslySetInnerHTML={content} />
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col>
            <Link to={`/blog/${post.id}`} variant="primary">
              Show Post
            </Link>
          </Col>
          <Col>
            <p className="small text-right">
              Posted on {new Date(post.publishDate).toDateString()} by{" "}
              {post.author}
            </p>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export const Post = ({ post }) => {
  const content = {
    __html: marked(post.content)
  };

  return (
    <Card className="post">
      <Card.Header>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle>
          <span>{renderLabels(post.labels)}</span>
          <span className="small">Posted on {post.publishDate}</span>
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <div className="post-content" dangerouslySetInnerHTML={content} />
      </Card.Body>
    </Card>
  );
};
