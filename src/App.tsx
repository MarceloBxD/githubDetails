import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Card } from "./components/Card";
import { InsertData } from "./components/InsertData";

function App() {
  return (
    <Flex
      flexDir="column"
      fontWeight="bold"
      fontSize="20px"
      gap="20px"
      align="center"
      justify="center"
      w="100%"
      h="100vh"
    >
      <Text>Pesquisar usuário - Github</Text>
      <InsertData />
    </Flex>
  );
}

export default App;
