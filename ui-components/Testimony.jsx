/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Testimony(props) {
  const { testimonyModel, overrides, ...rest } = props;
  return (
    <View
      width="380px"
      height="372px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Testimony")}
      {...rest}
    >
      <Flex
        gap="20px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="45px"
        left="0px"
        borderRadius="12px"
        padding="56px 32px 32px 32px"
        backgroundColor="rgba(17,35,49,1)"
        {...getOverrideProps(overrides, "ContentGroup")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Content")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Testimony39476166")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(194,202,209,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="314px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={testimonyModel?.testimony}
              {...getOverrideProps(
                overrides,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat dui, sed potenti et rhoncus ut. Odio diam sit rhoncus mauris. Nunc eros, turpis eleifend justo vulputate ipsum. dfgdfgdfgdffdhfghfgddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
              )}
            ></Text>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="800"
            color="rgba(239,240,240,1)"
            lineHeight="20px"
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
            children={testimonyModel?.name}
            {...getOverrideProps(overrides, "Author")}
          ></Text>
        </Flex>
      </Flex>
      <Image
        width="96px"
        height="96px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-3px"
        left="35px"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={testimonyModel?.avatar}
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </View>
  );
}
