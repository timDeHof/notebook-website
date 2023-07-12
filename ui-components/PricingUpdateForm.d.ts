/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Pricing } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PricingUpdateFormInputValues = {
    plan?: string;
    price?: string;
    details?: string[];
    catchPhase?: string;
};
export declare type PricingUpdateFormValidationValues = {
    plan?: ValidationFunction<string>;
    price?: ValidationFunction<string>;
    details?: ValidationFunction<string>;
    catchPhase?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PricingUpdateFormOverridesProps = {
    PricingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    plan?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    details?: PrimitiveOverrideProps<TextFieldProps>;
    catchPhase?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PricingUpdateFormProps = React.PropsWithChildren<{
    overrides?: PricingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pricing?: Pricing;
    onSubmit?: (fields: PricingUpdateFormInputValues) => PricingUpdateFormInputValues;
    onSuccess?: (fields: PricingUpdateFormInputValues) => void;
    onError?: (fields: PricingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PricingUpdateFormInputValues) => PricingUpdateFormInputValues;
    onValidate?: PricingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PricingUpdateForm(props: PricingUpdateFormProps): React.ReactElement;
