import { Amplify } from "aws-amplify"
import { studioTheme } from "../../ui-components"
import { AmplifyProvider } from "@aws-amplify/ui-react"
import type { AppProps } from "next/app"
import "@aws-amplify/ui-react/styles.css"
import "@fontsource/inter"
import "@/styles/reset.css"
import "@/styles/globals.css"

import awsconfig from "../../aws-exports"
Amplify.configure(awsconfig)

function App({ Component, pageProps }: AppProps) {
  return (
    <AmplifyProvider theme={studioTheme}>
      <Component {...pageProps} />
    </AmplifyProvider>
  )
}

export default App
