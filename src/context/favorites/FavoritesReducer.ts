import { Movie } from "../../core/types/movie.type";
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, FavoritesAction } from "./FavoritesActions";

export type FavoritesState = {
  favorites: Movie[];
};

export const favoritesReducer = (state: FavoritesState, action: FavoritesAction): FavoritesState => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((movie) => movie.imdbID !== action.payload),
      };
    default:
      return state;
  }
};

