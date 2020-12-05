import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";
import { Spinner } from "reactstrap";
import ProductItem from "./ProductItem";
import { Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

function Products(props) {


    const productsList = useSelector((state) => state.productsList);

  const { products, loading, error } = productsList;
  const dispatch = useDispatch();
    const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    dispatch(listProducts());

    return () => {
      //
    };
  }, []);

  return loading ? (
    <div className="spinner">
      <Spinner style={{ width: "3rem", height: "3rem" }} />
    </div>
  ) : error ? (
    <div>Error...</div>
  ) : (

      <Container className="products">

          <Row>
            {products &&
              products.map((product) => (

                  <ProductItem product={product} id={product._id} onClick={() => setSelectedId(product._id)} />
                       ))}    












          </Row>

      </Container>

  );
}
export default Products;
