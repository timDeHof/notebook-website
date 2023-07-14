import React from "react"
import { Flex } from "@aws-amplify/ui-react"
import { NotebookCollection, Sidebar } from "../../ui-components"
import Layout from "../components/Layout"
import { Amplify } from "aws-amplify"
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react"
import { Authenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import { useRouter } from "next/router"

import awsconfig from "../../aws-exports"
import Editor from "@/components/editor/component"
Amplify.configure(awsconfig)

export default function Dashboard() {
  const router = useRouter()
  return (
    <Authenticator>
      {({ signOut, user }: WithAuthenticatorProps) => (
        <Layout
          handleClick={() => {
            signOut
            router.push("/")
          }}
          authText='Sign out'
          username={user?.attributes?.email.split("@")[0] || ""}>
          <Flex direction={"row"} width={"auto"} height={"100%"}>
            <Sidebar />
            {/* <NotebookCollection /> */}
            <Editor />
          </Flex>
        </Layout>
      )}
    </Authenticator>
  )
}
