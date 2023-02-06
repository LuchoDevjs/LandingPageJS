import React from "react";
import {
  Image,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const Payment = () => {
  return (
    <VStack mb={{ base: 14, md: 14, lg: 16 }} flexDirection="column">
      <Text fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }} mb={6}>
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
          w={{ base: 16, md: 20, lg: 20 }}
          src="https://iconape.com/wp-content/png_logo_vector/pago-facil-2019-logo.png"
          alt="pagoFacil"
          objectFit="cover"
        />
        <Image
          w={{ base: 28, md: 32, lg: 32 }}
          src="https://iconape.com/wp-content/png_logo_vector/rapipago-logo.png"
          alt="rapiPago"
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
    </VStack>
  );
};

export default Payment;
