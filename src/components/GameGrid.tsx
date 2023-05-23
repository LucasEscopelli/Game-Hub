import {  Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

function GameGrid() {
  const {gamesArray, error} = useGames();

  return (<>
  {error && <Text>{error}</Text>}
  <ul>
   { gamesArray.map(game => (<li>{game.name}</li>))}
  </ul>
  </>);
}

export default GameGrid;
