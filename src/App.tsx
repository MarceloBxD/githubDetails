import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Card } from "./components/Card";
import { InsertData } from "./components/InsertData";
import { githubApi } from "./Api/index";
import { useApp } from "./contexts/contextApi";

function App() {
  const { user }: any = useApp();

  useEffect(() => {
    githubApi(user);
  }, []);

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
