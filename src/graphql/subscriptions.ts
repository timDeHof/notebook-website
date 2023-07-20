/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTags = /* GraphQL */ `
  subscription OnCreateTags($filter: ModelSubscriptionTagsFilterInput) {
    onCreateTags(filter: $filter) {
      id
      tagName
      tagDesc
      notes {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateTags = /* GraphQL */ `
  subscription OnUpdateTags($filter: ModelSubscriptionTagsFilterInput) {
    onUpdateTags(filter: $filter) {
      id
      tagName
      tagDesc
      notes {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteTags = /* GraphQL */ `
  subscription OnDeleteTags($filter: ModelSubscriptionTagsFilterInput) {
    onDeleteTags(filter: $filter) {
      id
      tagName
      tagDesc
      notes {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateNotes = /* GraphQL */ `
  subscription OnCreateNotes($filter: ModelSubscriptionNotesFilterInput) {
    onCreateNotes(filter: $filter) {
      id
      title
      content
      isPinned
      isPublished
      isTrashed
      Tags {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateNotes = /* GraphQL */ `
  subscription OnUpdateNotes($filter: ModelSubscriptionNotesFilterInput) {
    onUpdateNotes(filter: $filter) {
      id
      title
      content
      isPinned
      isPublished
      isTrashed
      Tags {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteNotes = /* GraphQL */ `
  subscription OnDeleteNotes($filter: ModelSubscriptionNotesFilterInput) {
    onDeleteNotes(filter: $filter) {
      id
      title
      content
      isPinned
      isPublished
      isTrashed
      Tags {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateTagsNotes = /* GraphQL */ `
  subscription OnCreateTagsNotes(
    $filter: ModelSubscriptionTagsNotesFilterInput
  ) {
    onCreateTagsNotes(filter: $filter) {
      id
      tagsId
      notesId
      tags {
        id
        tagName
        tagDesc
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      notes {
        id
        title
        content
        isPinned
        isPublished
        isTrashed
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateTagsNotes = /* GraphQL */ `
  subscription OnUpdateTagsNotes(
    $filter: ModelSubscriptionTagsNotesFilterInput
  ) {
    onUpdateTagsNotes(filter: $filter) {
      id
      tagsId
      notesId
      tags {
        id
        tagName
        tagDesc
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      notes {
        id
        title
        content
        isPinned
        isPublished
        isTrashed
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteTagsNotes = /* GraphQL */ `
  subscription OnDeleteTagsNotes(
    $filter: ModelSubscriptionTagsNotesFilterInput
  ) {
    onDeleteTagsNotes(filter: $filter) {
      id
      tagsId
      notesId
      tags {
        id
        tagName
        tagDesc
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      notes {
        id
        title
        content
        isPinned
        isPublished
        isTrashed
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
