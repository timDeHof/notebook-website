/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroOverridesProps = {
    Hero?: PrimitiveOverrideProps<FlexProps>;
    "Experience the full power of our app \u2013 Upgrade to Pro."?: PrimitiveOverrideProps<TextProps>;
    "Button Area"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 5588"?: PrimitiveOverrideProps<FlexProps>;
    "\uD83D\uDCB0"?: PrimitiveOverrideProps<TextProps>;
    "For just $9.99/month"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeroProps = React.PropsWithChildren<Partial<FlexProps> & {
    handleClick?: (event: SyntheticEvent) => void;
} & {
    overrides?: HeroOverridesProps | undefined | null;
}>;
export default function Hero(props: HeroProps): React.ReactElement;
