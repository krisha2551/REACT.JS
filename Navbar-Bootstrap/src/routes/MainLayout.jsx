import React from "react";
import Header from "../component/Header";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Container className="my-4">
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
