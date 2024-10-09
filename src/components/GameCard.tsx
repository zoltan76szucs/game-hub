import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface gameProps {
  game: Game;
}

const GameCard = ({ game }: gameProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          paltform={game.parent_platforms.map(
            (platforms) => platforms.platform
          )}
        ></PlatformIconList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
