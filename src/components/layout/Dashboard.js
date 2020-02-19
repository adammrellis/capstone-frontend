import React from "react";
import VehicleList from "../customerView/vehicles/VehicleList";
import PartList from "../customerView/parts/PartList";
import CartList from "../customerView/CartList"

import { Row, Col, Container, Button } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container style={{ display: "flex", margin: "0px" }}>
      
      <Row >
        <Col
        xs={9}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px"
          }}
        >
          <h3 style={{ color: "goldenrod", textAlign: "center" }}>
            List of Vehicles
          </h3>
          <hr></hr>
          <VehicleList />
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px"
          }}
        >
          <h3 style={{ color: "goldenrod" }}>
            Your Cart
          </h3>
          <hr></hr>
          <CartList />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;