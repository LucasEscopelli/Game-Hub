import { useEffect, useState } from "react";
import apiClient from "../sources/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesReponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [gamesArray, setGamesArray] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesReponse>("/games", { signal: controller.signal })
      .then((res) => setGamesArray(res.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { gamesArray, error };
};

export default useGames;
