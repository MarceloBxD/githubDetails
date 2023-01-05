import { Flex, Text, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Card } from "./components/Card";
import { InsertData } from "./components/InsertData";
import { useApp } from "./contexts/contextApi";
import background from "./assets/images/background.jpg";
import { motion } from "framer-motion";
import { InfoModal } from "./components/InfoModal";

function App() {
  const { openModal, setOpenModal }: any = useApp();
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
      {openModal && <InfoModal />}
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
