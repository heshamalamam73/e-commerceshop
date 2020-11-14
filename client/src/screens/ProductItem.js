import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function ProductItem(props) {
  const { product } = props;

  return (
    <Col className="campground" xs={12} md={6} lg={4} xl={3}>
      <Card>
        <Link to={"products/" + product._id}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
          </Card.Body>
        </Link>
        <Card.Footer className="product-footer">
          <Card.Text className="text">{product.price} $</Card.Text>
          <Card.Text className="text">{product.category} </Card.Text>
          <Card.Text className="text">{product.brand} </Card.Text>
        </Card.Footer>
        <div className="flex">
          <Input type="select" name="select" id="exampleSelect">
            <option>Size</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <Input type="select" name="select" id="exampleSelect">
            <option>Color</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <Button className="button form-control">Add</Button>
        </div>
      </Card>
    </Col>
  );
}

export default ProductItem;
