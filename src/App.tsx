import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Card } from "./components/Card";
import { InsertData } from "./components/InsertData";
import { useApp } from "./contexts/contextApi";
import background from "./assets/images/background.jpg";
import { motion } from "framer-motion";

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
      <motion.div
        animate={{
          scale: [1, 1.5, 2, 1.5, 1],
          rotate: [0, 180, 360, 270, 0],
        }}
        transition={{
          duration: 2,
        }}
      >
        <motion.p whileHover={{ scale: 1.2 }} style={{ color: "#fff" }}>
          Search User - Github Account
        </motion.p>
      </motion.div>
      <InsertData />
    </Flex>
  );
}

export default App;
