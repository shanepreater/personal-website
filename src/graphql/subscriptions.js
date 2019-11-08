/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAdvert = `subscription OnCreateAdvert {
  onCreateAdvert {
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
export const onUpdateAdvert = `subscription OnUpdateAdvert {
  onUpdateAdvert {
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
export const onDeleteAdvert = `subscription OnDeleteAdvert {
  onDeleteAdvert {
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
export const onCreateAdClick = `subscription OnCreateAdClick {
  onCreateAdClick {
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
export const onUpdateAdClick = `subscription OnUpdateAdClick {
  onUpdateAdClick {
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
export const onDeleteAdClick = `subscription OnDeleteAdClick {
  onDeleteAdClick {
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
