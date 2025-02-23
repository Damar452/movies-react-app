import React, { useContext } from "react";
import { Button } from "antd";
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { FavoritesContext } from "../context/favorites";
import { Movie } from "../core/types/movie.type";
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../context/favorites/FavoritesActions";

export interface ButtonLikeProps {
  movie: Movie;
}

export const ButtonLike: React.FC<ButtonLikeProps> = ({ movie }) => {
  const favoritesContext = useContext(FavoritesContext);
  if (!favoritesContext) return null;
  const { state, dispatch } = favoritesContext;
  const isFavorite = state.favorites.some((fav) => fav.imdbID === movie.imdbID);

  const handleLike = () => {
    if (isFavorite) {
      dispatch({ type: REMOVE_FROM_FAVORITES, payload: movie.imdbID });
    } else {
      dispatch({ type: ADD_TO_FAVORITES, payload: movie });
    }
  };

  return (
    <Button
      danger
      shape="circle"
      icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
      onClick={handleLike}
    />
  )
}