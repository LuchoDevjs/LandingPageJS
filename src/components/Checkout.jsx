import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./styles/formik.css";
import {
  Button,
  Input,
  Box,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { BsFillPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import emailjs from "emailjs-com";
import { validateFields } from "./validate";

const initialValues = {
  nombre: "",
  apellido: "",
  email: "",
  localidad: "",
  telefono: "",
};

const Checkout = () => {
  const [formSent, setFormSent] = useState(false);
  const form = useRef();

  return (
    <Formik
      initialValues={initialValues}
      validate={validateFields}
      onSubmit={(values, actions) => {
        const { resetForm } = actions;
        emailjs
          .sendForm(
            "service_08bnlvu",
            "landingID",
            form.current,
            "gpp9ITl4oZUatSCc7"
          )
          .then(() => {
            resetForm();
          })
          .catch(() => {
            (error) => {
              console.log(error.text);
            };
          });
        setFormSent(true);
        setTimeout(() => setFormSent(false), 5000);
      }}
    >
      {({ errors }) => (
        <Form className="containerForm" position="relative" ref={form}>
          <Box>
            <Text fontSize="sm" mb={1}>
              Nombre
            </Text>
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                children={<BsFillPersonFill />}
              />
              <Field
                as={Input}
                type="text"
                id="nombre"
                name="nombre"
                required
                variant="flushed"
                focusBorderColor="none"
              />
            </InputGroup>
            <ErrorMessage
              name="nombre"
              component={() => (
                <Box color="red.500" mt={1}>
                  {errors.nombre}
                </Box>
              )}
            />
          </Box>
          <Box marginTop={5}>
            <Text fontSize="sm" mb={1}>
              Apellido
            </Text>
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                children={<BsFillPersonFill color="gray.300" />}
              />
              <Field
                as={Input}
                type="text"
                id="apellido"
                name="apellido"
                required
                variant="flushed"
                focusBorderColor="none"
              />
            </InputGroup>
            <ErrorMessage
              name="apellido"
              component={() => (
                <Box color="red.500" mt={1}>
                  {errors.apellido}
                </Box>
              )}
            />
          </Box>
          <Box marginTop={5}>
            <Text fontSize="sm" mb={1}>
              Correo Electrónico
            </Text>
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                children={<EmailIcon />}
              />
              <Field
                as={Input}
                type="email"
                id="email"
                name="email"
                required
                variant="flushed"
                focusBorderColor="none"
              />
            </InputGroup>
            <ErrorMessage
              name="email"
              component={() => (
                <Box color="red.500" mt={1}>
                  {errors.email}
                </Box>
              )}
            />
          </Box>
          <Box marginTop={5}>
            <Text fontSize="sm">Localidad</Text>
          </Box>
          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              fontSize="xl"
              children={<MdLocationOn />}
            />
            <Field
              as={Input}
              type="text"
              id="localidad"
              name="localidad"
              variant="flushed"
              focusBorderColor="none"
              required
            />
          </InputGroup>
          <ErrorMessage
            name="localidad"
            component={() => (
              <Box color="red.500" mt={1}>
                {errors.localidad}
              </Box>
            )}
          />
          <Box marginTop={5}>
            <Text fontSize="sm" mb={1}>
              Telefono
            </Text>
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                children={<PhoneIcon />}
              />
              <Field
                as={Input}
                type="text"
                id="telefono"
                name="telefono"
                variant="flushed"
                focusBorderColor="none"
                required
              />
            </InputGroup>
            <ErrorMessage
              name="telefono"
              component={() => (
                <Box color="red.500" mt={1}>
                  {errors.telefono}
                </Box>
              )}
            />
          </Box>
          <Button mt={5} mb={3} bg="grey" p={4} type="submit" w="100%">
            Enviar
          </Button>
          {formSent && (
            <Text textAlign="center" color="green.500" mt={1} mb={2}>
              Formulario enviado con exito!
            </Text>
          )}
          <Text fontSize="sm" mb={1} textAlign="center">
            Su información será enviada al organizador del evento, quien puede
            comunicarse con usted acerca de este evento o sus servicios
          </Text>
        </Form>
      )}
    </Formik>
  );
};

export default Checkout;
