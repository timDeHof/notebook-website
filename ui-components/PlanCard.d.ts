/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pricing } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlanCardOverridesProps = {
    PlanCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 429"?: PrimitiveOverrideProps<FlexProps>;
    "Free plan"?: PrimitiveOverrideProps<TextProps>;
    "$0/mo"?: PrimitiveOverrideProps<TextProps>;
    "Free forever, always"?: PrimitiveOverrideProps<TextProps>;
    "Frame 5591"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 138"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43039515134"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39515135?: MyIconProps;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.39515136"?: PrimitiveOverrideProps<TextProps>;
    "Frame 13939515137"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 431"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39515139?: MyIconProps;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.39515140"?: PrimitiveOverrideProps<TextProps>;
    "Frame 137"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43039515142"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39515143?: MyIconProps;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.39515144"?: PrimitiveOverrideProps<TextProps>;
    "Frame 13940142634"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43040142635"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40142636?: MyIconProps;
    "1GB of uploads per month40142637"?: PrimitiveOverrideProps<TextProps>;
    "Frame 13940143244"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43040143245"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon40143246?: MyIconProps;
    "1GB of uploads per month40143247"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type PlanCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    PricingModel?: Pricing;
    handleMembership?: (event: SyntheticEvent) => void;
} & {
    overrides?: PlanCardOverridesProps | undefined | null;
}>;
export default function PlanCard(props: PlanCardProps): React.ReactElement;
