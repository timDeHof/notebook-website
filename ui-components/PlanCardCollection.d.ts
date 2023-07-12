/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PlanCardProps } from "./PlanCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlanCardCollectionOverridesProps = {
    PlanCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    PlanCard?: PlanCardProps;
} & EscapeHatchProps;
export declare type PlanCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => PlanCardProps;
} & {
    overrides?: PlanCardCollectionOverridesProps | undefined | null;
}>;
export default function PlanCardCollection(props: PlanCardCollectionProps): React.ReactElement;
