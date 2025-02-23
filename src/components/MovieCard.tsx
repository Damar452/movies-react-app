import React from "react";
import { Button, Card } from "antd"
import { Movie } from "../types/movie.type";

export interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { Title, Poster, Year } = movie;
  return (
    <Card className="border border-gray-300 shadow-sm"
      hoverable
      cover={<img alt={Title} src={Poster} className="max-h-110" />}
    >
      <h2 className="font-semibold">{Title}</h2>
      <p className="text-gray-500">Año: {Year}</p>
      <Button variant="solid" color="purple">Ver Detalle</Button>
    </Card>
  )
}