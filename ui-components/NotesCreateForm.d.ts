/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Tags as Tags0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NotesCreateFormInputValues = {
    title?: string;
    content?: string;
    Tags?: Tags0[];
};
export declare type NotesCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    Tags?: ValidationFunction<Tags0>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotesCreateFormOverridesProps = {
    NotesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Tags?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type NotesCreateFormProps = React.PropsWithChildren<{
    overrides?: NotesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NotesCreateFormInputValues) => NotesCreateFormInputValues;
    onSuccess?: (fields: NotesCreateFormInputValues) => void;
    onError?: (fields: NotesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotesCreateFormInputValues) => NotesCreateFormInputValues;
    onValidate?: NotesCreateFormValidationValues;
} & React.CSSProperties>;
export default function NotesCreateForm(props: NotesCreateFormProps): React.ReactElement;
