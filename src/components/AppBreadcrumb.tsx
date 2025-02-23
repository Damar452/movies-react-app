import React from "react";
import { Breadcrumb } from "antd";
import { useLocation, Link } from "react-router-dom";

export const AppBreadcrumb = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const breadcrumbItems = [
    { title: <Link to="/">Home</Link> },
    ...pathSnippets.map((path, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      return {
        title: <Link to={url}>{path}</Link>,
        key: url,
      };
    }),
  ];

  return <Breadcrumb items={breadcrumbItems} />;
};
