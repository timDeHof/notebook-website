/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Logo3Props } from "./Logo3";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FooterOverridesProps = {
    Footer?: PrimitiveOverrideProps<FlexProps>;
    "Logo 3"?: Logo3Props;
    "\u00A9 Copyright , Algomentor 2022"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FooterProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "Desktop" | "Mobile";
} & {
    overrides?: FooterOverridesProps | undefined | null;
}>;
export default function Footer(props: FooterProps): React.ReactElement;
