import React from 'react'
import { Button, Card } from "react-bootstrap";
import PropTypes from 'prop-types'

const CartItem = ({cartItem, removeFromCart}) => {
  const handleRemove = e => {
    removeFromCart(cartItem.id)
  }

  return (
    <div style={{width: "100%"}} className="align-self-center mb-2 p-2">
        <Card 
        style={{
            color: "lightgray",
            width: "10rem",
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
                    onClick={handleRemove}
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

export default CartItem