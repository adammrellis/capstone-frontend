import React from "react";
import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { removePart } from "../../../store/store/parts/actions"
//import PartType from "../../store/parts/type";

const Part = ({ parts, singlePart }) => {

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
            <Link to={`/partEdit/${singlePart.id}`}>
              <Button 
              variant="outline-danger"
              style={{ margin: "3px", width:"185px", height:"60px", border:"1px white solid"  }}
              >
                Edit Part Details
              </Button>
            </Link>
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