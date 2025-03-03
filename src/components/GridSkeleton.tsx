import React from "react"
import { Card, Col, Row, Skeleton } from "antd";

export interface GridSkeletonProps {
  cardNumber: number;
}

export const GridSkeleton: React.FC<GridSkeletonProps> = ({ cardNumber }) => {
  return (
    <Row gutter={[16, 16]} justify="center" className="my-12">
      {Array.from({ length: cardNumber }).map((_, index) => (
        <Col key={index} xs={24} sm={12} md={12} lg={8} xl={6}>
          <Card hoverable>
            <Skeleton.Image active className="w-full h-72" />
            <Skeleton active paragraph={{ rows: 2 }} />
          </Card>
        </Col>
      ))}
    </Row>
  )
}