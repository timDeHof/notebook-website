import React from "react"
import SideBarItem from "./sidebarItem"
import { Notes } from "../../../models"
import { BiBookAdd } from "react-icons/bi"
import { Button, Divider, Flex, Text, View, Icon } from "@aws-amplify/ui-react"
interface SidebarProps {
  items: Notes[]
  createNote: () => Promise<void>
  deleteNote: (id: string) => Promise<void>
}

export default function Sidebar({
  items,
  createNote,
  deleteNote,
}: SidebarProps) {
  return (
    <Flex
      gap='10px'
      direction='column'
      width='unset'
      height='1024px'
      justifyContent='flex-start'
      alignItems='flex-start'
      position='relative'
      padding='0px 0px 0px 0px'>
      <Button
        width='unset'
        height='unset'
        gap='20px'
        shrink='0'
        alignSelf='stretch'
        backgroundColor='rgba(17,35,49,1)'
        size='large'
        isDisabled={false}
        variation='primary'
        onClick={() => createNote}>
        <Icon
          ariaLabel='new note'
          width={"24px"}
          height={"24px"}
          as={BiBookAdd}
        />
        <Text fontSize='1rem'>New Note</Text>{" "}
      </Button>
      <View
        width='250px'
        height='132px'
        display='block'
        gap='unset'
        alignItems='unset'
        justifyContent='unset'
        shrink='0'
        position='relative'
        padding='0px 0px 0px 0px'>
        <View
          display='flex'
          direction='column'
          justifyContent='space-between'
          alignItems='space-between'>
          <Text>Notes</Text>
          <Divider />
        </View>
        <Flex direction='column'>
          {items.map((item) => (
            <SideBarItem
              key={`item-${item.id}`}
              id={item.id}
              title={item.title}
              content={item.content}
              deleteNote={() => deleteNote(item.id)}
            />
          ))}
        </Flex>
      </View>
    </Flex>
  )
}
