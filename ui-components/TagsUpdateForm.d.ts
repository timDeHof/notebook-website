/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Tags, Notes } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TagsUpdateFormInputValues = {
    tagName?: string;
    tagDesc?: string;
    notes?: Notes[];
};
export declare type TagsUpdateFormValidationValues = {
    tagName?: ValidationFunction<string>;
    tagDesc?: ValidationFunction<string>;
    notes?: ValidationFunction<Notes>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TagsUpdateFormOverridesProps = {
    TagsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    tagName?: PrimitiveOverrideProps<TextFieldProps>;
    tagDesc?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type TagsUpdateFormProps = React.PropsWithChildren<{
    overrides?: TagsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tags?: Tags;
    onSubmit?: (fields: TagsUpdateFormInputValues) => TagsUpdateFormInputValues;
    onSuccess?: (fields: TagsUpdateFormInputValues) => void;
    onError?: (fields: TagsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TagsUpdateFormInputValues) => TagsUpdateFormInputValues;
    onValidate?: TagsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TagsUpdateForm(props: TagsUpdateFormProps): React.ReactElement;
