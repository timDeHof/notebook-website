/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Logo3Props } from "./Logo3";
import { ButtonProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavOverridesProps = {
    Nav?: PrimitiveOverrideProps<FlexProps>;
    "Logo 3"?: Logo3Props;
    Menu?: PrimitiveOverrideProps<FlexProps>;
    User39476179?: PrimitiveOverrideProps<FlexProps>;
    User39476180?: PrimitiveOverrideProps<FlexProps>;
    Avatar?: PrimitiveOverrideProps<ViewProps>;
    "Group 6027"?: PrimitiveOverrideProps<ViewProps>;
    Base?: PrimitiveOverrideProps<IconProps>;
    C?: PrimitiveOverrideProps<TextProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavProps = React.PropsWithChildren<Partial<FlexProps> & {
    username?: String;
    authText?: String;
    handleAuth?: (event: SyntheticEvent) => void;
    avatar?: String;
    Small?: Boolean;
} & {
    overrides?: NavOverridesProps | undefined | null;
}>;
export default function Nav(props: NavProps): React.ReactElement;
