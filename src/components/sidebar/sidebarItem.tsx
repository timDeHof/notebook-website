import React, { useState } from "react"
import { Button, Flex, Icon } from "@aws-amplify/ui-react"
import { BiBookOpen, BiSolidBook, BiTrash } from "react-icons/bi"

export interface SidebarItemProps {
  title: string
  overrides?: any
  [key: string]: unknown
  deleteNote: (id: string) => Promise<void>
}

export default function SideBarItem({
  id,
  title,
  deleteNote,
}: SidebarItemProps) {
  const ToggleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  const [isOpen, setIsOpen] = useState(false)

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
      display='flex'>
      <Button
        width='unset'
        height='unset'
        padding='0px 16px 0px 16px'
        shrink='0'
        size='large'
        isDisabled={false}
        onClick={() => ToggleIsOpen()}
        variation='link'>
        {isOpen ? <Icon as={BiBookOpen} /> : <Icon as={BiSolidBook} />}
        {title}
      </Button>
      <Button
        onClick={() => {
          console.log("item's id deleted: ", id)
          deleteNote(id as string)
        }}>
        <Icon as={BiTrash} />
      </Button>
    </Flex>
  )
}
