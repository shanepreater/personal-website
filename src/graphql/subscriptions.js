/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = `subscription OnCreatePost($owner: String) {
  onCreatePost(owner: $owner) {
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
export const onUpdatePost = `subscription OnUpdatePost($owner: String) {
  onUpdatePost(owner: $owner) {
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
export const onDeletePost = `subscription OnDeletePost($owner: String) {
  onDeletePost(owner: $owner) {
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
export const onCreateContactRequest = `subscription OnCreateContactRequest($owner: String) {
  onCreateContactRequest(owner: $owner) {
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
export const onUpdateContactRequest = `subscription OnUpdateContactRequest($owner: String) {
  onUpdateContactRequest(owner: $owner) {
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
export const onDeleteContactRequest = `subscription OnDeleteContactRequest($owner: String) {
  onDeleteContactRequest(owner: $owner) {
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
export const onCreateAdvert = `subscription OnCreateAdvert($owner: String) {
  onCreateAdvert(owner: $owner) {
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
export const onUpdateAdvert = `subscription OnUpdateAdvert($owner: String) {
  onUpdateAdvert(owner: $owner) {
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
export const onDeleteAdvert = `subscription OnDeleteAdvert($owner: String) {
  onDeleteAdvert(owner: $owner) {
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
export const onCreateAdClick = `subscription OnCreateAdClick($owner: String) {
  onCreateAdClick(owner: $owner) {
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
export const onUpdateAdClick = `subscription OnUpdateAdClick($owner: String) {
  onUpdateAdClick(owner: $owner) {
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
export const onDeleteAdClick = `subscription OnDeleteAdClick($owner: String) {
  onDeleteAdClick(owner: $owner) {
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
