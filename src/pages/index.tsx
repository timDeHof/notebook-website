import React from "react"
import { Flex, View, Image } from "@aws-amplify/ui-react"
import {
  Features2X2,
  MarketingPricing,
  Footer,
  Hero,
  Persuade,
} from "../../ui-components"
import Layout from "../components/Layout"
import { useRouter } from "next/router"

export default function Index() {
  const router = useRouter()
  return (
    <Layout
      handleClick={() => {
        router.push("/dashboard")
      }}
      authText='Open Dashboard'
      username='none'>
      <Flex
        direction='row'
        justifyContent='center'
        alignItems='space-between'
        alignContent='flex-start'
        wrap='nowrap'
        gap='1rem'>
        <Hero handleClick={() => {}} />
        <Image
          src='/HeroIllustration.svg'
          alt={"hero Illustration"}
          objectFit='contain'
          objectPosition='50% 50%'
          backgroundColor='initial'
          height='25%'
          width='25%'
          opacity='100%'
        />
      </Flex>
      <Flex
        margin={"0rem"}
        direction='column'
        alignItems={"center"}
        justifyContent='center'>
        <MarketingPricing />
      </Flex>
      <Flex
        margin={"0rem"}
        direction='column'
        alignItems={"center"}
        justifyContent='center'>
        <Features2X2 />
      </Flex>
      <Flex justifyContent={"center"}>
        <Persuade banner='https://i.imgur.com/Wt1MyRp.png' />
      </Flex>
      <View marginTop='50px'>
        <Footer width='100%' />
      </View>
    </Layout>
  )
}
