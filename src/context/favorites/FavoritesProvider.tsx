import React from 'react';
import { useReducer, ReactNode } from "react";
import { favoritesReducer, FavoritesState } from "./FavoritesReducer";
import { FavoritesContext } from "./FavoritesContext";

const initialState: FavoritesState = {
  favorites: [],
};

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};