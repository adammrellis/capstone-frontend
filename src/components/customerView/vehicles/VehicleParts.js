import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
//import VehicleType from "../../store/store/vehicles/type";

const VehicleParts = props => {
  console.log("props in VehicleParts", props);
  
  if (props.vehicles.length) {
    const vehicle = props.vehicles.filter(
    veh => veh.id === Number(props.match.params.id)
  );

  console.log("this vehicle", vehicle);

  const listOfParts = vehicle[0].parts.map(part => {
    return (
      <Card
        style={{
          width: "22rem",
          margin: "10px",
          alignItems: "center",
          color: "lightgray",
          backgroundColor: "#233",
          border:"solid gray 1px",
          boxShadow: "0 8px 16px 0 black"
        }}
      >
        <Card.Img variant="top" src={part.image} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {part.year} {part.part_name}
          </Card.Title>
          <Card.Title style={{ textAlign: "center" }}>
            {part.part_type}
          </Card.Title>
          <hr></hr>
          <Card.Text>${part.price}.00</Card.Text>
          <Card.Text>Plus Tax</Card.Text>
          <Card.Text></Card.Text>
          <Card.Text></Card.Text>
          <div style={{ textAlign: "center" }}>
              <Button
                style={{ margin: "3px", width:"160px", height:"50px"}}
                className="btn-sm"
                variant="outline-warning"
              >
                Add Part to Cart
              </Button>
          </div>
        </Card.Body>
      </Card>
    );
  });

    return (
      <Card
      style={{
        color: "lightgray",
        width: "100",
        margin: "10px",
        backgroundColor: "#333",
        border:"solid gray 1px",
        boxShadow: "0 8px 16px 0 black",
        opacity: ".9",
        textAlign: "center" 
      }}
      >
        <Row>
        <Col>
        <h2>Parts Available for</h2>
        <Card.Title style={{ margin: "15px", color: "goldenrod" }}>
         {vehicle[0] && vehicle[0].year_range}{" "}
        </Card.Title>
        <Card.Title style={{ margin: "15px", color: "goldenrod" }}>
         {vehicle[0] && vehicle[0].make}{" "}
        </Card.Title>
        <Card.Title style={{ color: "goldenrod" }}>
          {vehicle[0] && vehicle[0].model }{" "}
        </Card.Title>
        </Col>
        <Col>
        <Card.Img variant="top" src={vehicle[0] && vehicle[0].image} style={{margin: "10px", width: "450px"}} />
        </Col> 
        <div className="mb-4" style={{ display: "flex", flexWrap: "wrap" }}>
          {listOfParts}
        </div>
        </Row>
        </Card>
        
    );
} else {
    return <div>Loading Vehicles</div>;
};

}
// VehicleParts.propTypes = {
//   ...LocationsType
// };

function mapStateToProps(state, props) {
  return {
    vehicles: state.vehicles,
    // locations: state.locations
  };
}

export default connect(mapStateToProps)(
  withRouter(VehicleParts)
);