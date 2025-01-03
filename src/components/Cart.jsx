import React, { useEffect, useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import "./Cart.css";

function Cart({ cart, setCart }) {
  const [showModal, setShowModal] = useState(false);

  // Save cart to session storage whenever cart changes
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Increment product quantity in cart
  const incrementQuantity = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrement product quantity in cart
  const decrementQuantity = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === product.name && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove product from cart
  const removeItem = (product) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.name !== product.name)
    );
  };

  // Calculate the total cart value before delivery fee
  const cartTotal = cart.reduce(
    (acc, item) =>
      acc + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  // Delivery fee based on cart total
  const deliveryFee = cartTotal < 100 ? 25 : 0;
  const orderTotal = cartTotal + deliveryFee;

  // Show modal when checking out
  const handleCheckout = () => {
    setShowModal(true);
  };

  // Start a new order after confirmation
  const handleNewOrder = () => {
    setCart([]);
    setShowModal(false);
  };

  // Display message if cart is empty
  if (cart.length === 0) {
    return (
      <div className="empty-cart-message">
        <h4>Your cart is empty</h4>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-content">
        {/* Left: Cart table with product details */}
        <div className="cart-table">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    {/* Buttons to increment or decrement product quantity */}
                    <Button
                      variant="secondary"
                      onClick={() => decrementQuantity(item)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="secondary"
                      onClick={() => incrementQuantity(item)}
                    >
                      +
                    </Button>
                  </td>
                  <td>
                    {/* Display product total (price * quantity) */}
                    {(
                      parseFloat(item.price.replace("$", "")) * item.quantity
                    ).toFixed(2)}
                  </td>
                  <td>
                    {/* Button to remove product from the cart */}
                    <Button variant="danger" onClick={() => removeItem(item)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* Right: Order summary with cart totals */}
        <div className="order-summary">
          <h5>Your Order</h5>
          <hr />
          <div className="d-flex justify-content-between">
            <span>Cart Total:</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Delivery Fee:</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <strong>Order Total:</strong>
            <strong>${orderTotal.toFixed(2)}</strong>
          </div>
          <hr />
          <Button variant="success" onClick={handleCheckout}>
            Checkout
          </Button>
        </div>
      </div>

      {/* Modal for order confirmation */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>We hope you enjoy your dessert!</p>
          <h6>Order Summary:</h6>
          <ul>
            {/* List of items in the cart with quantities and totals */}
            {cart.map((item) => (
              <li key={item.name}>
                {item.quantity} x {item.name} - $
                {(
                  parseFloat(item.price.replace("$", "")) * item.quantity
                ).toFixed(2)}
              </li>
            ))}
          </ul>
          <hr />
          <p>
            <strong>Total to Pay:</strong> ${orderTotal.toFixed(2)}
          </p>
        </Modal.Body>
        <Modal.Footer>
          {/* Button to start a new order */}
          <Button variant="primary" onClick={handleNewOrder}>
            Start a New Order
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;
