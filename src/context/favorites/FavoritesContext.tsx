import { createContext } from "react";
import { FavoritesState } from "./FavoritesReducer";
import { FavoritesAction } from "./FavoritesActions";

export type FavoritesContextType = {
  state: FavoritesState;
  dispatch: React.Dispatch<FavoritesAction>;
};

export const FavoritesContext = createContext<FavoritesContextType | null>(null);
