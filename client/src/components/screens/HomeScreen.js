import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";
import { Spinner } from "reactstrap";
import ProductItem from "./ProductItem";
import { Container, Row } from "reactstrap";

function HomeScreen(props) {
  const productsList = useSelector((state) => state.productsList);

  const { products, loading, error } = productsList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());

    return () => {
      //
    };
  }, []);

  return loading ? (
    <div className="center">
      <Spinner style={{ width: "3rem", height: "3rem" }} />
    </div>
  ) : error ? (
    <div>Error...</div>
  ) : (
    <Container className="campgrounds">
      <Row>
        {products &&
          products.map((product) => (
            <ProductItem product={product} id={product._id} />
          ))}
      </Row>
    </Container>
  );
}
export default HomeScreen;
