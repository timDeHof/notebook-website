/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTags = /* GraphQL */ `
  mutation CreateTags(
    $input: CreateTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    createTags(input: $input, condition: $condition) {
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
export const updateTags = /* GraphQL */ `
  mutation UpdateTags(
    $input: UpdateTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    updateTags(input: $input, condition: $condition) {
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
export const deleteTags = /* GraphQL */ `
  mutation DeleteTags(
    $input: DeleteTagsInput!
    $condition: ModelTagsConditionInput
  ) {
    deleteTags(input: $input, condition: $condition) {
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
export const createNotes = /* GraphQL */ `
  mutation CreateNotes(
    $input: CreateNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    createNotes(input: $input, condition: $condition) {
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
export const updateNotes = /* GraphQL */ `
  mutation UpdateNotes(
    $input: UpdateNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    updateNotes(input: $input, condition: $condition) {
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
export const deleteNotes = /* GraphQL */ `
  mutation DeleteNotes(
    $input: DeleteNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    deleteNotes(input: $input, condition: $condition) {
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
export const createTagsNotes = /* GraphQL */ `
  mutation CreateTagsNotes(
    $input: CreateTagsNotesInput!
    $condition: ModelTagsNotesConditionInput
  ) {
    createTagsNotes(input: $input, condition: $condition) {
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
export const updateTagsNotes = /* GraphQL */ `
  mutation UpdateTagsNotes(
    $input: UpdateTagsNotesInput!
    $condition: ModelTagsNotesConditionInput
  ) {
    updateTagsNotes(input: $input, condition: $condition) {
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
export const deleteTagsNotes = /* GraphQL */ `
  mutation DeleteTagsNotes(
    $input: DeleteTagsNotesInput!
    $condition: ModelTagsNotesConditionInput
  ) {
    deleteTagsNotes(input: $input, condition: $condition) {
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
