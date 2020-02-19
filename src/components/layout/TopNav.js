import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";

class TopNav extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" style={{ opacity: ".8" }}>
        <Navbar.Brand>
          <NavLink to={`/`}>
          <img
            alt=""
            src="https://i.imgur.com/kikjbkj.png"
            width="225"
            height="210"
            align="right"
            className="d-inline-block align-top"
          />{" "}
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
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

export default connect(mapStateToProps)(withRouter(TopNav));