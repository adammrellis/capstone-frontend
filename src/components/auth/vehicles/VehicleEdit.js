import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { updateVehicle } from "../../../store/store/vehicles/actions";
import { removeVehicle } from "../../../store/store/vehicles/actions";
import { connect } from "react-redux";
//import VehicleType from "../../store/locations/type";

class VehicleEdit extends React.Component {
  state = {
    id: this.props.selectedVehicle.id,
    year_range: this.props.selectedVehicle.year_range,
    make: this.props.selectedVehicle.make,
    model: this.props.selectedVehicle.model,
    image: this.props.selectedVehicle.image
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateVehicle(this.state);
    this.props.history.push("/authdashboard");
  };
  
  handleRemove = event => {
    this.props.removeVehiclefunc(this.state.id);
    console.log("delete", this.state.id);
    // this.props.history.push("/authdashboard");

  };

  render() {

    console.log("STATE in Vehicle form", this.state);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100vh"
        }}
      >
        <div style={{ width: "50%" }}>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup style={{ margin: "15px" }}>
              <h3 style={{ color: "gold" }}>Enter Vehicle Information</h3>
              <hr></hr>
              <Form.Group controlId="year_rangeId">
                <Form.Label style={{ color: "gold" }}>Year Range</Form.Label>
                <Form.Control
                  type="text"
                  name="year_range"
                  value={this.state.year_range}
                  onChange={this.handleChange}
                  
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="makeId">
                <Form.Label style={{ color: "gold" }}>Make</Form.Label>
                <Form.Control
                  type="text"
                  name="make"
                  value={this.state.make}
                  onChange={this.handleChange}
                  
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="modelId">
                <Form.Label style={{ color: "gold" }}>Model</Form.Label>
                <Form.Control
                  type="text"
                  name="model"
                  value={this.state.model}
                  onChange={this.handleChange}
                  
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="imageId">
                <Form.Label style={{ color: "gold" }}>Vehicle Image</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  value={this.state.image}
                  onChange={this.handleChange}
                
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <div>
              <Button
                disabled={this.state.make ? false : true}
                type="submit"
              >
                Submit
              </Button>
              <Button
              style={{ margin: "3px", width:"90px", height:"60px", border:"1px goldenrod solid"  }}
              className="btn-sm"
              variant="danger"
              onClick={this.handleRemove}
            >
              Remove Vehicle
            </Button>
              </div>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

// VehicleEdit.propTypes = {
//   ...LocationsType
// };

function mapStateToProps(state, props) {
  return {
    selectedVehicle: state.vehicles.find(
      vehicle => vehicle.id === Number(props.match.params.id)
    )
  };
}

export default connect(mapStateToProps, { updateVehicle, removeVehiclefunc:removeVehicle })(VehicleEdit);