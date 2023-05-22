import React, { useEffect, useState } from "react";
import {  Text } from "@chakra-ui/react";
import apiClient from "../sources/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesReponse {
  count: number;
  results: Game[];
}

function GameGrid() {
  const [gamesArray, setGamesArray] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesReponse>("/games")
      .then((res) => setGamesArray(res.data.results))
      .catch((error) => setError(error.message));
  });

  return (<>
  {error && <Text>{error}</Text>}
  <ul>
   { gamesArray.map(game => (<li>{game.name}</li>))}
  </ul>
  </>);
}

export default GameGrid;
