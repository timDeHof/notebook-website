import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerTestimonial = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Testimonial, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly avatar?: string | null;
  readonly testimony?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestimonial = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Testimonial, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly avatar?: string | null;
  readonly testimony?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Testimonial = LazyLoading extends LazyLoadingDisabled ? EagerTestimonial : LazyTestimonial

export declare const Testimonial: (new (init: ModelInit<Testimonial>) => Testimonial) & {
  copyOf(source: Testimonial, mutator: (draft: MutableModel<Testimonial>) => MutableModel<Testimonial> | void): Testimonial;
}

type EagerNotebook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notebook, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly Subject?: Subject | null;
  readonly Pages?: (Page | null)[] | null;
  readonly pageCount?: number | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly notebookSubjectId?: string | null;
}

type LazyNotebook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notebook, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly Subject: AsyncItem<Subject | undefined>;
  readonly Pages: AsyncCollection<Page>;
  readonly pageCount?: number | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly notebookSubjectId?: string | null;
}

export declare type Notebook = LazyLoading extends LazyLoadingDisabled ? EagerNotebook : LazyNotebook

export declare const Notebook: (new (init: ModelInit<Notebook>) => Notebook) & {
  copyOf(source: Notebook, mutator: (draft: MutableModel<Notebook>) => MutableModel<Notebook> | void): Notebook;
}

type EagerSubject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Subject, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly Pages?: (Page | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySubject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Subject, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly Pages: AsyncCollection<Page>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Subject = LazyLoading extends LazyLoadingDisabled ? EagerSubject : LazySubject

export declare const Subject: (new (init: ModelInit<Subject>) => Subject) & {
  copyOf(source: Subject, mutator: (draft: MutableModel<Subject>) => MutableModel<Subject> | void): Subject;
}

type EagerPage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Page, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly subjectID: string;
  readonly Subject?: Subject | null;
  readonly notebookID: string;
  readonly Notebook?: Notebook | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Page, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly subjectID: string;
  readonly Subject: AsyncItem<Subject | undefined>;
  readonly notebookID: string;
  readonly Notebook: AsyncItem<Notebook | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Page = LazyLoading extends LazyLoadingDisabled ? EagerPage : LazyPage

export declare const Page: (new (init: ModelInit<Page>) => Page) & {
  copyOf(source: Page, mutator: (draft: MutableModel<Page>) => MutableModel<Page> | void): Page;
}