/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Subject as Subject0, Page } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NotebookCreateFormInputValues = {
    name?: string;
    Subject?: Subject0;
    Pages?: Page[];
    pageCount?: number;
    description?: string;
};
export declare type NotebookCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    Subject?: ValidationFunction<Subject0>;
    Pages?: ValidationFunction<Page>;
    pageCount?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotebookCreateFormOverridesProps = {
    NotebookCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Subject?: PrimitiveOverrideProps<AutocompleteProps>;
    Pages?: PrimitiveOverrideProps<AutocompleteProps>;
    pageCount?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotebookCreateFormProps = React.PropsWithChildren<{
    overrides?: NotebookCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NotebookCreateFormInputValues) => NotebookCreateFormInputValues;
    onSuccess?: (fields: NotebookCreateFormInputValues) => void;
    onError?: (fields: NotebookCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotebookCreateFormInputValues) => NotebookCreateFormInputValues;
    onValidate?: NotebookCreateFormValidationValues;
} & React.CSSProperties>;
export default function NotebookCreateForm(props: NotebookCreateFormProps): React.ReactElement;
