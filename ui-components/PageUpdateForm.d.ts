/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Page, Subject as Subject0, Notebook as Notebook0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PageUpdateFormInputValues = {
    title?: string;
    content?: string;
    Subject?: Subject0;
    Notebook?: Notebook0;
};
export declare type PageUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    Subject?: ValidationFunction<Subject0>;
    Notebook?: ValidationFunction<Notebook0>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PageUpdateFormOverridesProps = {
    PageUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    Subject?: PrimitiveOverrideProps<AutocompleteProps>;
    Notebook?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type PageUpdateFormProps = React.PropsWithChildren<{
    overrides?: PageUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    page?: Page;
    onSubmit?: (fields: PageUpdateFormInputValues) => PageUpdateFormInputValues;
    onSuccess?: (fields: PageUpdateFormInputValues) => void;
    onError?: (fields: PageUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PageUpdateFormInputValues) => PageUpdateFormInputValues;
    onValidate?: PageUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PageUpdateForm(props: PageUpdateFormProps): React.ReactElement;
