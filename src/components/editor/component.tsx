import React from "react"
import { Color } from "@tiptap/extension-color"
import ListItem from "@tiptap/extension-list-item"
import TextStyle from "@tiptap/extension-text-style"
import Highlight from "@tiptap/extension-highlight"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Button, Flex, View } from "@aws-amplify/ui-react"
import MenuBar from "./components/menubox"
import { CreateNotesInput } from "@/API"

const EditorBox = ({
  formData,
  createNote,
}: {
  formData: CreateNotesInput
  createNote: (note: string) => Promise<void>
}) => {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({}),
      Highlight.configure({ multicolor: true }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: true,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: true,
        },
      }),
    ],
    content: "<p>Hello World! 🌎️</p>",
  })

  return (
    <View>
      <MenuBar editor={editor} />

      {editor && <EditorContent editor={editor} />}
    </View>
  )
}

export default EditorBox
