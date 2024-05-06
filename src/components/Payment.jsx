import React from "react";
import { Image, Stack, Text, VStack } from "@chakra-ui/react";
import Redes from "./Redes";

const Payment = () => {
  return (
    <Stack
      flexDirection="column"
      mb={{ base: 14, md: 14, lg: 16 }}
      alignItems="center"
    >
      <Text fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }} margin="0">
        Métodos de pago
      </Text>
      <Stack
        flexDirection="row"
        gap="20px"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          w={{ base: 32, md: 36, lg: 36 }}
          src="assets/img/mp.webp"
          alt="mercadoPago"
          objectFit="cover"
        />
        <Image
          w={{ base: 20, md: 24, lg: 24 }}
          src="assets/img/visa.png"
          alt="visa"
          objectFit="cover"
        />
        <Image
          w={{ base: 20, md: 24, lg: 24 }}
          src="https://img.icons8.com/color/344/mastercard.png"
          alt="mastercard"
          objectFit="cover"
        />
      </Stack>
    </Stack>
  );
};

export default Payment;
