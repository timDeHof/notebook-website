import { Button, Flex } from "@aws-amplify/ui-react"
import {
  BiBold,
  BiItalic,
  BiStrikethrough,
  BiCodeAlt,
  BiParagraph,
  BiListUl,
  BiListOl,
  BiUndo,
  BiRedo,
} from "react-icons/bi"
import { RiFormatClear } from "react-icons/ri"
import { VscClearAll } from "react-icons/vsc"
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHeading4,
  LuHeading5,
  LuHeading6,
} from "react-icons/lu"
import { BsBlockquoteLeft } from "react-icons/bs"
import { PiCodeBlock } from "react-icons/pi"
import { GoHorizontalRule } from "react-icons/go"
import { ImPageBreak } from "react-icons/im"
import { Editor, BubbleMenu, FloatingMenu } from "@tiptap/react"
interface MenuBarProps {
  editor: Editor | null
}

const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) {
    return null
  }
  return (
    <>
      {editor && (
        <BubbleMenu
          className='bubble-menu'
          tippyOptions={{ duration: 100 }}
          editor={editor}>
          <Button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}>
            <BiBold />
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}>
            <BiItalic />
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}>
            <BiStrikethrough />
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            className={editor.isActive("code") ? "is-active" : ""}>
            <BiCodeAlt />
          </Button>
          <Button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
            <RiFormatClear />
          </Button>
          <Button onClick={() => editor.chain().focus().clearNodes().run()}>
            <VscClearAll />
          </Button>
          <Button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive("paragraph") ? "is-active" : ""}>
            <BiParagraph />
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }>
            <LuHeading1 />
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }>
            <LuHeading2 />
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive("heading", { level: 3 }) ? "is-active" : ""
            }>
            <LuHeading3 />
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className={
              editor.isActive("heading", { level: 4 }) ? "is-active" : ""
            }>
            <LuHeading4 />
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className={
              editor.isActive("heading", { level: 5 }) ? "is-active" : ""
            }>
            <LuHeading5 />
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className={
              editor.isActive("heading", { level: 6 }) ? "is-active" : ""
            }>
            <LuHeading6 />
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}>
            <BiListUl />
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}>
            <BiListOl />
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive("codeBlock") ? "is-active" : ""}>
            <PiCodeBlock />
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}>
            <BsBlockquoteLeft />
          </Button>
          <Button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}>
            <GoHorizontalRule />
          </Button>
          <Button onClick={() => editor.chain().focus().setHardBreak().run()}>
            <ImPageBreak />
          </Button>
          <Button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}>
            <BiUndo />
          </Button>
          <Button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}>
            <BiRedo />
          </Button>
          <Button
            onClick={() => editor.chain().focus().setColor("#958DF1").run()}
            className={
              editor.isActive("textStyle", { color: "#958DF1" })
                ? "is-active"
                : ""
            }>
            purple
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().toggleHighlight({ color: "#ffc078" }).run()
            }
            className={
              editor.isActive("highlight", { color: "#ffc078" })
                ? "is-active"
                : ""
            }>
            orange
          </Button>
        </BubbleMenu>
      )}
      {editor && (
        <FloatingMenu
          className='floating-menu'
          tippyOptions={{ duration: 100 }}
          editor={editor}>
          <Button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}>
            <BiBold />
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}>
            <BiItalic />
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}>
            <BiStrikethrough />
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            className={editor.isActive("code") ? "is-active" : ""}>
            <BiCodeAlt />
          </Button>
          <Button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
            <RiFormatClear />
          </Button>
          <Button onClick={() => editor.chain().focus().clearNodes().run()}>
            <VscClearAll />
          </Button>
          <Button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive("paragraph") ? "is-active" : ""}>
            <BiParagraph />
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }>
            <LuHeading1 />
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }>
            <LuHeading2 />
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive("heading", { level: 3 }) ? "is-active" : ""
            }>
            <LuHeading3 />
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className={
              editor.isActive("heading", { level: 4 }) ? "is-active" : ""
            }>
            <LuHeading4 />
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className={
              editor.isActive("heading", { level: 5 }) ? "is-active" : ""
            }>
            <LuHeading5 />
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className={
              editor.isActive("heading", { level: 6 }) ? "is-active" : ""
            }>
            <LuHeading6 />
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}>
            <BiListUl />
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}>
            <BiListOl />
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive("codeBlock") ? "is-active" : ""}>
            <PiCodeBlock />
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}>
            <BsBlockquoteLeft />
          </Button>
          <Button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}>
            <GoHorizontalRule />
          </Button>
          <Button onClick={() => editor.chain().focus().setHardBreak().run()}>
            <ImPageBreak />
          </Button>
          <Button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}>
            <BiUndo />
          </Button>
          <Button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}>
            <BiRedo />
          </Button>
          <Button
            onClick={() => editor.chain().focus().setColor("#958DF1").run()}
            className={
              editor.isActive("textStyle", { color: "#958DF1" })
                ? "is-active"
                : ""
            }>
            purple
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().toggleHighlight({ color: "#ffc078" }).run()
            }
            className={
              editor.isActive("highlight", { color: "#ffc078" })
                ? "is-active"
                : ""
            }>
            orange
          </Button>
        </FloatingMenu>
      )}
    </>
  )
}
export default MenuBar
