import { Movie } from "../../core/types/movie.type";

export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export type FavoritesAction =
  | { type: typeof ADD_TO_FAVORITES; payload: Movie }
  | { type: typeof REMOVE_FROM_FAVORITES; payload: string };