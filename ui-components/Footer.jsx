/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import Logo3 from "./Logo3";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Footer(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { breakpoint: "Desktop" },
      overrides: {
        "Logo 3": {},
        "\u00A9 Copyright , Algomentor 2022": {},
        Footer: {},
      },
    },
    {
      variantValues: { breakpoint: "Mobile" },
      overrides: {
        "Logo 3": { breakpoint: "small", width: "46px" },
        "\u00A9 Copyright , Algomentor 2022": { shrink: "0" },
        Footer: {
          direction: "column",
          width: "375px",
          height: "177px",
          justifyContent: "center",
        },
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="8px 24px 8px 24px"
      backgroundColor="rgba(9,27,42,1)"
      display="flex"
      {...getOverrideProps(overrides, "Footer")}
      {...rest}
    >
      <Logo3
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        breakpoint="large"
        {...getOverrideProps(overrides, "Logo 3")}
      ></Logo3>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(239,240,240,1)"
        lineHeight="24px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="© Copyright , Algomentor 2022"
        {...getOverrideProps(overrides, "\u00A9 Copyright , Algomentor 2022")}
      ></Text>
    </Flex>
  );
}
