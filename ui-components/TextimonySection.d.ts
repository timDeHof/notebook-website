/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { FooterTestimonyProps } from "./FooterTestimony";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TextimonySectionOverridesProps = {
    TextimonySection?: PrimitiveOverrideProps<FlexProps>;
    "Frame 432"?: PrimitiveOverrideProps<FlexProps>;
    "Don't Only Trust Our Words"?: PrimitiveOverrideProps<TextProps>;
    "Students around the globe share their opinions"?: PrimitiveOverrideProps<TextProps>;
    "Frame 5597"?: PrimitiveOverrideProps<ViewProps>;
    "Footer/Testimony39793048"?: FooterTestimonyProps;
    "Footer/Testimony39793055"?: FooterTestimonyProps;
    "Footer/Testimony39793062"?: FooterTestimonyProps;
} & EscapeHatchProps;
export declare type TextimonySectionProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TextimonySectionOverridesProps | undefined | null;
}>;
export default function TextimonySection(props: TextimonySectionProps): React.ReactElement;
