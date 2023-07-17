/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function PlanCard(props) {
  const { PricingModel, handleMembership, overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="375px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 4px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.05000000074505806)"
      borderRadius="8px"
      padding="32px 16px 32px 16px"
      backgroundColor="rgba(226,98,24,1)"
      {...getOverrideProps(overrides, "PlanCard")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 429")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(0,34,102,1)"
          lineHeight="30px"
          textAlign="center"
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
          children={PricingModel?.plan}
          {...getOverrideProps(overrides, "Free plan")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="600"
          color="rgba(0,34,102,1)"
          lineHeight="25px"
          textAlign="center"
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
          children={PricingModel?.price}
          {...getOverrideProps(overrides, "$0/mo")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(186,181,181,1)"
          lineHeight="25px"
          textAlign="center"
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
          children={PricingModel?.catchPhase}
          {...getOverrideProps(overrides, "Free forever, always")}
        ></Text>
      </Flex>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 5591")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 138")}
        >
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            borderRadius="8px"
            padding="8px 8px 8px 8px"
            backgroundColor="rgba(241,178,142,1)"
            {...getOverrideProps(overrides, "Frame 43039515134")}
          >
            <MyIcon
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              type="BiCheck"
              {...getOverrideProps(overrides, "MyIcon39515135")}
            ></MyIcon>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,34,102,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="312px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            {...getOverrideProps(
              overrides,
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.39515136"
            )}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 13939515137")}
        >
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            borderRadius="8px"
            padding="8px 8px 8px 8px"
            backgroundColor="rgba(241,178,142,1)"
            {...getOverrideProps(overrides, "Frame 431")}
          >
            <MyIcon
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              type="BiCheck"
              {...getOverrideProps(overrides, "MyIcon39515139")}
            ></MyIcon>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,34,102,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="312px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            {...getOverrideProps(
              overrides,
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.39515140"
            )}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 137")}
        >
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            borderRadius="8px"
            padding="8px 8px 8px 8px"
            backgroundColor="rgba(241,178,142,1)"
            {...getOverrideProps(overrides, "Frame 43039515142")}
          >
            <MyIcon
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              type="BiCheck"
              {...getOverrideProps(overrides, "MyIcon39515143")}
            ></MyIcon>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,34,102,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="312px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            {...getOverrideProps(
              overrides,
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.39515144"
            )}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 13940142634")}
        >
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            borderRadius="8px"
            padding="8px 8px 8px 8px"
            backgroundColor="rgba(241,178,142,1)"
            {...getOverrideProps(overrides, "Frame 43040142635")}
          >
            <MyIcon
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              type="BiCheck"
              {...getOverrideProps(overrides, "MyIcon40142636")}
            ></MyIcon>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,34,102,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="1GB of uploads per month"
            {...getOverrideProps(overrides, "1GB of uploads per month40142637")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 13940143244")}
        >
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            borderRadius="8px"
            padding="8px 8px 8px 8px"
            backgroundColor="rgba(241,178,142,1)"
            {...getOverrideProps(overrides, "Frame 43040143245")}
          >
            <MyIcon
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              type="BiCheck"
              {...getOverrideProps(overrides, "MyIcon40143246")}
            ></MyIcon>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,34,102,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="1GB of uploads per month"
            {...getOverrideProps(overrides, "1GB of uploads per month40143247")}
          ></Text>
        </Flex>
      </Flex>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        backgroundColor="rgba(0,34,102,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Get started"
        onClick={handleMembership}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
