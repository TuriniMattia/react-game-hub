import {
  Button,
  HStack,
  Icon,
  IconButton,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label=""
      icon={<Icon as={colorMode === "dark" ? FaMoon : FaSun} />}
    ></IconButton>
  );
};

export default ColorModeSwitch;
