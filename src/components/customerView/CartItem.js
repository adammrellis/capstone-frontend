import React from 'react'
import { connect } from "react-redux";
import { updatePart } from "../../store/store/parts/actions"
import { Button, Card } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from 'prop-types'

const CartItem = ({cartItem, updatePart}) => {

  console.log("CARTITEM: ", cartItem)

  const handleRemove = item => {
    const updatedPart = { ...item, in_cart: false }
    updatePart(updatedPart)
  }

  return (
    <div style={{width: "100%"}} className="align-self-center mb-2 p-2">
        <Card 
        style={{
            color: "lightgray",
            margin: "10px",
            backgroundColor: "#333",
            border:"solid gray 1px",
            boxShadow: "0 8px 16px 0 black",
            opacity: ".9"
          }}>
            <Card.Body>
                <Card.Title>{cartItem.part_name}</Card.Title>
                <Card.Text>${cartItem.price}.00</Card.Text>
                <Button 
                    className="btn btn-danger sm-text btn-sm"
                    onClick={() => handleRemove(cartItem)}
                >Remove From Cart</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

// CartItem.propTypes = {
//   cartItem: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired
//   }),
//   removeFromCart: PropTypes.func.isRequired
// }

function mapStateToProps(state, props) {
  return {
    parts: state.parts,
    // locations: state.locations
  };
}

export default connect(mapStateToProps, {updatePart})(
  withRouter(CartItem)
);