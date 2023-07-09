import React from "react"
import { View } from "@aws-amplify/ui-react"
import { Nav } from "../../ui-components"
interface LayoutProps {
  children: React.ReactNode
  authText: string
  handleClick: () => void
  userName: string
}
export default function Layout({
  children,
  authText,
  handleClick,
  userName,
}: LayoutProps) {
  return (
    <View width='60vw' marginLeft='auto' marginRight='auto'>
      <Nav
        marginTop={"20px"}
        handleAuth={handleClick}
        authText={authText}
        username={userName}
        avatar={userName.split("")[0].toUpperCase()}
      />
      {children}
    </View>
  )
}
