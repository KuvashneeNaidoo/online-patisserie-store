import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import productData from "../components/ProductData";

function ProductDescription({ cart, setCart }) {
  const { productName } = useParams();
  const product = productData[productName];

  if (!product) {
    return <p>Product not found.</p>;
  }

  // Add products to cart
  const handleAddToCart = () => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === product.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Card style={{ width: "60%", padding: "20px", borderRadius: "10px" }}>
        <Row>
          {/* Image Column */}
          <Col md={5}>
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.name}
              style={{ height: "auto", width: "100%" }}
            />
          </Col>

          {/* Product Details Column */}
          <Col md={7}>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>
                <strong>Allergens:</strong> {product.allergens}
              </Card.Text>
              <Card.Text>
                <strong>Size:</strong> {product.size}
              </Card.Text>
              <Card.Text>
                <strong>Price:</strong> {product.price}
              </Card.Text>
              <Button
                variant="primary"
                onClick={handleAddToCart}
                style={{ width: "100%" }}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default ProductDescription;
