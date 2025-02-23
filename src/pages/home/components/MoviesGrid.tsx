
import { Col, Row } from "antd";
import React from "react";
import { Movie } from "../../../core/types/movie.type";
import { MovieCard } from "../../../components";

export interface MoviesGridProps {
  movies: Movie[];
}

export const MoviesGrid: React.FC<MoviesGridProps> = ({ movies }) => {
  return (
    <div className="mx-5 mb-5">
      <Row gutter={[16, 16]} justify="center" className="sm:p-10">
        {movies.map((movie: Movie) => (
          <Col key={movie.imdbID} >
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </div>
  )
}