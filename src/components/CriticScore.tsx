import { Badge } from "@chakra-ui/react";
import React from "react";
interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} borderRadius="5px" paddingX={2} fontSize="15">
      {score}
    </Badge>
  );
};

export default CriticScore;
