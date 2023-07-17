/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTagsInput = {
  id?: string | null,
  tagName?: string | null,
  tagDesc?: string | null,
  _version?: number | null,
};

export type ModelTagsConditionInput = {
  tagName?: ModelStringInput | null,
  tagDesc?: ModelStringInput | null,
  and?: Array< ModelTagsConditionInput | null > | null,
  or?: Array< ModelTagsConditionInput | null > | null,
  not?: ModelTagsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Tags = {
  __typename: "Tags",
  id: string,
  tagName?: string | null,
  tagDesc?: string | null,
  notes?: ModelTagsNotesConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelTagsNotesConnection = {
  __typename: "ModelTagsNotesConnection",
  items:  Array<TagsNotes | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type TagsNotes = {
  __typename: "TagsNotes",
  id: string,
  tagsId: string,
  notesId: string,
  tags: Tags,
  notes: Notes,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Notes = {
  __typename: "Notes",
  id: string,
  title: string,
  content: string,
  isPinned?: boolean | null,
  isPublished?: boolean | null,
  isTrashed?: boolean | null,
  Tags?: ModelTagsNotesConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTagsInput = {
  id: string,
  tagName?: string | null,
  tagDesc?: string | null,
  _version?: number | null,
};

export type DeleteTagsInput = {
  id: string,
  _version?: number | null,
};

export type CreateNotesInput = {
  id?: string | null,
  title: string,
  content: string,
  isPinned?: boolean | null,
  isPublished?: boolean | null,
  isTrashed?: boolean | null,
  _version?: number | null,
};

export type ModelNotesConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  isPinned?: ModelBooleanInput | null,
  isPublished?: ModelBooleanInput | null,
  isTrashed?: ModelBooleanInput | null,
  and?: Array< ModelNotesConditionInput | null > | null,
  or?: Array< ModelNotesConditionInput | null > | null,
  not?: ModelNotesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateNotesInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  isPinned?: boolean | null,
  isPublished?: boolean | null,
  isTrashed?: boolean | null,
  _version?: number | null,
};

export type DeleteNotesInput = {
  id: string,
  _version?: number | null,
};

export type CreateTagsNotesInput = {
  id?: string | null,
  tagsId: string,
  notesId: string,
  _version?: number | null,
};

export type ModelTagsNotesConditionInput = {
  tagsId?: ModelIDInput | null,
  notesId?: ModelIDInput | null,
  and?: Array< ModelTagsNotesConditionInput | null > | null,
  or?: Array< ModelTagsNotesConditionInput | null > | null,
  not?: ModelTagsNotesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTagsNotesInput = {
  id: string,
  tagsId?: string | null,
  notesId?: string | null,
  _version?: number | null,
};

export type DeleteTagsNotesInput = {
  id: string,
  _version?: number | null,
};

export type ModelTagsFilterInput = {
  id?: ModelIDInput | null,
  tagName?: ModelStringInput | null,
  tagDesc?: ModelStringInput | null,
  and?: Array< ModelTagsFilterInput | null > | null,
  or?: Array< ModelTagsFilterInput | null > | null,
  not?: ModelTagsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelTagsConnection = {
  __typename: "ModelTagsConnection",
  items:  Array<Tags | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelNotesFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  isPinned?: ModelBooleanInput | null,
  isPublished?: ModelBooleanInput | null,
  isTrashed?: ModelBooleanInput | null,
  and?: Array< ModelNotesFilterInput | null > | null,
  or?: Array< ModelNotesFilterInput | null > | null,
  not?: ModelNotesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelNotesConnection = {
  __typename: "ModelNotesConnection",
  items:  Array<Notes | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTagsNotesFilterInput = {
  id?: ModelIDInput | null,
  tagsId?: ModelIDInput | null,
  notesId?: ModelIDInput | null,
  and?: Array< ModelTagsNotesFilterInput | null > | null,
  or?: Array< ModelTagsNotesFilterInput | null > | null,
  not?: ModelTagsNotesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionTagsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  tagName?: ModelSubscriptionStringInput | null,
  tagDesc?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTagsFilterInput | null > | null,
  or?: Array< ModelSubscriptionTagsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionNotesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  isPinned?: ModelSubscriptionBooleanInput | null,
  isPublished?: ModelSubscriptionBooleanInput | null,
  isTrashed?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionNotesFilterInput | null > | null,
  or?: Array< ModelSubscriptionNotesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionTagsNotesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  tagsId?: ModelSubscriptionIDInput | null,
  notesId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTagsNotesFilterInput | null > | null,
  or?: Array< ModelSubscriptionTagsNotesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateTagsMutationVariables = {
  input: CreateTagsInput,
  condition?: ModelTagsConditionInput | null,
};

export type CreateTagsMutation = {
  createTags?:  {
    __typename: "Tags",
    id: string,
    tagName?: string | null,
    tagDesc?: string | null,
    notes?:  {
      __typename: "ModelTagsNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTagsMutationVariables = {
  input: UpdateTagsInput,
  condition?: ModelTagsConditionInput | null,
};

export type UpdateTagsMutation = {
  updateTags?:  {
    __typename: "Tags",
    id: string,
    tagName?: string | null,
    tagDesc?: string | null,
    notes?:  {
      __typename: "ModelTagsNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTagsMutationVariables = {
  input: DeleteTagsInput,
  condition?: ModelTagsConditionInput | null,
};

export type DeleteTagsMutation = {
  deleteTags?:  {
    __typename: "Tags",
    id: string,
    tagName?: string | null,
    tagDesc?: string | null,
    notes?:  {
      __typename: "ModelTagsNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateNotesMutationVariables = {
  input: CreateNotesInput,
  condition?: ModelNotesConditionInput | null,
};

export type CreateNotesMutation = {
  createNotes?:  {
    __typename: "Notes",
    id: string,
    title: string,
    content: string,
    isPinned?: boolean | null,
    isPublished?: boolean | null,
    isTrashed?: boolean | null,
    Tags?:  {
      __typename: "ModelTagsNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateNotesMutationVariables = {
  input: UpdateNotesInput,
  condition?: ModelNotesConditionInput | null,
};

export type UpdateNotesMutation = {
  updateNotes?:  {
    __typename: "Notes",
    id: string,
    title: string,
    content: string,
    isPinned?: boolean | null,
    isPublished?: boolean | null,
    isTrashed?: boolean | null,
    Tags?:  {
      __typename: "ModelTagsNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteNotesMutationVariables = {
  input: DeleteNotesInput,
  condition?: ModelNotesConditionInput | null,
};

export type DeleteNotesMutation = {
  deleteNotes?:  {
    __typename: "Notes",
    id: string,
    title: string,
    content: string,
    isPinned?: boolean | null,
    isPublished?: boolean | null,
    isTrashed?: boolean | null,
    Tags?:  {
      __typename: "ModelTagsNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTagsNotesMutationVariables = {
  input: CreateTagsNotesInput,
  condition?: ModelTagsNotesConditionInput | null,
};

export type CreateTagsNotesMutation = {
  createTagsNotes?:  {
    __typename: "TagsNotes",
    id: string,
    tagsId: string,
    notesId: string,
    tags:  {
      __typename: "Tags",
      id: string,
      tagName?: string | null,
      tagDesc?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    notes:  {
      __typename: "Notes",
      id: string,
      title: string,
      content: string,
      isPinned?: boolean | null,
      isPublished?: boolean | null,
      isTrashed?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTagsNotesMutationVariables = {
  input: UpdateTagsNotesInput,
  condition?: ModelTagsNotesConditionInput | null,
};

export type UpdateTagsNotesMutation = {
  updateTagsNotes?:  {
    __typename: "TagsNotes",
    id: string,
    tagsId: string,
    notesId: string,
    tags:  {
      __typename: "Tags",
      id: string,
      tagName?: string | null,
      tagDesc?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    notes:  {
      __typename: "Notes",
      id: string,
      title: string,
      content: string,
      isPinned?: boolean | null,
      isPublished?: boolean | null,
      isTrashed?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTagsNotesMutationVariables = {
  input: DeleteTagsNotesInput,
  condition?: ModelTagsNotesConditionInput | null,
};

export type DeleteTagsNotesMutation = {
  deleteTagsNotes?:  {
    __typename: "TagsNotes",
    id: string,
    tagsId: string,
    notesId: string,
    tags:  {
      __typename: "Tags",
      id: string,
      tagName?: string | null,
      tagDesc?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    notes:  {
      __typename: "Notes",
      id: string,
      title: string,
      content: string,
      isPinned?: boolean | null,
      isPublished?: boolean | null,
      isTrashed?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetTagsQueryVariables = {
  id: string,
};

export type GetTagsQuery = {
  getTags?:  {
    __typename: "Tags",
    id: string,
    tagName?: string | null,
    tagDesc?: string | null,
    notes?:  {
      __typename: "ModelTagsNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagsConnection",
    items:  Array< {
      __typename: "Tags",
      id: string,
      tagName?: string | null,
      tagDesc?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTagsQueryVariables = {
  filter?: ModelTagsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTagsQuery = {
  syncTags?:  {
    __typename: "ModelTagsConnection",
    items:  Array< {
      __typename: "Tags",
      id: string,
      tagName?: string | null,
      tagDesc?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetNotesQueryVariables = {
  id: string,
};

export type GetNotesQuery = {
  getNotes?:  {
    __typename: "Notes",
    id: string,
    title: string,
    content: string,
    isPinned?: boolean | null,
    isPublished?: boolean | null,
    isTrashed?: boolean | null,
    Tags?:  {
      __typename: "ModelTagsNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes?:  {
    __typename: "ModelNotesConnection",
    items:  Array< {
      __typename: "Notes",
      id: string,
      title: string,
      content: string,
      isPinned?: boolean | null,
      isPublished?: boolean | null,
      isTrashed?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncNotesQueryVariables = {
  filter?: ModelNotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncNotesQuery = {
  syncNotes?:  {
    __typename: "ModelNotesConnection",
    items:  Array< {
      __typename: "Notes",
      id: string,
      title: string,
      content: string,
      isPinned?: boolean | null,
      isPublished?: boolean | null,
      isTrashed?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTagsNotesQueryVariables = {
  id: string,
};

export type GetTagsNotesQuery = {
  getTagsNotes?:  {
    __typename: "TagsNotes",
    id: string,
    tagsId: string,
    notesId: string,
    tags:  {
      __typename: "Tags",
      id: string,
      tagName?: string | null,
      tagDesc?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    notes:  {
      __typename: "Notes",
      id: string,
      title: string,
      content: string,
      isPinned?: boolean | null,
      isPublished?: boolean | null,
      isTrashed?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTagsNotesQueryVariables = {
  filter?: ModelTagsNotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsNotesQuery = {
  listTagsNotes?:  {
    __typename: "ModelTagsNotesConnection",
    items:  Array< {
      __typename: "TagsNotes",
      id: string,
      tagsId: string,
      notesId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTagsNotesQueryVariables = {
  filter?: ModelTagsNotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTagsNotesQuery = {
  syncTagsNotes?:  {
    __typename: "ModelTagsNotesConnection",
    items:  Array< {
      __typename: "TagsNotes",
      id: string,
      tagsId: string,
      notesId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type TagsNotesByTagsIdQueryVariables = {
  tagsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTagsNotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TagsNotesByTagsIdQuery = {
  tagsNotesByTagsId?:  {
    __typename: "ModelTagsNotesConnection",
    items:  Array< {
      __typename: "TagsNotes",
      id: string,
      tagsId: string,
      notesId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type TagsNotesByNotesIdQueryVariables = {
  notesId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTagsNotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TagsNotesByNotesIdQuery = {
  tagsNotesByNotesId?:  {
    __typename: "ModelTagsNotesConnection",
    items:  Array< {
      __typename: "TagsNotes",
      id: string,
      tagsId: string,
      notesId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateTagsSubscriptionVariables = {
  filter?: ModelSubscriptionTagsFilterInput | null,
};

export type OnCreateTagsSubscription = {
  onCreateTags?:  {
    __typename: "Tags",
    id: string,
    tagName?: string | null,
    tagDesc?: string | null,
    notes?:  {
      __typename: "ModelTagsNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTagsSubscriptionVariables = {
  filter?: ModelSubscriptionTagsFilterInput | null,
};

export type OnUpdateTagsSubscription = {
  onUpdateTags?:  {
    __typename: "Tags",
    id: string,
    tagName?: string | null,
    tagDesc?: string | null,
    notes?:  {
      __typename: "ModelTagsNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTagsSubscriptionVariables = {
  filter?: ModelSubscriptionTagsFilterInput | null,
};

export type OnDeleteTagsSubscription = {
  onDeleteTags?:  {
    __typename: "Tags",
    id: string,
    tagName?: string | null,
    tagDesc?: string | null,
    notes?:  {
      __typename: "ModelTagsNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateNotesSubscriptionVariables = {
  filter?: ModelSubscriptionNotesFilterInput | null,
};

export type OnCreateNotesSubscription = {
  onCreateNotes?:  {
    __typename: "Notes",
    id: string,
    title: string,
    content: string,
    isPinned?: boolean | null,
    isPublished?: boolean | null,
    isTrashed?: boolean | null,
    Tags?:  {
      __typename: "ModelTagsNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateNotesSubscriptionVariables = {
  filter?: ModelSubscriptionNotesFilterInput | null,
};

export type OnUpdateNotesSubscription = {
  onUpdateNotes?:  {
    __typename: "Notes",
    id: string,
    title: string,
    content: string,
    isPinned?: boolean | null,
    isPublished?: boolean | null,
    isTrashed?: boolean | null,
    Tags?:  {
      __typename: "ModelTagsNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteNotesSubscriptionVariables = {
  filter?: ModelSubscriptionNotesFilterInput | null,
};

export type OnDeleteNotesSubscription = {
  onDeleteNotes?:  {
    __typename: "Notes",
    id: string,
    title: string,
    content: string,
    isPinned?: boolean | null,
    isPublished?: boolean | null,
    isTrashed?: boolean | null,
    Tags?:  {
      __typename: "ModelTagsNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTagsNotesSubscriptionVariables = {
  filter?: ModelSubscriptionTagsNotesFilterInput | null,
};

export type OnCreateTagsNotesSubscription = {
  onCreateTagsNotes?:  {
    __typename: "TagsNotes",
    id: string,
    tagsId: string,
    notesId: string,
    tags:  {
      __typename: "Tags",
      id: string,
      tagName?: string | null,
      tagDesc?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    notes:  {
      __typename: "Notes",
      id: string,
      title: string,
      content: string,
      isPinned?: boolean | null,
      isPublished?: boolean | null,
      isTrashed?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTagsNotesSubscriptionVariables = {
  filter?: ModelSubscriptionTagsNotesFilterInput | null,
};

export type OnUpdateTagsNotesSubscription = {
  onUpdateTagsNotes?:  {
    __typename: "TagsNotes",
    id: string,
    tagsId: string,
    notesId: string,
    tags:  {
      __typename: "Tags",
      id: string,
      tagName?: string | null,
      tagDesc?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    notes:  {
      __typename: "Notes",
      id: string,
      title: string,
      content: string,
      isPinned?: boolean | null,
      isPublished?: boolean | null,
      isTrashed?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTagsNotesSubscriptionVariables = {
  filter?: ModelSubscriptionTagsNotesFilterInput | null,
};

export type OnDeleteTagsNotesSubscription = {
  onDeleteTagsNotes?:  {
    __typename: "TagsNotes",
    id: string,
    tagsId: string,
    notesId: string,
    tags:  {
      __typename: "Tags",
      id: string,
      tagName?: string | null,
      tagDesc?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    notes:  {
      __typename: "Notes",
      id: string,
      title: string,
      content: string,
      isPinned?: boolean | null,
      isPublished?: boolean | null,
      isTrashed?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
