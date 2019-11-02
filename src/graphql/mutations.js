/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
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
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
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
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
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
export const createContactRequest = `mutation CreateContactRequest($input: CreateContactRequestInput!) {
  createContactRequest(input: $input) {
    id
    email
    subject
    content
  }
}
`;
export const updateContactRequest = `mutation UpdateContactRequest($input: UpdateContactRequestInput!) {
  updateContactRequest(input: $input) {
    id
    email
    subject
    content
  }
}
`;
export const deleteContactRequest = `mutation DeleteContactRequest($input: DeleteContactRequestInput!) {
  deleteContactRequest(input: $input) {
    id
    email
    subject
    content
  }
}
`;
