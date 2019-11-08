/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAdvert = `query GetAdvert($id: ID!) {
  getAdvert(id: $id) {
    id
    from
    variant
    description
    clicks {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listAdverts = `query ListAdverts(
  $filter: ModelAdvertFilterInput
  $limit: Int
  $nextToken: String
) {
  listAdverts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      from
      variant
      description
      clicks {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getAdClick = `query GetAdClick($id: ID!) {
  getAdClick(id: $id) {
    id
    advert {
      id
      from
      variant
      description
      clicks {
        nextToken
      }
    }
  }
}
`;
export const listAdClicks = `query ListAdClicks(
  $filter: ModelAdClickFilterInput
  $limit: Int
  $nextToken: String
) {
  listAdClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      advert {
        id
        from
        variant
        description
      }
    }
    nextToken
  }
}
`;
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
    owner
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
      owner
    }
    nextToken
  }
}
`;
export const getContactRequest = `query GetContactRequest($id: ID!) {
  getContactRequest(id: $id) {
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
export const listContactRequests = `query ListContactRequests(
  $filter: ModelContactRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  listContactRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      submitted
      owner
      subject
      content
      actioned
    }
    nextToken
  }
}
`;
export const searchPosts = `query SearchPosts(
  $filter: SearchablePostFilterInput
  $sort: SearchablePostSortInput
  $limit: Int
  $nextToken: String
) {
  searchPosts(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
