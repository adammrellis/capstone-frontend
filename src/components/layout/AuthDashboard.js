import React from "react";
import VehicleList from "../auth/vehicles/VehicleList";
import PartList from "../auth/parts/PartList";

import { Row, Col, Container } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container style={{ display: "flex", margin: "0px" }}>
      
      <Row>
        <Col
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
          <h3 style={{ color: "goldenrod" }}>Full List of Parts</h3>
          <hr></hr>
          <PartList />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;