import React from "react";
import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
//import PartType from "../../store/parts/type";

const Part = ({ parts, singlePart }) => {
    const handleRemove = event => {
      console.log("delete", singlePart.id);
      
    };

  //console.log("props.parts are here", allprops.partss)
  if (parts) {
    return (
      <Card
        style={{
          color: "lightgray",
          width: "15rem",
          margin: "10px",
          backgroundColor: "#333",
          border:"solid gray 1px",
          boxShadow: "0 8px 16px 0 black",
          opacity: ".9"
        }}
      >
        <Card.Img variant="top" src={singlePart.image} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {singlePart.part_name} {}
          </Card.Title>
          <Card.Title style={{ textAlign: "center" }}>
            {}
          </Card.Title>
          <Card.Text>{}</Card.Text>
          <Card.Text>{}</Card.Text>
          <Card.Text></Card.Text>
          <Card.Text></Card.Text>
          <div style={{ display: "flex" }}>
              <Button>Add To Cart</Button>
          </div>
        </Card.Body>
      </Card>
    );
  } else {
    return <div>Loading</div>;
  }
}

// Part.propTypes = {
//   ...PartType
// };

function mapStateToProps(state, props) {
  return {
    vehicles: state.vehicles,
    parts: state.parts
  };
}

export default connect(mapStateToProps)(withRouter(Part));