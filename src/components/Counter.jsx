import React, { useEffect, useRef, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Checkout from "./Checkout";
import Redes from "./Redes";

const Counter = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  let currentDistance;
  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("July 10, 2023 23:59:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      currentDistance = distance;

      if (currentDistance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  //   component did mount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <>
      {currentDistance == 1 ? (
        <Text>Lo siento se ha acabado el tiempo de incrispción</Text>
      ) : (
        <Flex
          position="fixed"
          zIndex={2}
          bottom="0"
          w="100%"
          flexDirection="column"
          alignItems="center"
          bg={useColorModeValue("rgba(255,0,0,0.6)", "whiteAlpha.100")}
          css={{ backdropFilter: "blur(12px)" }}
          color="white"
        >
          <HStack
            spacing={{ base: 2, md: 2, lg: 7 }}
            alignItems="center"
            mb={2}
            mt={{ base: 2, md: 1, lg: 3 }}
            flexDirection={{ base: "column", md: "column", lg: "row" }}
          >
            <Box
              mr={{ base: 0, md: 0, lg: 10 }}
              mb={{ base: 3, md: 3, lg: 0 }}
              alignItems="center"
              display="flex"
              flexDirection="column"
              fontSize="sm"
            >
              <Text textAlign="center" mb={2}>
                <Badge colorScheme="red"> IMPORTANTE: </Badge> Tenes tiempo de
                ingresar hasta el Lunes 10 de Julio 2023.
              </Text>
              <Text>Reserva tu lugar ahora!</Text>
            </Box>
            <HStack>
              <Box>
                <Text align="center">{timerDays}</Text>
                <Text fontSize="xs">Dias</Text>
              </Box>
              <Text>:</Text>{" "}
              <Box>
                <Text align="center">{timerHours}</Text>
                <Text fontSize="xs">Horas</Text>
              </Box>
              <Text>:</Text>{" "}
              <Box>
                <Text align="center">{timerMinutes}</Text>
                <Text fontSize="xs">Minutos</Text>
              </Box>
              <Text>:</Text>{" "}
              <Box mr={32}>
                <Text align="center">{timerSeconds}</Text>
                <Text fontSize="xs">Segundos</Text>
              </Box>
            </HStack>
            <Box>
              <Button
                mt={{ base: 3, md: 3, lg: 0 }}
                onClick={onOpen}
                fontSize="sm"
              >
                Regístrese aquí
              </Button>
            </Box>
            <Modal
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
              scrollBehavior={scrollBehavior}
              isCentered
            >
              <ModalOverlay />
              <ModalContent
                bg="black"
                borderRadius={11}
                width={{ base: "90%", md: "100%", lg: "100%" }}
              >
                <ModalHeader bg="whiteAlpha.900" borderTopRadius={11}>
                  <Stack alignItems="center" top="-4.5rem">
                    <Box
                      position="relative"
                      borderRadius="full"
                      w="7rem"
                      h="7rem"
                      boxShadow="  0 0 4px 4px rgb(0 0 0 / 15%)"
                      overflow="hidden"
                    >
                      <Image
                        src="assets/img/juanaSotelo.png"
                        alt="juanaSotelo"
                        bg="white"
                        objectFit="cover"
                      />
                    </Box>
                    <Text color="black" fontSize="2xl" fontWeight="400">
                      Juana sotelo
                    </Text>
                  </Stack>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Heading
                    fontSize="2xl"
                    textAlign="center"
                    mb={7}
                    mt={4}
                    fontWeight="300"
                  >
                    Complete el formulario
                  </Heading>
                  <Checkout />
                </ModalBody>
              </ModalContent>
            </Modal>
          </HStack>
        </Flex>
      )}
    </>
  );
};

export default Counter;
