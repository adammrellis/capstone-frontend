import React from "react";
import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
//import VehicleType from "../../store/vehicles/type";

const Vehicle = ({ vehicles, singleVehicle }) => {

  console.log("props.vehicles are here", vehicles)
  if (vehicles) {
    return (
      <Card
        style={{
          color: "lightgray",
          width: "15rem",
          margin: "10px",
          backgroundColor: "#333",
          border:"solid gray 1px",
          boxShadow: "0 8px 16px 0 black",
          opacity: ".9"
        }}
      >
        <Card.Img variant="top" src={singleVehicle.image} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {singleVehicle.year_range} {singleVehicle.make}
          </Card.Title>
          <Card.Title style={{ textAlign: "center" }}>
            {singleVehicle.model}
          </Card.Title>
          <Card.Text>{}</Card.Text>
          <Card.Text>{}</Card.Text>
          <Card.Text></Card.Text>
          <Card.Text></Card.Text>
          <Link to={`/vehicleEdit/${singleVehicle.id}`}>
              <Button 
              variant="outline-warning"
              style={{ margin: "3px", width:"185px", height:"60px", border:"1px goldenrod solid"  }}
              >
                Edit Vehicle Details
              </Button>
            </Link>

        </Card.Body>
      </Card>
    );
  } else {
    return <div>Loading Vehicle</div>;
  }
}

// Vehicle.propTypes = {
//   ...VehicleType
// };

function mapStateToProps(state, props) {
  return {
    vehicles: state.vehicles,
    //parts: state.parts
  };
}

export default connect(mapStateToProps)(withRouter(Vehicle));