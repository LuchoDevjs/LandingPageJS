import React from "react";
import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import Redes from "./Redes";

const logos = [
  "../../assets/img/logoMeicha.png",
  "../../assets/img/logoJuanaSotelo.png",
];

const Footer = () => {
  return (
    <VStack mb="50px">
      <Text
        fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
        textAlign="center"
        letterSpacing={2}
      >
        NO NECESITAS EXPERIENCIA PREVIA
      </Text>
      <HStack
        spacing={22}
        fontSize="6xl"
        justifyContent="center"
        height="130px"
      >
        {logos.map((logo) => (
          <Image
            src={logo}
            objectFit="cover"
            w={{ base: "40%", md: "35%", lg: "20%" }}
            key={logo}
            alt={logo}
          />
        ))}
      </HStack>
      <Redes />
    </VStack>
  );
};

export default Footer;
