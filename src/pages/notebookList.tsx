import React from "react"
import { View } from "@aws-amplify/ui-react"
import { NotebookCollection } from "../../ui-components"
import Layout from "../components/Layout"

export default function NoteBookList() {
  return (
    <Layout
      handleClick={() => {}}
      authText='Sign out'
      userName={"christian@hotmail.com".split("@")[0]}>
      <View>
        <NotebookCollection />
      </View>
    </Layout>
  )
}
