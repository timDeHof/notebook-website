/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ReacticonsbiBiBookAddProps } from "./ReacticonsbiBiBookAdd";
import { NotebookitemProps } from "./Notebookitem";
import { ReacticonsbiBiChevronLeftProps } from "./ReacticonsbiBiChevronLeft";
import { Logo3Props } from "./Logo3";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SidebarOverridesProps = {
    Sidebar?: PrimitiveOverrideProps<FlexProps>;
    Content39793153?: PrimitiveOverrideProps<FlexProps>;
    Nav39793154?: PrimitiveOverrideProps<FlexProps>;
    Navigation?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 5601"?: PrimitiveOverrideProps<FlexProps>;
    "_Nav item base39793166"?: PrimitiveOverrideProps<FlexProps>;
    Content39793167?: PrimitiveOverrideProps<FlexProps>;
    Text39793168?: PrimitiveOverrideProps<TextProps>;
    "react-icons/bi/BiBookAdd"?: ReacticonsbiBiBookAddProps;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 5598"?: PrimitiveOverrideProps<ViewProps>;
    "Notebook item40302618"?: NotebookitemProps;
    "Notebook item40302645"?: NotebookitemProps;
    "Notebook item40302675"?: NotebookitemProps;
    "Notebook item40302707"?: NotebookitemProps;
    footer?: PrimitiveOverrideProps<FlexProps>;
    Nav39793172?: PrimitiveOverrideProps<ViewProps>;
    "_Nav item base39793173"?: PrimitiveOverrideProps<FlexProps>;
    Content39793174?: PrimitiveOverrideProps<FlexProps>;
    "message-circle"?: PrimitiveOverrideProps<ViewProps>;
    Text39793176?: PrimitiveOverrideProps<TextProps>;
    "_Nav item base39793177"?: PrimitiveOverrideProps<FlexProps>;
    Content39793178?: PrimitiveOverrideProps<FlexProps>;
    "react-icons/bi/BiChevronLeft"?: ReacticonsbiBiChevronLeftProps;
    Text39793180?: PrimitiveOverrideProps<TextProps>;
    "Frame 5605"?: PrimitiveOverrideProps<FlexProps>;
    "Logo 3"?: Logo3Props;
} & EscapeHatchProps;
export declare type SidebarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SidebarOverridesProps | undefined | null;
}>;
export default function Sidebar(props: SidebarProps): React.ReactElement;
