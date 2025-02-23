import React from "react";
import { Input, Col, Row, Typography } from "antd";
const { Search } = Input;
const { Title } = Typography;

export interface MoviesSearchProps {
  loading: boolean;
  handleSearch: (value: string) => void;
}

export const MoviesSearch: React.FC<MoviesSearchProps> = ({ loading, handleSearch }) => {
  return (
    <Row className="p-0 pb-4 mx-5 sm:p-10 flex flex-col justify-center items-center gap-4">
      <Col xs={24} sm={24}>
        <Title level={2} className="text-center">Busca tu Película o Serie favorita</Title>
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={8}  className="w-full">
        <Search
          placeholder="Busca tu película o Serie..."
          className="custom-search w-full"
          size="large"
          loading={loading}
          onSearch={handleSearch}
          enterButton
          color="purple"
          variant="filled"
        />
      </Col>
    </Row>
  )
}