import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import { Jumbotron,Row,Col, Container } from "react-bootstrap";

function CartScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };
  const chickoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  return cartItems.length <= 0 ? (
    <Jumbotron fluid className="cart-screen">
      <Container>
        <i class="fas fa-cart-arrow-down"></i>
        <h1>The Cart Is Empty</h1>
        <p>
          Let's Shopping and add some <a href="/">Products</a>
        </p>
      </Container>
    </Jumbotron>
  ) : (
      <Row className="cart-screen">

          <Col xs={12} md={8} className="cart-item-list">
            {cartItems.map((item, index) => (

                <Row>
              <Col>
                <div className="item-img">
                  <Link to={"/products/" + item.product}>
                    <img src={item.image} alt="item" />
                  </Link>
                </div>

              </Col>
              <Col>
                <span className="item-name">
                  <Link to={"/products/" + item.product}>{item.name}</Link>
                </span>
                <span className="item status">
                {item.countInStock > 0 ? "Disponible" : "finished"}
              </span>
              </Col>
              <Col>
                <div className="item-control">
                  <div className="qty">
                    <label htmlFor="qty"> qty :</label>
                    <select
                        id="qty"
                        value={item.qty}
                        onChange={(e) =>
                            dispatch(addToCart(item.product, e.target.value))
                        }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                          <option value={x + 1} key={x + 1}>
                            {x + 1}
                          </option>
                      ))}
                    </select>
                    <div className="button">
                      <button
                          type="button"
                          onClick={() => removeFromCartHandler(item.product)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>

              </Col>
              <Col>
                <div className="item-price">
                  <span>Price</span>
                  <span className="item-price">{item.price}$</span>
                </div>
              </Col>
            </Row>

            ))}
          </Col>
        <Col md={4} className="cart-action-box">
          <div >
            <span>Total items : {cartItems.reduce((a, c) => a + c.qty, 0)} item </span>
            <span>
              Total price: {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} $
            </span>
            <button
                onClick={chickoutHandler}
                className="button primary full-width"
                disabled={cartItems.length === 0}
            >
              proceed to checkout
            </button>
          </div>
        </Col>


      </Row>

  );
}
export default CartScreen;
