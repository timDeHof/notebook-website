import React from "react"
import { View } from "@aws-amplify/ui-react"
import { Nav } from "../../ui-components"
interface LayoutProps {
  children: React.ReactNode
  authText: string
  handleClick: () => void
  username: String
}
export default function Layout({
  children,
  authText,
  handleClick,
  username,
}: LayoutProps) {
  return (
    <View width='80vw' marginLeft='auto' marginRight='auto'>
      <Nav
        width='100%'
        marginTop={"20px"}
        handleAuth={handleClick}
        authText={authText}
        username={username}
        avatar={username?.split("")[0].toUpperCase() || ""}
      />
      {children}
    </View>
  )
}
