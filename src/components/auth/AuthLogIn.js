import React from "react";
import { Button, Form, FormGroup, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

//import PartsType from "../../store/Parts/type";

class AuthLogIn extends React.Component {
  state = {
    name: "",
    password: "",
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    console.log("STATE in LogIn form", this.state);

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
              <h3 style={{ color: "red" }}>Log In</h3>
              <hr></hr>
              <Form.Group controlId="nameId">
                <Form.Label style={{ color: "red" }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={this.state.name.value}
                  onChange={this.handleChange}
                  placeholder="Who are you?"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="passwordId">
                <Form.Label style={{ color: "red" }}>Part Type</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={this.state.password.value}
                  onChange={this.handleChange}
                  placeholder="Part Type"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <div style={{ textAlign: "center" }}>
                <Link to="/authdashboard">
                <Button
                  style={{ margin: "3px", width:"90px", height:"50px", border:"1px white solid"  }}
                  variant="outline-danger"
                  disabled={this.state.password ? false : true}
                //   type="submit"
                >
                  Log In
                </Button>
                </Link>
              </div>
            </FormGroup>
          </Form>
        </Card>
      </div>
    );
  }
}

// AuthLogIn.propTypes = {
//   ...PartsType
// };

export default AuthLogIn;