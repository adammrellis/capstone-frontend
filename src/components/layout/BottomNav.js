import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

class BottomNav extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" style={{ opacity: ".8" }}>
        <Navbar.Brand>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Link to={`/authlogin`}>
              <Button
                style={{ margin: "3px" }}
                variant="outline-danger"
                size="sm"
              >
                Login
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    //users: state.users
  };
};

export default connect(mapStateToProps)(withRouter(BottomNav));