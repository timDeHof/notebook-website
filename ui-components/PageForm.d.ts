/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Subject as Subject0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PageFormInputValues = {
    Subject?: Subject0;
    title?: string;
    content?: string;
};
export declare type PageFormValidationValues = {
    Subject?: ValidationFunction<Subject0>;
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PageFormOverridesProps = {
    PageFormGrid?: PrimitiveOverrideProps<GridProps>;
    Subject?: PrimitiveOverrideProps<AutocompleteProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PageFormProps = React.PropsWithChildren<{
    overrides?: PageFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PageFormInputValues) => PageFormInputValues;
    onSuccess?: (fields: PageFormInputValues) => void;
    onError?: (fields: PageFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PageFormInputValues) => PageFormInputValues;
    onValidate?: PageFormValidationValues;
} & React.CSSProperties>;
export default function PageForm(props: PageFormProps): React.ReactElement;
