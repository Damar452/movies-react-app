import { useEffect, useState } from "react";
import { getMovies } from "../services/moviesService";

const useMovies = (param: string, search: string): any => {
  const [movies, setMovies] = useState<any>([]);
  const [totalResults, setTotalResults] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    if (search.length <= 0) return;

    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { Search, totalResults, Error } = await getMovies(param, search);
        const customError = Error ? 'No encontramos resultados para:' : null;
        const responseMovies = Error ? [] : Search;
        setError(customError);
        setMovies(responseMovies);
        setTotalResults(totalResults);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [search]);

  return { movies, totalResults, loading, error };
};

export default useMovies;