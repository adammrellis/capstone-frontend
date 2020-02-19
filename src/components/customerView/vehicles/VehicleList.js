import React from "react";
import { connect } from "react-redux";
import Vehicle from "./Vehicle";
//import VehiclesType from "../../store/guitars/type";
import { InputGroup, FormControl, Button } from "react-bootstrap";

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
      // .filter(
      //   part =>
      //     part.make.toLowerCase().includes(this.state.query.toLowerCase()) ||
      //     part.model.toLowerCase().includes(this.state.query.toLowerCase()) ||
      //     part.pickups.toLowerCase().includes(this.state.query.toLowerCase())
      // )
      .map(vehicle => {
        //console.log("part search", this.state.query)
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
              {/* <InputGroup
                style={{ width: "350px", height: "37px", borderRadius: "5px",  }}
              >
                <InputGroup.Prepend style={{ backgroundColor: "#333" }}>
                  <InputGroup.Text
                    style={{
                      backgroundColor: "#333",
                      color: "lightgray",
                      border: "1px goldenrod solid"
                    }}
                    id="basic-addon1"
                  >
                    Search Parts
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  style={{
                    backgroundColor: "#333",
                    border: "1px goldenrod solid"
                  }}
                  placeholder="Make/Model/Pickups"
                  onChange={this.handleInput}
                />
              </InputGroup> */}
            </div>
          </div>
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