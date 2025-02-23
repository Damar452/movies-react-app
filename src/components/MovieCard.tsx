import React from "react";
import { Button, Card, Col, Row } from "antd";
import { Movie } from "../core/types/movie.type";
import { ButtonLike } from "./ButtonLike";

export interface MovieCardProps {
  movie: Movie;
  onDetail: (imdbID: string) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onDetail }) => {
  const { imdbID, Title, Poster, Year } = movie;
  const handleClick = () => onDetail(imdbID);

  return (
    <Card className="border border-gray-300 shadow-sm w-full min-h-125 max-w-90 min-w-80"
      hoverable
      cover={<img alt={Title} src={Poster} className="h-110" />}
    >
      <div className="details">
        <h2 className="font-semibold">{Title}</h2>
        <p className="text-gray-500">Año: {Year}</p>
      </div>
      <Row gutter={10}>
        <Col sm={20}>
          <Button
            block
            variant="solid"
            color="purple"
            onClick={handleClick}
          >
            Ver Detalle
          </Button>
        </Col>
        <Col>
          <ButtonLike movie={movie} />
        </Col>
      </Row>
    </Card>
  )
}