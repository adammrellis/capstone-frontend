import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { updatePart } from "../../../store/store/parts/actions";
import { removePart } from "../../../store/store/parts/actions"
import { connect } from "react-redux";
//import LocationsType from "../../store/locations/type";

class PartEdit extends React.Component {
  state = {
    id: this.props.selectedPart.id,
    part_name: this.props.selectedPart.part_name,
    part_type: this.props.selectedPart.part_type,
    image: this.props.selectedPart.image
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updatePart(this.state);
    this.props.history.push("/authdashboard");
  };

  render() {

    const handleRemove = event => {
      this.props.removePartfunc(this.state.id);
      console.log("delete", this.state.id);
      // this.props.history.push("/authdashboard");

    };
    console.log("STATE in PART form", this.state);

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
              <h3 style={{ color: "gold" }}>Enter Part Information</h3>
              <hr></hr>
              <Form.Group controlId="part_nameId">
                <Form.Label style={{ color: "gold" }}>Part Name</Form.Label>
                <Form.Control
                  type="text"
                  name="part_name"
                  id="part_nameId"
                  value={this.state.part_name}
                  onChange={this.handleChange}
                  
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="part_typeId">
                <Form.Label style={{ color: "gold" }}>Part Type</Form.Label>
                <Form.Control
                  type="text"
                  name="part_type"
                  value={this.state.part_type}
                  onChange={this.handleChange}
                  
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="imageId">
                <Form.Label style={{ color: "gold" }}>Part Image</Form.Label>
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
                disabled={this.state.part_type ? false : true}
                type="submit"
              >
                Submit
              </Button>
              <Button
              style={{ margin: "3px", width:"90px", height:"60px", border:"1px goldenrod solid"  }}
              className="btn-sm"
              variant="danger"
              onClick={handleRemove}
            >
              Remove Part
            </Button>
              </div>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

// PartEdit.propTypes = {
//   ...LocationsType
// };

function mapStateToProps(state, props) {
  return {
    selectedPart: state.parts.find(
      part => part.id === Number(props.match.params.id)
    )
  };
}

export default connect(mapStateToProps, { updatePart, removePartfunc:removePart })(PartEdit);