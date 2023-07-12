/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FeatureCardProps } from "./FeatureCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturesCollectionOverridesProps = {
    FeaturesCollection?: PrimitiveOverrideProps<CollectionProps>;
    FeatureCard?: FeatureCardProps;
} & EscapeHatchProps;
export declare type FeaturesCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => FeatureCardProps;
} & {
    overrides?: FeaturesCollectionOverridesProps | undefined | null;
}>;
export default function FeaturesCollection(props: FeaturesCollectionProps): React.ReactElement;
