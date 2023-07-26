"use client";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import "@fontsource/montserrat";
import "@fontsource/inter";
import theme from "./theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <Flex flexDirection="column">{children}</Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
