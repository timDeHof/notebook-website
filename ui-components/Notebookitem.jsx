/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react"
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal"
import { Button, Flex, Icon } from "@aws-amplify/ui-react"
import { BiBookOpen, BiSolidBook } from "react-icons/bi"
export default function Notebookitem(props) {
  const { overrides: overridesProp, ...rest } = props
  const variants = [
    {
      variantValues: { isOpen: "true" },
      overrides: { Button: {}, Notebookitem: {} },
    },
    {
      variantValues: { isOpen: "false" },
      overrides: {
        Button: { justifyContent: "flex-start" },
        Notebookitem: { direction: "column" },
      },
    },
  ]
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {},
  )
  return (
    <Flex
      gap='10px'
      direction='row'
      width='unset'
      height='unset'
      justifyContent='flex-start'
      alignItems='flex-start'
      position='relative'
      padding='0px 0px 0px 0px'
      display='flex'
      {...getOverrideProps(overrides, "Notebookitem")}
      {...rest}>
      <Button
        width='unset'
        height='unset'
        padding='0px 16px 0px 16px'
        shrink='0'
        backgroundColor='rgba(241,178,142,1)'
        size='large'
        isDisabled={true}
        variation='link'></Button>
    </Flex>
  )
}
