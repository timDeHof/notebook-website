/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PageProps } from "./Page";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PageCollectionOverridesProps = {
    PageCollection?: PrimitiveOverrideProps<CollectionProps>;
    Page?: PageProps;
} & EscapeHatchProps;
export declare type PageCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => PageProps;
} & {
    overrides?: PageCollectionOverridesProps | undefined | null;
}>;
export default function PageCollection(props: PageCollectionProps): React.ReactElement;
