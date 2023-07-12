import React from "react"
import { Flex, Heading } from "@aws-amplify/ui-react"
import { PlanCardCollection } from "../../ui-components"
const MarketPricing = () => {
  return (
    <Flex
      margin={"0rem"}
      direction='column'
      alignItems={"center"}
      justifyContent='center'>
      <Flex
        margin={"0rem"}
        direction='column'
        alignItems={"center"}
        justifyContent='center'>
        <Heading
          level={5}
          color={"brand.primary.80"}
          fontWeight={"fontWeights.semibold"}>
          Pricing
        </Heading>
        <Heading
          level={1}
          color={"font.primary"}
          fontWeight={"fontWeights.semibold"}>
          Choose your plan
        </Heading>
        <Heading
          level={6}
          color={"font.tertiary"}
          fontWeight={"fontWeights.regular"}>
          14 day free trial for any plan, no credit card needed
        </Heading>
      </Flex>
      <PlanCardCollection />
    </Flex>
  )
}

export default MarketPricing
