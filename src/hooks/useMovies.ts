import { useEffect, useState } from "react";
import { getMovies } from "../core/services/moviesService";
import { Movie, MovieDetail } from "../core/types/movie.type";

export type UseMoviesResponse = {
  movies: Movie[];
  totalResults: number; 
  loading: boolean; 
  error: string | null;
}

export type UseMovieDetailResponse = {
  movie: MovieDetail | undefined;
  loading: boolean; 
  error: string | null;
}

const useMovies = (search: string, page: number): UseMoviesResponse => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalResults, setTotalResults] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    if (search.length <= 0) return;

    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { Search, totalResults, Error } = await getMovies('s', `${search}&page=${page}`);
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
  }, [search, page]);

  return { movies, totalResults, loading, error };
};

const useMovieDetail = (id: string): UseMovieDetailResponse => {
  const [movie, setMovie] = useState<MovieDetail>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    if (id.length <= 0) return;

    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getMovies('i', id);
        const customError = data.Error ? 'No encontramos resultados para su busqueda' : null;
        const responseMovie = data.Error ? {} : data;
        setError(customError);
        setMovie(responseMovie);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [id]);

  return { movie, loading, error };
};



export  { useMovies, useMovieDetail};