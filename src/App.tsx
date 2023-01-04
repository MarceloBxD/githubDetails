import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Card } from "./components/Card";
import { InsertData } from "./components/InsertData";
import { useApp } from "./contexts/contextApi";
import background from "./assets/images/background.jpg";

function App() {
  return (
    <Flex
      style={{
        backgroundImage: `url(${background})`,
        objectFit: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      flexDir="column"
      fontWeight="bold"
      fontSize="20px"
      gap="20px"
      align="center"
      justify="center"
      w="100%"
      h="100vh"
    >
      <Text color="#fff">Search User - Github Account</Text>
      <InsertData />
    </Flex>
  );
}

export default App;
