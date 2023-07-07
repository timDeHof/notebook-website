/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { StoryProps } from "./Story";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotebookCollectionOverridesProps = {
    NotebookCollection?: PrimitiveOverrideProps<CollectionProps>;
    Story?: StoryProps;
} & EscapeHatchProps;
export declare type NotebookCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => StoryProps;
} & {
    overrides?: NotebookCollectionOverridesProps | undefined | null;
}>;
export default function NotebookCollection(props: NotebookCollectionProps): React.ReactElement;
