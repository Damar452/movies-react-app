import React from "react";
import { Row, Alert } from "antd";

export const DetailError = () => {
  return (
    <Row className="p-0 sm:p-12 flex justify-center items-center">
      <Alert
        message="Error"
        description="¡Lo sentiemos, no hemos encontrado el detalle del contenido que buscas!"
        type="error"
        showIcon
      />
    </Row>
  )
}