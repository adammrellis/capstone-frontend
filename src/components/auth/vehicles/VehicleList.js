import React from "react";
import { connect } from "react-redux";
import Vehicle from "./Vehicle";
//import VehiclesType from "../../store/guitars/type";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";


class VehicleList extends React.Component {
  state = {
    query: ""
  };

  handleInput = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    console.log("props in VehicleList", this.props);
    const listOfVehicles = this.props.vehicles
      .map(vehicle => {
        return (
          <Vehicle
            key={vehicle.id}
            singleVehicle={vehicle}
            allParts={this.props.parts}
          />
        );
      });
    if (this.props.vehicles) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%"
          }}
        >
          <div
            style={{
              backgroundColor: "#333",
              boxShadow: "0 8px 16px 0 black",
              opacity: ".85"
            }}
          >
            <div className="">
            </div>
          </div>
          <Link to={`/newVehicleForm`}>
              <Button
                variant="outline-light"
                style={{ margin: "10px", border:"1px white solid", backgroundColor:"#333", opacity: ".85"
              }}>
              Add New Vehicle</Button>
          </Link>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap"
            }}
          >
            {listOfVehicles}
          </div>
        </div>
      );
    } else {
      return <div>Loading Vehicles</div>;
    }
  }
}

// PartList.propTypes = {
//   ...VehiclesType
// };

const mapStateToProps = (state, props) => {
  console.log("state in vehicleList", state.vehicles);
  return {
    vehicles: state.vehicles,
    //locations: state.locations
  };
};

export default connect(mapStateToProps)(VehicleList);