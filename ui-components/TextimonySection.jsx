/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import FooterTestimony from "./FooterTestimony";
export default function TextimonySection(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="34px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="37px 108px 37px 108px"
      backgroundColor="rgba(9,27,42,1)"
      {...getOverrideProps(overrides, "TextimonySection")}
      {...rest}
    >
      <Flex
        gap="12px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 432")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="32px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Don’t Only Trust Our Words"
          {...getOverrideProps(overrides, "Don't Only Trust Our Words")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(186,181,181,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Students around the globe share their opinions"
          {...getOverrideProps(
            overrides,
            "Students around the globe share their opinions"
          )}
        ></Text>
      </Flex>
      <View
        width="1224px"
        height="375px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 5597")}
      >
        <FooterTestimony
          width="380px"
          height="372px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="2px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Footer/Testimony39793048")}
        ></FooterTestimony>
        <FooterTestimony
          width="380px"
          height="372px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="2px"
          left="404px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Footer/Testimony39793055")}
        ></FooterTestimony>
        <FooterTestimony
          width="380px"
          height="372px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="2px"
          left="808px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Footer/Testimony39793062")}
        ></FooterTestimony>
      </View>
    </Flex>
  );
}
