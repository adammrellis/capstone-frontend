import React from "react";
import { Button, Form, FormGroup, Card } from "react-bootstrap";
import { addPart } from "../../../store/store/parts/actions";
import { connect } from "react-redux";
//import PartsType from "../../store/Parts/type";

class NewPartForm extends React.Component {
  state = {
    part_name: "",
    part_type: "",
    image: "",
    in_cart: false
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
    this.props.addPart({
      part_name: this.state.part_name,
      part_type: this.state.part_type,
      year: Number(this.state.year),
      image: this.state.image,
      in_cart: this.state.in_cart
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
              <Form.Group controlId="part_nameId">
                <Form.Label style={{ color: "red" }}>Part Name</Form.Label>
                <Form.Control
                  type="text"
                  name="part_name"
                  value={this.state.part_name.value}
                  onChange={this.handleChange}
                  placeholder="Part Name"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="part_typeId">
                <Form.Label style={{ color: "red" }}>Part Type</Form.Label>
                <Form.Control
                  type="text"
                  name="part_type"
                  value={this.state.part_type.value}
                  onChange={this.handleChange}
                  placeholder="Part Type"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="imageId">
                <Form.Label style={{ color: "red" }}>Part Image</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  value={this.state.image.value}
                  onChange={this.handleChange}
                  placeholder="Image"
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

// NewPartForm.propTypes = {
//   ...PartsType
// };

function mapStateToProps(state, props) {
  return {
    parts: state.parts
  };
}

export default connect(mapStateToProps, { addPart })(NewPartForm);
