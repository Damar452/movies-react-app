import React from "react";
import { useMovieDetail } from "../../hooks/useMovies";
import { useParams } from "react-router-dom";
import { Card, Col, Row } from "antd";
import { BackButton, ButtonLike, GridSkeleton } from "../../components";
import { Typography } from 'antd';
import { DetailItem } from "./components/DetailItem";
import { DetailError } from "./components/DetailError";
const { Title } = Typography;

const MovieDetail = () => {
  const { id } = useParams();
  const { movie, loading, error } = useMovieDetail(id!);

  return (
    <div className="mt-10 mx-2">
      <BackButton />
      {loading && (<GridSkeleton cardNumber={1} />)}
      {error && (<DetailError />)}
      {!loading && movie && (
        <div className="my-10 mx-5 md:mx-20 lg:mx-30 xl:mx-40">
          <Card
            hoverable
            className="mx-20 detail-card"
          >
            <Row className="flex flex-col sm:flex-row">
              <Col xs={24} sm={8} className="flex justify-center">
                <img className="w-full" alt={movie.Title} src={movie.Poster} />
              </Col>

              <Col xs={24} sm={16} className="p-5 pe-8">
                <div className="flex justify-center">
                  <Title level={3} className="mr-5">{movie.Title}</Title>
                  <ButtonLike movie={movie} />
                </div>
                <div className="details">
                  <Row>
                    <p>{movie.Plot}</p>
                  </Row>
                  <Row gutter={50}>
                    <DetailItem text="Géneros:" value={movie.Genre} isTag={true} />
                    <DetailItem text="Tipo:" value={movie.Type} isTag={true}/>
                  </Row>

                  <Row gutter={50}>
                    <DetailItem text="Director:" value={movie.Director} />
                    <DetailItem text="Premios:" value={movie.Awards} />
                  </Row>

                  <DetailItem text="Escritores:" value={movie.Writer} />
                  <DetailItem text="Actores:" value={movie.Actors} />

                  <Row gutter={50}>
                    <DetailItem text="Fecha de publicación:" value={movie.Released} />
                    <DetailItem text="Duración:" value={movie.Runtime} />
                  </Row>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      )
      }
    </div >
  )
}

export default MovieDetail;