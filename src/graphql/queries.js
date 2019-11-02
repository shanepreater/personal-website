/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    author
    title
    publishDate
    tldr
    content
    labels
    archive
  }
}
`;
export const listPosts = `query ListPosts(
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
      content
      labels
      archive
    }
    nextToken
  }
}
`;
export const getContactRequest = `query GetContactRequest($id: ID!) {
  getContactRequest(id: $id) {
    id
    email
    subject
    content
  }
}
`;
export const listContactRequests = `query ListContactRequests(
  $filter: ModelContactRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  listContactRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      subject
      content
    }
    nextToken
  }
}
`;
