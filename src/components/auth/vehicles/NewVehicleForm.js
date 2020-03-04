import React from "react";
import { Button, Form, FormGroup, Card } from "react-bootstrap";
import { addVehicle } from "../../../store/store/vehicles/actions";
import { connect } from "react-redux";
//import VehiclesType from "../../store/Vehicles/type";

class NewVehicleForm extends React.Component {
  state = {
    year_range: "",
    make: "",
    model: "",
    image: "",
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSelect = event => {
    const { name, value } = event.target;
    console.log("VALUE", value);

    this.setState({
      [name]: Number(value)
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addVehicle({
      year_range: this.state.year_range,
      make: this.state.make,
      model: this.state.model,
      image: this.state.image,
    });
    this.props.history.push("/authdashboard");
  };

  render() {
    console.log("STATE in Part form", this.state);

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
        <Card
          style={{
            width: "48%",
            margin: "10px",
            backgroundColor: "#333",
            border:"solid gray 1px",
            boxShadow: "0 8px 16px 0 black",
            opacity: ".85"
          }}
        >
          <Form onSubmit={this.handleSubmit}>
            <FormGroup style={{ margin: "15px" }}>
              <h3 style={{ color: "red" }}>Enter Part Information</h3>
              <hr></hr>
              <Form.Group controlId="year_rangeId">
                <Form.Label style={{ color: "red" }}>Year Range</Form.Label>
                <Form.Control
                  type="text"
                  name="year_range"
                  value={this.state.year_range.value}
                  onChange={this.handleChange}
                  placeholder="Year Range"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="makeId">
                <Form.Label style={{ color: "red" }}>Make</Form.Label>
                <Form.Control
                  type="text"
                  name="make"
                  value={this.state.make.value}
                  onChange={this.handleChange}
                  placeholder="Make"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="modelId">
                <Form.Label style={{ color: "red" }}>Model</Form.Label>
                <Form.Control
                  type="text"
                  name="model"
                  value={this.state.model.value}
                  onChange={this.handleChange}
                  placeholder="Model"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="imageId">
                <Form.Label style={{ color: "red" }}>Vehicle Image</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  value={this.state.image.value}
                  onChange={this.handleChange}
                  placeholder="Vehicle Image"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <div style={{ textAlign: "center" }}>
                <Button
                  style={{ margin: "3px", width:"90px", height:"50px", border:"1px white solid"  }}
                  variant="outline-danger"
                  disabled={this.state.image ? false : true}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </FormGroup>
          </Form>
        </Card>
      </div>
    );
  }
}

// NewVehicleForm.propTypes = {
//   ...VehiclesType
// };

function mapStateToProps(state, props) {
  return {
    vehicles: state.vehicles
  };
}

export default connect(mapStateToProps, { addVehicle })(NewVehicleForm);
