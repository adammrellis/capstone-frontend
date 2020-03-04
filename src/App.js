import React from "react";

import TopNav from "./components/layout/TopNav";
import BottomNav from "./components/layout/BottomNav";
import Dashboard from "./components/layout/Dashboard";
import AuthDashboard from "./components/layout/AuthDashboard";
import VehicleParts from "./components/customerView/vehicles/VehicleParts";
import PartEdit from "./components/auth/parts/PartEdit";
import VehicleEdit from "./components/auth/vehicles/VehicleEdit";
import NewPartForm from "./components/auth/parts/NewPartForm";
import NewVehicleForm from "./components/auth/vehicles/NewVehicleForm";
import AuthLogIn from "./components/auth/AuthLogIn"

import { Col, Row, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { fetchAllParts } from "./store/store/parts/actions";
import { fetchAllVehicles } from "./store/store/vehicles/actions";
import { fetchAllUsers } from "./store/store/users/actions"
//import {fetchAllMessages } from "./store/store/messages/actions"

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllParts());
    this.props.dispatch(fetchAllVehicles());
    this.props.dispatch(fetchAllUsers());
    //this.props.dispatch(fetchAllMessages());
  }

  render() {
    const backGround = "https://cdn.beachblvdofcars.com/wp-content/uploads/2018/05/4x4-high-low.jpeg";
    return (
      <div className="App">
        <div
          style={{
            background: `url(${backGround})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <Router>
            <TopNav />
            <Row>
              <Col>
                <Container>
                  <Row>
                    <Route 
                      exact 
                      path="/" 
                      component={Dashboard} 
                    />
                    <Route
                      exact
                      path="/authdashboard"
                      component={AuthDashboard}
                    />
                    <Route
                      exact
                      path="/partEdit/:id"
                      component={PartEdit}
                    />
                    <Route
                      exact
                      path="/vehicleEdit/:id"
                      component={VehicleEdit}
                    />
                    
                    <Route
                      exact
                      path="/newPartForm"
                      component={NewPartForm}
                    />
                    <Route
                      exact
                      path="/newVehicleForm"
                      component={NewVehicleForm}
                    />
                    <Route
                      exact
                      path="/vehicleParts/:id"
                      component={VehicleParts}
                    />
                    <Route
                      exact
                      path="/authlogin"
                      component={AuthLogIn}
                    />  
                  </Row>
                </Container>
              </Col>
            </Row>
            <BottomNav/>
          </Router>
        </div>
      </div>
    );
  }
}

export default connect()(App);