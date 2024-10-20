import { Box } from "@chakra-ui/react";
import React, { Children, ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const GamecardContainer = ({ children }: Props) => {
  return (
    <Box width="100%" borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GamecardContainer;
