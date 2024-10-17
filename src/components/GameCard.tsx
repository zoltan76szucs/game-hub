import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";

interface gameProps {
  game: Game;
}

const GameCard = ({ game }: gameProps) => {
  return (
    <Card>
      <Image src={game.background_image}></Image>
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            paltform={game.parent_platforms?.map(
              (platforms) => platforms.platform
            )}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">
          {game.name} <Emoji rating={game.rating_top}></Emoji>{" "}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
