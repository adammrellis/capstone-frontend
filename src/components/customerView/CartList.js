import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
//import CartsType from "../../store/guitars/type";
import { Card, Button } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";

const CartList = props => {
  console.log("props in CART", props.parts);
  if (props.parts) {
    const filteredParts = props.parts.filter(part => part.in_cart);
    const cartItemComponents = filteredParts.map(cartItem => {
      return (
        <CartItem
          key={cartItem.id}
          cartItem={cartItem}
          removeFromCart={props.removeFromCart}
        />
      );
    });

    const cartSubTotal = () => {
      return filteredParts.reduce((total, part) => {
        return total + part.price;
      }, 0);
    };

    const tax = cartSubTotal() * 0.086;
    const total = cartSubTotal() + tax;

    const processPayment = everything => {
      window.alert(
        ` Subtotal: $${cartSubTotal().toFixed(2)} \n Tax: ${tax.toFixed(
          2
        )} \n Total: $${total.toFixed(2)} \n \n Confirm Payment?`
      );
    };

    return (
      <div id="cart-div" style={{ textAlign: "center" }}>
        <Card
          style={{
            color: "lightgray",
            width: "290px",
            margin: "10px",
            backgroundColor: "#333",
            border: "solid gray 1px",
            boxShadow: "0 8px 16px 0 black",
            opacity: ".9"
          }}
        >
          <p className="" style={{ textAlign: "center", margin: "15px" }}>
            Subtotal: ${cartSubTotal().toFixed(2)}
          </p>
          <p style={{ textAlign: "center" }}>Tax: ${tax.toFixed(2)}</p>
          <p style={{ textAlign: "center" }}>Total: ${total.toFixed(2)}</p>
          <Button
            id="checkout-btn"
            variant="outline-light"
            style={{
              width: "150px",
              margin: "10px",
              border: "1px red solid",
              backgroundColor: "#333",
              opacity: ".85"
            }}
            onClick={() => processPayment(cartSubTotal())}
          >
            <b>Checkout</b>
          </Button>
          <div className="d-flex flex-column">{cartItemComponents}</div>
        </Card>
      </div>
    );
  } else {
    return <div>Loading..</div>;
  }
};

// PartList.propTypes = {
//   ...PartsType
// };

function mapStateToProps(state, props) {
  return {
    parts: state.parts
    // locations: state.locations
  };
}

export default connect(mapStateToProps)(withRouter(CartList));
