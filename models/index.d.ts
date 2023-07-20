import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerTags = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tags, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tagName?: string | null;
  readonly tagDesc?: string | null;
  readonly notes?: (TagsNotes | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTags = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tags, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tagName?: string | null;
  readonly tagDesc?: string | null;
  readonly notes: AsyncCollection<TagsNotes>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tags = LazyLoading extends LazyLoadingDisabled ? EagerTags : LazyTags

export declare const Tags: (new (init: ModelInit<Tags>) => Tags) & {
  copyOf(source: Tags, mutator: (draft: MutableModel<Tags>) => MutableModel<Tags> | void): Tags;
}

type EagerNotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly isPinned?: boolean | null;
  readonly isPublished?: boolean | null;
  readonly isTrashed?: boolean | null;
  readonly Tags?: (TagsNotes | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly isPinned?: boolean | null;
  readonly isPublished?: boolean | null;
  readonly isTrashed?: boolean | null;
  readonly Tags: AsyncCollection<TagsNotes>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Notes = LazyLoading extends LazyLoadingDisabled ? EagerNotes : LazyNotes

export declare const Notes: (new (init: ModelInit<Notes>) => Notes) & {
  copyOf(source: Notes, mutator: (draft: MutableModel<Notes>) => MutableModel<Notes> | void): Notes;
}

type EagerTagsNotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TagsNotes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tagsId?: string | null;
  readonly notesId?: string | null;
  readonly tags: Tags;
  readonly notes: Notes;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTagsNotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TagsNotes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tagsId?: string | null;
  readonly notesId?: string | null;
  readonly tags: AsyncItem<Tags>;
  readonly notes: AsyncItem<Notes>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TagsNotes = LazyLoading extends LazyLoadingDisabled ? EagerTagsNotes : LazyTagsNotes

export declare const TagsNotes: (new (init: ModelInit<TagsNotes>) => TagsNotes) & {
  copyOf(source: TagsNotes, mutator: (draft: MutableModel<TagsNotes>) => MutableModel<TagsNotes> | void): TagsNotes;
}