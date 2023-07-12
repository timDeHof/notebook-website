/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PricingCreateFormInputValues = {
    plan?: string;
    price?: string;
    details?: string[];
    catchPhase?: string;
};
export declare type PricingCreateFormValidationValues = {
    plan?: ValidationFunction<string>;
    price?: ValidationFunction<string>;
    details?: ValidationFunction<string>;
    catchPhase?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PricingCreateFormOverridesProps = {
    PricingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    plan?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    details?: PrimitiveOverrideProps<TextFieldProps>;
    catchPhase?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PricingCreateFormProps = React.PropsWithChildren<{
    overrides?: PricingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PricingCreateFormInputValues) => PricingCreateFormInputValues;
    onSuccess?: (fields: PricingCreateFormInputValues) => void;
    onError?: (fields: PricingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PricingCreateFormInputValues) => PricingCreateFormInputValues;
    onValidate?: PricingCreateFormValidationValues;
} & React.CSSProperties>;
export default function PricingCreateForm(props: PricingCreateFormProps): React.ReactElement;
