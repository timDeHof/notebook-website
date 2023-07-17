/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Notes, Tags as Tags0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NotesUpdateFormInputValues = {
    title?: string;
    content?: string;
    isPublished?: boolean;
    isTrashed?: boolean;
    Tags?: Tags0[];
};
export declare type NotesUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    isPublished?: ValidationFunction<boolean>;
    isTrashed?: ValidationFunction<boolean>;
    Tags?: ValidationFunction<Tags0>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotesUpdateFormOverridesProps = {
    NotesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    isPublished?: PrimitiveOverrideProps<SwitchFieldProps>;
    isTrashed?: PrimitiveOverrideProps<SwitchFieldProps>;
    Tags?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type NotesUpdateFormProps = React.PropsWithChildren<{
    overrides?: NotesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    notes?: Notes;
    onSubmit?: (fields: NotesUpdateFormInputValues) => NotesUpdateFormInputValues;
    onSuccess?: (fields: NotesUpdateFormInputValues) => void;
    onError?: (fields: NotesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotesUpdateFormInputValues) => NotesUpdateFormInputValues;
    onValidate?: NotesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NotesUpdateForm(props: NotesUpdateFormProps): React.ReactElement;
