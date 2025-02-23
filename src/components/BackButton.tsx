import React from "react";
import { Button, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';

export const BackButton = () => {
    const navigate = useNavigate();
    return (
        <Tooltip title="Back">
        <Button onClick={() => navigate(-1)} color="purple" variant="outlined" shape="circle" icon={<ArrowLeftOutlined />} />
      </Tooltip>
    )
}