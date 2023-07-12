/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Feature } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ReacticonsbiBiCheckProps } from "./ReacticonsbiBiCheck";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeatureCardOverridesProps = {
    FeatureCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5602"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5603"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 430"?: PrimitiveOverrideProps<FlexProps>;
    "react-icons/bi/BiCheck"?: ReacticonsbiBiCheckProps;
    "Feature A"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FeatureCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    FeatureModel?: Feature;
} & {
    overrides?: FeatureCardOverridesProps | undefined | null;
}>;
export default function FeatureCard(props: FeatureCardProps): React.ReactElement;
