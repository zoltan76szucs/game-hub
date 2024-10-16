import { Heading } from "@chakra-ui/react";

import { GameQuery } from "../App";

interface Props {
  gameQurey: GameQuery;
}

const GameHeading = ({ gameQurey }: Props) => {
  const heading = `${gameQurey.platform?.name || ""} ${
    gameQurey.genre?.name || ""
  } Games`;
  return <Heading as="h1" marginY={5} fontSize='5xl'>{heading}</Heading>;
};

export default GameHeading;
