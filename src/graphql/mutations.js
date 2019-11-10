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
    owner
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
    owner
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
    owner
  }
}
`;
export const createContactRequest = `mutation CreateContactRequest($input: CreateContactRequestInput!) {
  createContactRequest(input: $input) {
    id
    email
    submitted
    owner
    subject
    content
    actioned
  }
}
`;
export const updateContactRequest = `mutation UpdateContactRequest($input: UpdateContactRequestInput!) {
  updateContactRequest(input: $input) {
    id
    email
    submitted
    owner
    subject
    content
    actioned
  }
}
`;
export const deleteContactRequest = `mutation DeleteContactRequest($input: DeleteContactRequestInput!) {
  deleteContactRequest(input: $input) {
    id
    email
    submitted
    owner
    subject
    content
    actioned
  }
}
`;
export const createAdvert = `mutation CreateAdvert($input: CreateAdvertInput!) {
  createAdvert(input: $input) {
    id
    from
    to
    variant
    description
    owner
    clicks {
      items {
        id
        owner
      }
      nextToken
    }
  }
}
`;
export const updateAdvert = `mutation UpdateAdvert($input: UpdateAdvertInput!) {
  updateAdvert(input: $input) {
    id
    from
    to
    variant
    description
    owner
    clicks {
      items {
        id
        owner
      }
      nextToken
    }
  }
}
`;
export const deleteAdvert = `mutation DeleteAdvert($input: DeleteAdvertInput!) {
  deleteAdvert(input: $input) {
    id
    from
    to
    variant
    description
    owner
    clicks {
      items {
        id
        owner
      }
      nextToken
    }
  }
}
`;
export const createAdClick = `mutation CreateAdClick($input: CreateAdClickInput!) {
  createAdClick(input: $input) {
    id
    advert {
      id
      from
      to
      variant
      description
      owner
      clicks {
        nextToken
      }
    }
    owner
  }
}
`;
export const updateAdClick = `mutation UpdateAdClick($input: UpdateAdClickInput!) {
  updateAdClick(input: $input) {
    id
    advert {
      id
      from
      to
      variant
      description
      owner
      clicks {
        nextToken
      }
    }
    owner
  }
}
`;
export const deleteAdClick = `mutation DeleteAdClick($input: DeleteAdClickInput!) {
  deleteAdClick(input: $input) {
    id
    advert {
      id
      from
      to
      variant
      description
      owner
      clicks {
        nextToken
      }
    }
    owner
  }
}
`;
