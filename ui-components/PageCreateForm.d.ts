/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Subject as Subject0, Notebook as Notebook0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PageCreateFormInputValues = {
    title?: string;
    content?: string;
    Subject?: Subject0;
    Notebook?: Notebook0;
};
export declare type PageCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    Subject?: ValidationFunction<Subject0>;
    Notebook?: ValidationFunction<Notebook0>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PageCreateFormOverridesProps = {
    PageCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    Subject?: PrimitiveOverrideProps<AutocompleteProps>;
    Notebook?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type PageCreateFormProps = React.PropsWithChildren<{
    overrides?: PageCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PageCreateFormInputValues) => PageCreateFormInputValues;
    onSuccess?: (fields: PageCreateFormInputValues) => void;
    onError?: (fields: PageCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PageCreateFormInputValues) => PageCreateFormInputValues;
    onValidate?: PageCreateFormValidationValues;
} & React.CSSProperties>;
export default function PageCreateForm(props: PageCreateFormProps): React.ReactElement;
