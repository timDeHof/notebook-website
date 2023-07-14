/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react"
import {
  getOverrideProps,
  useDataStoreCreateAction,
} from "@aws-amplify/ui-react/internal"
import { BiBookOpen, BiBookAdd } from "react-icons/bi"
import { Page } from "../models"
import { schema } from "../models/schema"
import { Button, Divider, Flex, Text, View, Icon } from "@aws-amplify/ui-react"
import ReacticonsbiBiBookAdd from "./ReacticonsbiBiBookAdd"
import Notebookitem from "./Notebookitem"
import ReacticonsbiBiChevronLeft from "./ReacticonsbiBiChevronLeft"
import Logo3 from "./Logo3"
export default function Sidebar(props) {
  const { overrides, ...rest } = props
  const buttonOnClick = useDataStoreCreateAction({
    model: Page,
    fields: {},
    schema: schema,
  })
  return (
    <Flex
      gap='10px'
      direction='column'
      width='unset'
      height='1024px'
      justifyContent='flex-start'
      alignItems='flex-start'
      position='relative'
      padding='0px 0px 0px 0px'
      {...getOverrideProps(overrides, "Sidebar")}
      {...rest}>
      <Flex
        gap='10px'
        direction='column'
        width='unset'
        height='unset'
        justifyContent='space-between'
        alignItems='center'
        grow='1'
        shrink='1'
        basis='0'
        position='relative'
        padding='0px 0px 32px 0px'
        backgroundColor='rgba(9,27,42,1)'
        {...getOverrideProps(overrides, "Content39793153")}>
        <Flex
          gap='0'
          direction='column'
          width='unset'
          height='unset'
          justifyContent='flex-start'
          alignItems='flex-start'
          shrink='0'
          position='relative'
          padding='0px 0px 0px 0px'
          {...getOverrideProps(overrides, "Nav39793154")}>
          <Flex
            gap='10px'
            direction='column'
            width='unset'
            height='357px'
            justifyContent='flex-start'
            alignItems='center'
            shrink='0'
            alignSelf='stretch'
            position='relative'
            padding='32px 16px 32px 16px'
            {...getOverrideProps(overrides, "Navigation")}>
            <Button
              width='unset'
              height='unset'
              gap='20px'
              shrink='0'
              alignSelf='stretch'
              backgroundColor='rgba(17,35,49,1)'
              size='large'
              isDisabled={false}
              variation='primary'
              onClick={() => {
                buttonOnClick()
              }}
              {...getOverrideProps(overrides, "Button")}>
              <Icon
                ariaLabel='new note'
                width={"24px"}
                height={"24px"}
                as={BiBookOpen}
              />
              <Text fontSize='1rem'>New Note</Text>
            </Button>
            <Flex
              gap='21px'
              direction='column'
              width='unset'
              height='unset'
              justifyContent='flex-start'
              alignItems='center'
              shrink='0'
              position='relative'
              padding='0px 0px 0px 0px'
              {...getOverrideProps(overrides, "Frame 5601")}>
              <Flex
                gap='8px'
                direction='column'
                width='250px'
                height='unset'
                justifyContent='flex-start'
                alignItems='flex-start'
                overflow='hidden'
                shrink='0'
                position='relative'
                borderRadius='6px'
                padding='4px 8px 4px 8px'
                {...getOverrideProps(overrides, "_Nav item base39793166")}>
                <Flex
                  gap='12px'
                  direction='row'
                  width='unset'
                  height='unset'
                  justifyContent='space-between'
                  alignItems='center'
                  shrink='0'
                  alignSelf='stretch'
                  position='relative'
                  padding='0px 0px 0px 0px'
                  {...getOverrideProps(overrides, "Content39793167")}>
                  <Text
                    fontFamily='Inter'
                    fontSize='16px'
                    fontWeight='500'
                    color='rgba(242,244,247,1)'
                    lineHeight='24px'
                    textAlign='left'
                    display='block'
                    direction='column'
                    justifyContent='unset'
                    width='unset'
                    height='unset'
                    gap='unset'
                    alignItems='unset'
                    shrink='0'
                    position='relative'
                    padding='0px 0px 0px 0px'
                    whiteSpace='pre-wrap'
                    children='Notebooks'
                    {...getOverrideProps(overrides, "Text39793168")}></Text>
                  <Icon viewBox={{ width: 24, height: 24 }} as={BiBookAdd} />
                </Flex>
                <Divider
                  width='unset'
                  height='1px'
                  shrink='0'
                  alignSelf='stretch'
                  size='large'
                  orientation='horizontal'
                  {...getOverrideProps(overrides, "Divider")}></Divider>
              </Flex>
              <View
                width='250px'
                height='132px'
                display='block'
                gap='unset'
                alignItems='unset'
                justifyContent='unset'
                shrink='0'
                position='relative'
                padding='0px 0px 0px 0px'
                {...getOverrideProps(overrides, "Frame 5598")}>
                <Notebookitem
                  display='flex'
                  gap='10px'
                  direction='row'
                  width='unset'
                  height='unset'
                  justifyContent='flex-start'
                  alignItems='flex-start'
                  position='absolute'
                  top='0px'
                  left='1px'
                  padding='0px 0px 0px 0px'
                  isOpen={true}
                  {...getOverrideProps(
                    overrides,
                    "Notebook item40302618",
                  )}></Notebookitem>
                <Notebookitem
                  display='flex'
                  gap='10px'
                  width='unset'
                  height='unset'
                  justifyContent='flex-start'
                  alignItems='flex-start'
                  position='absolute'
                  top='33px'
                  left='0px'
                  padding='0px 0px 0px 0px'
                  isOpen={false}
                  {...getOverrideProps(
                    overrides,
                    "Notebook item40302645",
                  )}></Notebookitem>
                <Notebookitem
                  display='flex'
                  gap='10px'
                  width='unset'
                  height='unset'
                  justifyContent='flex-start'
                  alignItems='flex-start'
                  position='absolute'
                  top='66px'
                  left='0px'
                  padding='0px 0px 0px 0px'
                  isOpen={false}
                  {...getOverrideProps(
                    overrides,
                    "Notebook item40302675",
                  )}></Notebookitem>
                <Notebookitem
                  display='flex'
                  gap='10px'
                  width='unset'
                  height='unset'
                  justifyContent='flex-start'
                  alignItems='flex-start'
                  position='absolute'
                  top='99px'
                  left='1px'
                  padding='0px 0px 0px 0px'
                  isOpen={false}
                  {...getOverrideProps(
                    overrides,
                    "Notebook item40302707",
                  )}></Notebookitem>
              </View>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap='24px'
          direction='column'
          width='unset'
          height='unset'
          justifyContent='flex-start'
          alignItems='center'
          shrink='0'
          alignSelf='stretch'
          position='relative'
          padding='0px 16px 0px 16px'
          {...getOverrideProps(overrides, "footer")}>
          <View
            width='228px'
            height='90px'
            display='block'
            gap='unset'
            alignItems='unset'
            justifyContent='unset'
            shrink='0'
            position='relative'
            padding='0px 0px 0px 0px'
            {...getOverrideProps(overrides, "Nav39793172")}>
            <Flex
              gap='105px'
              direction='row'
              width='228px'
              height='unset'
              justifyContent='flex-start'
              alignItems='center'
              overflow='hidden'
              position='absolute'
              top='0px'
              left='0px'
              borderRadius='6px'
              padding='8px 12px 8px 12px'
              {...getOverrideProps(overrides, "_Nav item base39793173")}>
              <Flex
                gap='12px'
                direction='row'
                width='unset'
                height='unset'
                justifyContent='flex-start'
                alignItems='center'
                shrink='0'
                position='relative'
                padding='0px 0px 0px 0px'
                {...getOverrideProps(overrides, "Content39793174")}>
                <View
                  width='24px'
                  height='24px'
                  {...getOverrideProps(overrides, "message-circle")}></View>
                <Text
                  fontFamily='Inter'
                  fontSize='16px'
                  fontWeight='500'
                  color='rgba(255,255,255,1)'
                  lineHeight='24px'
                  textAlign='left'
                  display='block'
                  direction='column'
                  justifyContent='unset'
                  width='unset'
                  height='unset'
                  gap='unset'
                  alignItems='unset'
                  shrink='0'
                  position='relative'
                  padding='0px 0px 0px 0px'
                  whiteSpace='pre-wrap'
                  children='Support'
                  {...getOverrideProps(overrides, "Text39793176")}></Text>
              </Flex>
            </Flex>
            <Flex
              gap='105px'
              direction='row'
              width='228px'
              height='unset'
              justifyContent='flex-start'
              alignItems='center'
              overflow='hidden'
              position='absolute'
              top='50px'
              left='0px'
              borderRadius='6px'
              padding='8px 12px 8px 12px'
              {...getOverrideProps(overrides, "_Nav item base39793177")}>
              <Flex
                gap='12px'
                direction='row'
                width='unset'
                height='unset'
                justifyContent='flex-start'
                alignItems='center'
                shrink='0'
                position='relative'
                padding='0px 0px 0px 0px'
                {...getOverrideProps(overrides, "Content39793178")}>
                <ReacticonsbiBiChevronLeft
                  width='24px'
                  height='24px'
                  display='block'
                  gap='unset'
                  alignItems='unset'
                  justifyContent='unset'
                  shrink='0'
                  position='relative'
                  padding='0px 0px 0px 0px'
                  {...getOverrideProps(
                    overrides,
                    "react-icons/bi/BiChevronLeft",
                  )}></ReacticonsbiBiChevronLeft>
                <Text
                  fontFamily='Inter'
                  fontSize='16px'
                  fontWeight='500'
                  color='rgba(242,244,247,1)'
                  lineHeight='24px'
                  textAlign='left'
                  display='block'
                  direction='column'
                  justifyContent='unset'
                  width='unset'
                  height='unset'
                  gap='unset'
                  alignItems='unset'
                  shrink='0'
                  position='relative'
                  padding='0px 0px 0px 0px'
                  whiteSpace='pre-wrap'
                  children='Collapse'
                  {...getOverrideProps(overrides, "Text39793180")}></Text>
              </Flex>
            </Flex>
          </View>
          <Flex
            gap='10px'
            direction='column'
            width='unset'
            height='unset'
            justifyContent='flex-start'
            alignItems='center'
            shrink='0'
            position='relative'
            padding='0px 0px 0px 0px'
            {...getOverrideProps(overrides, "Frame 5605")}>
            <Logo3
              width='46px'
              height='32px'
              display='block'
              gap='unset'
              alignItems='unset'
              justifyContent='unset'
              shrink='0'
              position='relative'
              padding='0px 0px 0px 0px'
              breakpoint='small'
              {...getOverrideProps(overrides, "Logo 3")}></Logo3>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
