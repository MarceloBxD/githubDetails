import { Flex, Text, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Card } from "./components/Card";
import { InsertData } from "./components/InsertData";
import { useApp } from "./contexts/contextApi";
import background from "./assets/images/background.jpg";
import { motion } from "framer-motion";

function App() {
  const [openModal, setOpenModal] = React.useState(false);

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
      <motion.div
        animate={{
          scale: [1, 1.5, 1.5, 1],
          rotate: [0, 180, 360, 0],
        }}
        transition={{
          duration: 2,
        }}
      >
        <motion.p
          whileHover={{ scale: 1.2 }}
          style={{ color: "#fff", padding: "10px" }}
        >
          Search User - Github Account
        </motion.p>
      </motion.div>
      <InsertData />
      {openModal && (
        <Flex
          flexDir="column"
          position="absolute"
          left="0"
          marginLeft="20px"
          zIndex="999"
          w="400px"
          h="600px"
          bgColor="rgba(0,0,0,0.7)"
          color="#fff"
          borderRadius="20px"
        >
          <Flex px="10px" m="10px" justify="space-between" align="flex-start">
            <Text textDecor="underline" color="#fff">
              Informations
            </Text>
            <Button
              _hover={{ backgroundColor: "#fff", color: "#000" }}
              variant="unstyled"
            >
              X
            </Button>
          </Flex>
          <Text p="20px" fontSize="16px">
            Aplicativo criado para consultar algumas informações do perfil de
            qualquer usuário que tenha uma conta criada no Github! Haverá formas
            de melhorar o aplicativo, como por exemplo, adicionar mais
            informações, como por exemplo, as informações de repositórios do
            usuário, e também, adicionar uma página de detalhes do usuário, ou
            até mesmo, uma página de detalhes do repositório. Poderá ser feito
            também um rating do usuário, com algumas observações dadas por quem
            está a visitar o perfil do usuário.
          </Text>
        </Flex>
      )}
      <Flex
        w="20px"
        justify="center"
        borderRadius="20px"
        align="center"
        h="20px"
        m="20px"
        cursor="pointer"
        p="20px"
        position="fixed"
        bottom="0"
        right="0"
      >
        <motion.div
          onClick={() => setOpenModal(!openModal)}
          style={{
            display: "flex",
            backgroundColor: "#fff",
            borderRadius: "20px",
            padding: "20px",
            width: "20px",
            height: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fa-solid fa-info"></i>
        </motion.div>
      </Flex>
    </Flex>
  );
}

export default App;
