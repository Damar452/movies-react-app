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
    <Row gutter={16} align="middle" className="p-0 sm:p-12  flex justify-center items-center">
      <Title level={2} className="text-center">Busca tu Película o Serie favorita</Title>
      <Col xs={24} sm={24} className="mb-10 sm:mb-0">
        <Search
          placeholder="Busca tu película o Serie..."
          className="custom-search"
          size="large"
          loading={loading}
          onSearch={handleSearch}
          enterButton
        />
      </Col>
    </Row>
  )
}