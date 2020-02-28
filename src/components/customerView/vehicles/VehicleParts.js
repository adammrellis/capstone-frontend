import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { updatePart } from "../../../store/store/parts/actions";
//import VehicleType from "../../store/store/vehicles/type";

const VehicleParts = props => {
  console.log("props in VehicleParts", props);
  
  if (props.vehicles.length) {
    const vehicle = props.vehicles.filter(
    veh => veh.id === Number(props.match.params.id)
  );

  console.log("this vehicle", vehicle);

  const handleAdd = part => {
    const updatedPart = { ...part, in_cart: true }
    props.updatePart(updatedPart)
    window.alert(
      ` Added to Cart!`
    );
  }

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
          boxShadow: "0 8px 16px 0 black",
          
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
                onClick={() => handleAdd(part)}
                variant="outline-danger"
                style={{ margin: "3px", width:"185px", height:"60px", border:"1px white solid"  }}
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
        <h2 style={{margin:"30px"}}>Parts Available for</h2>
        <Card.Title style={{ margin: "5px", color: "red" }}>
         {vehicle[0] && vehicle[0].year_range}{" "}
        </Card.Title>
        <Card.Title style={{ margin: "15px", color: "red" }}>
         {vehicle[0] && vehicle[0].make}{" "}
        </Card.Title>
        <Card.Title style={{ color: "red" }}>
          {vehicle[0] && vehicle[0].model }{" "}
        </Card.Title>
        </Col>
        <Col>
        <Card.Img variant="top" src={vehicle[0] && vehicle[0].image} style={{margin: "25px", width: "450px"}} />
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

export default connect(mapStateToProps, {updatePart})(
  withRouter(VehicleParts)
);