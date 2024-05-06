import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  // fonts: {
  //   body: `'Comfortaa', cursive`
  // },
  styles: {
    global: {
      body: {
        color: "white",
        bg: "black",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 9999,
      },
      variants: {
        solid: {
          fontWeight: "300",
          bgColor: "#1e1e1e",
          _hover: {
            backgroundColor: "#252525",
          },
        },
      },
    },
  },
});
