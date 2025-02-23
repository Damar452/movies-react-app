
import { Col, Row } from "antd";
import React from "react";
import { Movie } from "../../../core/types/movie.type";
import { MovieCard } from "../../../components";

export interface MoviesGridProps {
  movies: Movie[];
}

export const MoviesGrid: React.FC<MoviesGridProps> = ({ movies }) => {
  return (
    <Row gutter={[16, 16]} justify="center" className="mx-10 sm:p-10">
      {movies.map((movie: Movie) => (
        <Col key={movie.imdbID} xs={24} sm={12} md={8} lg={6} xl={4}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  )
}