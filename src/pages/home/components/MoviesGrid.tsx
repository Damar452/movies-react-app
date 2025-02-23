
import { Col, Row } from "antd";
import React from "react";
import { Movie } from "../../../core/types/movie.type";
import { MovieCard } from "../../../components";
import { useNavigate } from "react-router-dom";
import { scrollTop } from "../../../core/utils/scroll.util";

export interface MoviesGridProps {
  movies: Movie[];
}

export const MoviesGrid: React.FC<MoviesGridProps> = ({ movies }) => {
  const navigate = useNavigate();

  const handleDetail = (imdbID: string) => {
    navigate(`/movie/${imdbID}`);
    scrollTop();
  };

  return (
    <div className="mx-5 mb-5">
      <Row gutter={[16, 16]} justify="center" className="sm:p-10">
        {movies.map((movie: Movie) => (
          <Col key={movie.imdbID} >
            <MovieCard movie={movie} onDetail={handleDetail} />
          </Col>
        ))}
      </Row>
    </div>
  )
}