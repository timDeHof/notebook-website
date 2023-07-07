/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Notebook, Subject as Subject0, Page } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NotebookUpdateFormInputValues = {
    name?: string;
    Subject?: Subject0;
    Pages?: Page[];
    pageCount?: number;
    description?: string;
};
export declare type NotebookUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    Subject?: ValidationFunction<Subject0>;
    Pages?: ValidationFunction<Page>;
    pageCount?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotebookUpdateFormOverridesProps = {
    NotebookUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Subject?: PrimitiveOverrideProps<AutocompleteProps>;
    Pages?: PrimitiveOverrideProps<AutocompleteProps>;
    pageCount?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotebookUpdateFormProps = React.PropsWithChildren<{
    overrides?: NotebookUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    notebook?: Notebook;
    onSubmit?: (fields: NotebookUpdateFormInputValues) => NotebookUpdateFormInputValues;
    onSuccess?: (fields: NotebookUpdateFormInputValues) => void;
    onError?: (fields: NotebookUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotebookUpdateFormInputValues) => NotebookUpdateFormInputValues;
    onValidate?: NotebookUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NotebookUpdateForm(props: NotebookUpdateFormProps): React.ReactElement;
