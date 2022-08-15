import React from "react";
import { Image, Stack, Text } from "@chakra-ui/react";

const sedesImg = [
  {
    sedes: "Lanús, Buenos Aires",
    imgSedes: "assets/img/sedeLanus.png",
  },
  {
    sedes: "Cipolletti, Río Negro",
    imgSedes: "assets/img/sedeCipo.png",
  },
  {
    sedes: "Puerto Madryn, Chubut",
    imgSedes: "assets/img/sedeChubut2.png",
  },
];

const Sedes = () => {
  return (
    <>
      <Text textAlign="center" mb={7} fontSize={{ base: '2xl', md: '3xl' , lg: '4xl' }} mt={4}>
        Podrás realizar tus prácticas presenciales en:
      </Text>
      <Stack
        mb={6}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        alignItems="center"
      >
        {sedesImg.map(({ sedes, imgSedes }) => (
          <Stack alignItems="center" mt={2} key={sedes}>
            <Text
              textAlign="center"
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            >
              {sedes}
            </Text>
            <Image
              src={imgSedes}
              objectFit="cover"
              borderRadius="15px"
              width={{ base: "90%", md: "75%", lg: "90%" }}
              key={imgSedes}
              alt={imgSedes}
            />
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default Sedes;
