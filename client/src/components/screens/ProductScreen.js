import React, { useState, useEffect } from "react";
import { detailsProduct } from "../../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import {Modal, Button, Breadcrumb} from "react-bootstrap";
import { Spinner } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {backVariants , imageVariants} from "./setting";
import {Row,Col} from 'react-bootstrap'
import Contaier from "./Contaier";


function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const [show, setShow] = useState(false);

  const handleClose = () => {
    props.history.push("/");
  };
  const handleShow = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, [show]);
  return (
      <div>
        {product && (
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

              <Breadcrumb.Item href="/online" >Online</Breadcrumb.Item>
              <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>

            </Breadcrumb>
        )}
        <Row className="product-screen">




          {product && (
              <React.Fragment>

                <Col sm={12} md={12} xl={6}>
                  <div className="product-screen-image">
                    <motion.img
                        variants={imageVariants} src={product.image} alt="product"    />
                  </div>



                </Col>
                <Col sm={12} md={12} xl={6}>
                  <div className="product-screen-action-box">
                    <ul>
                      <li>Total Price : {product.price * qty}</li>
                      <li>
                        Status :{product.countInStock > 0 ? "In Stack" : "Out of Stack"}
                      </li>
                      <li>{product.status}</li>
                      <li>
                        quantity :
                        <select value={qty} onChange={(e) => setQty(e.target.value)}>
                          {[...Array(product.countInStock).keys()].map((x) => (
                              <option value={x + 1}>{x + 1}</option>
                          ))}
                        </select>
                      </li>
                      <li>
                        {product.countInStock > 0 && (
                            <button onClick={handleShow} className="button">
                              Add to cart
                            </button>
                        )}
                      </li>
                    </ul>
                  </div>
                  <div className="product-screen-details">
                    <ul>
                      <li>
                        <h4>{product.name}</h4>
                      </li>

                      <li>
                        Rating: {product.rating} stars ({product.numReviews} Reviews)
                      </li>
                      <li>
                        <p> Price : {product.price} </p>
                      </li>
                      <li>
                        <p>Discription : {product.discription} </p>
                      </li>
                    </ul>
                  </div>


                </Col>



              </React.Fragment>
          )}

        </Row>

      </div>





  );
}
export default ProductScreen;
