/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Page } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SubjectCreateFormInputValues = {
    name?: string;
    Pages?: Page[];
};
export declare type SubjectCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    Pages?: ValidationFunction<Page>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubjectCreateFormOverridesProps = {
    SubjectCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Pages?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type SubjectCreateFormProps = React.PropsWithChildren<{
    overrides?: SubjectCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SubjectCreateFormInputValues) => SubjectCreateFormInputValues;
    onSuccess?: (fields: SubjectCreateFormInputValues) => void;
    onError?: (fields: SubjectCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubjectCreateFormInputValues) => SubjectCreateFormInputValues;
    onValidate?: SubjectCreateFormValidationValues;
} & React.CSSProperties>;
export default function SubjectCreateForm(props: SubjectCreateFormProps): React.ReactElement;
