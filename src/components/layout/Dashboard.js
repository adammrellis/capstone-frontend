import React from "react";
import VehicleList from "../customerView/vehicles/VehicleList";
import PartList from "../customerView/parts/PartList";
import CartList from "../customerView/CartList"

import { Row, Col, Container, Button, Card } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container style={{ display: "flex", margin: "0px" }}>
      
      <Row >
        <Col
        xs={8}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px"
          }}
        >
          <Card
            style={{
              color: "lightgray",
              width: "15rem",
              margin: "10px",
              backgroundColor: "#333",
              border:"solid gray 1px",
              boxShadow: "0 8px 16px 0 black",
              opacity: ".8"
            }}
          >
          <h3 style={{ color: "red", textAlign: "center" }}>
            List of Vehicles
          </h3>
          </Card>
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
          <Card
            style={{
              color: "lightgray",
              width: "15rem",
              margin: "10px",
              backgroundColor: "#333",
              border:"solid gray 1px",
              boxShadow: "0 8px 16px 0 black",
              opacity: ".8"
            }}
          >
          <h3 style={{ color: "red", textAlign: "center" }}>
            Your Cart
          </h3>
          </Card>
          <hr></hr>
          <CartList />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;