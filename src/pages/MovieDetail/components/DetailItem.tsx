import React from "react";
import { Col, Tag } from "antd";

export interface DetailItemProps {
  text: string;
  value: string;
  isTag?: boolean;
}

export const DetailItem: React.FC<DetailItemProps> = ({ text, value, isTag = false }) => {
  return (
    <Col>
      {!isTag ? (
        <div>
          <p className="font-semibold !mb-0">{text}</p>
          <p>{value}</p>
        </div>
      ) : (
        <div className="genre mb-4">
          <p className="font-semibold !mb-0">{text}</p>
          {value?.split(",").map((genre: string, index: number) => (
            <Tag key={index} color="purple">
              {genre}
            </Tag>
          ))}
        </div>
      )}
    </Col>
  )
}