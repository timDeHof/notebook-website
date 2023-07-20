import React, { useEffect, useState } from "react"
import { Flex, View } from "@aws-amplify/ui-react"
import Sidebar from "../components/sidebar/sidebar"
import Layout from "../components/Layout"
import { Amplify, API, graphqlOperation } from "aws-amplify"
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react"
import { Authenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import { useRouter } from "next/router"

import awsconfig from "../../aws-exports"
import { listNotes } from "../graphql/queries"
import {
  createNotes as createNoteMutation,
  deleteNotes as deleteNoteMutation,
} from "../graphql/mutations"

import Editor from "@components/editor/component"
import { CreateNotesMutation, Notes, CreateNotesInput } from "@/API"
import { NotesCreateForm } from "../../ui-components"
Amplify.configure(awsconfig)

const initialFormState: CreateNotesInput = {
  id: "",
  title: "",
  content: "",
  isPinned: false,
  isPublished: false,
  isTrashed: false,
  _version: 0,
}

export default function Dashboard() {
  const [notes, setNotes] = useState<Notes[]>([])
  const [formData, setFormData] = useState<CreateNotesInput>(initialFormState)
  const router = useRouter()
  useEffect(() => {
    fetchNotes()
  }, [])

  async function fetchNotes() {
    const apiData = await API.graphql(graphqlOperation(listNotes))
    if ("data" in apiData) {
      console.log("Notes: ", apiData)
      setNotes(apiData.data.listNotes.items)
    }
  }

  async function createNote(formData: { title: string; content: string }) {
    if (!formData.title || !formData.content) return
    const result = (await API.graphql<CreateNotesMutation>(
      graphqlOperation(createNoteMutation, { input: formData }),
    )) as { data: { createNotes: Notes } }
    setNotes([...notes, result.data?.createNotes])
    setFormData(initialFormState)
  }

  async function deleteNote(id: string) {
    const newNotesArray = notes.filter(({ id: noteId }) => noteId !== id)
    setNotes(newNotesArray)
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    })
  }
  return (
    <Authenticator>
      {({ signOut, user }: WithAuthenticatorProps) => (
        <Layout
          handleClick={() => {
            if (signOut) {
              signOut()
              router.push("/")
            }
          }}
          authText='Sign out'
          username={user?.attributes?.email.split("@")[0] || ""}>
          <Flex direction={"row"} width={"auto"} height={"100%"}>
            <View>
              <Sidebar items={notes} deleteNote={deleteNote} />
            </View>
            <View Width={"100%"}>
              <NotesCreateForm />
            </View>
          </Flex>
        </Layout>
      )}
    </Authenticator>
  )
}
