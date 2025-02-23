import React from "react";
import { Row, Alert } from "antd";

export interface HomeAlertsProps {
  search: string;
  error: string;
}

export const HomeAlerts: React.FC<HomeAlertsProps> = ({ search, error }) => {
  return (
    <Row className="p-0 sm:p-12 flex justify-center items-center">
      {search && error && (
        <Alert
          message={`${error} "${search}"`}
          description="¡Puedes seguir buscando, seguro tendrás mas suerte!"
          type="warning"
          showIcon
          closable
        />
      )}

      {!search && (
        <Alert
          message="¿Buscas peliculas y series?"
          description="¡Este es el lugar indicado, aquí puedes buscar tus peliculas y series favoritas!"
          type="info"
          showIcon
        />
      )}
    </Row>
  )
}