import React from "react";
import { connect } from "react-redux";
import Part from "./Part";
//import PartsType from "../../store/guitars/type";
import { InputGroup, FormControl } from "react-bootstrap";

class PartList extends React.Component {
  state = {
    query: ""
  };

  handleInput = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    if (this.props.parts) {
    console.log("props in customer partList", this.props);
    const listOfParts = this.props.parts
      .filter(
        part =>{
          console.log("PARTS", part.part_name.toLowerCase())
          console.log("QUERY", this.state.query.toLowerCase())
          return part.part_name.toLowerCase().includes(this.state.query.toLowerCase()) ||
            part.part_type.toLowerCase().includes(this.state.query.toLowerCase()) 
        }
      )
      .map(part => {
        //console.log("part search", this.state.query)
        return (
          <Part
            key={part.id}
            singlePart={part}
            allVehicles={this.props.vehicles}
          />
        );
      });
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%"
          }}
        >
          <div
            style={{
              backgroundColor: "#333",
              boxShadow: "0 8px 16px 0 black",
              opacity: ".85"
            }}
          >
            <div className="">
              <InputGroup
                style={{ width: "350px", height: "37px", borderRadius: "5px",  }}
              >
                <InputGroup.Prepend style={{ backgroundColor: "#333" }}>
                  <InputGroup.Text
                    style={{
                      backgroundColor: "#333",
                      color: "lightgray",
                      border: "1px goldenrod solid"
                    }}
                    id="basic-addon1"
                  >
                    Search Parts
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  style={{
                    backgroundColor: "#333",
                    border: "1px goldenrod solid"
                  }}
                  placeholder="Make/Model/Part Type"
                  onChange={this.handleInput}
                />
              </InputGroup>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap"
            }}
          >
            {listOfParts}
          </div>
        </div>
      );
    } else {
      return <div>Loading..</div>;
    }
  }
}

// PartList.propTypes = {
//   ...PartsType
// };

const mapStateToProps = (state, props) => {
  console.log("state in partList", state.parts);
  return {
    parts: state.parts,
    //locations: state.locations
  };
};

export default connect(mapStateToProps)(PartList);