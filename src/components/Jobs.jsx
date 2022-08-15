import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const jobsImages = [
  {
    title: "Cejas",
    img: "../../assets/img/cejas.png",
  },
  {
    title: "Párpados",
    img: "../../assets/img/parpados.png",
  },
  {
    title: "Labios",
    img: "../../assets/img/labios.jpg",
  },
];

const Jobs = () => {
  return (
    <>
    <Text textAlign='center' mb={7} fontSize={{ base: '2xl', md: '3xl' , lg: '4xl' }} mt={4}>Aprende a realizar paso a paso:</Text>
    <Stack
      mb={16}
      flexDirection={{ base: "column", md: "column", lg: "row" }}
      alignItems="center"
    >
      {jobsImages.map(({ title, img }) => (
        <Stack alignItems="center" mt={2} key={title}>
          <Text
            textAlign="center"
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          >
            {title}
          </Text>
          <Image
            src={img}
            objectFit="cover"
            borderRadius="15px"
            width={{ base: "90%", md: "75%", lg: "90%" }}
            key={img}
          />
        </Stack>
      ))}
    </Stack>
    </>
  );
};

export default Jobs;
