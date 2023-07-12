/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Feature } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FeatureUpdateFormInputValues = {
    name?: string;
    Description?: string;
};
export declare type FeatureUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeatureUpdateFormOverridesProps = {
    FeatureUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FeatureUpdateFormProps = React.PropsWithChildren<{
    overrides?: FeatureUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    feature?: Feature;
    onSubmit?: (fields: FeatureUpdateFormInputValues) => FeatureUpdateFormInputValues;
    onSuccess?: (fields: FeatureUpdateFormInputValues) => void;
    onError?: (fields: FeatureUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeatureUpdateFormInputValues) => FeatureUpdateFormInputValues;
    onValidate?: FeatureUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FeatureUpdateForm(props: FeatureUpdateFormProps): React.ReactElement;
