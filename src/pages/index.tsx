import React from "react"
import { Flex, View, Heading } from "@aws-amplify/ui-react"
import {
  Footer,
  Hero,
  Persuade,
  TestimonyCollection,
} from "../../ui-components"
import Layout from "../components/Layout"
import { useRouter } from "next/router"
import Image from "next/image"
import HeroSVG from "../../public/HeroIllustration.svg"
export default function index() {
  const router = useRouter()
  return (
    <Layout
      handleClick={() => {
        router.push("/notebookList")
      }}
      authText='Sign Up'
      userName='none'>
      <Flex
        direction='row'
        justifyContent='flex-start'
        alignItems='stretch'
        alignContent='flex-start'
        wrap='nowrap'
        gap='1rem'>
        <Hero handleClick={() => {}} />
        <Image
          src={HeroSVG}
          alt={"hero Illustration"}
          width={633}
          height={554}
        />
      </Flex>
      <Flex
        margin={"0rem"}
        direction='column'
        alignItems={"center"}
        justifyContent='center'
        gap={"1rem"}>
        <Heading level={3} marginBottom={"3rem"}>
          Don’t take our word for it. Read what people are saying
        </Heading>
        <TestimonyCollection />
      </Flex>
      <Flex justifyContent={"center"}>
        <Persuade banner='https://i.imgur.com/MxbD3N4.png' />
      </Flex>
      <View marginTop='50px'>
        <Footer />
      </View>
    </Layout>
  )
}
