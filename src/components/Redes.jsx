import React from "react";
import { Stack } from "@chakra-ui/react";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";

const Redes = () => {
  return (
    <>
      <Stack
        flexDirection="row"
        gap="20px"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        fontSize={{ base: "30px", md: "45px", lg: "35px" }}
      >
        <a href="https://www.facebook.com/JuanaSoteloMP" target="_blank">
          <FaFacebookF color="#bda764" />
        </a>
        <a href="https://www.instagram.com/juanasotelomp/" target="_blank">
          <FaInstagram color="#bda764" />
        </a>
        <a href="https://www.tiktok.com/@academiajuanasotelo" target="_blank">
          <FaTiktok color="#bda764" />
        </a>
      </Stack>
    </>
  );
};

export default Redes;
