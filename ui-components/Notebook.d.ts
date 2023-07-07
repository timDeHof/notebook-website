/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Notebook } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotebookOverridesProps = {
    Notebook?: PrimitiveOverrideProps<FlexProps>;
    Banner?: PrimitiveOverrideProps<ImageProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<ViewProps>;
    PageCount?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NotebookProps = React.PropsWithChildren<Partial<FlexProps> & {
    NoteBookModel?: Notebook;
} & {
    overrides?: NotebookOverridesProps | undefined | null;
}>;
export default function Notebook(props: NotebookProps): React.ReactElement;
