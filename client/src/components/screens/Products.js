import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";
import { Spinner } from "reactstrap";
import ProductItem from "./ProductItem";
import { Container, Row } from "reactstrap";
import {Breadcrumb} from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import LeftNav from "../LeftNav";

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

  return(
      <div >
          <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

              <Breadcrumb.Item active>Online</Breadcrumb.Item>
          </Breadcrumb>
          <div className="products">
              <div >
                  <LeftNav />
              </div>
              <div>
                  {
                      loading ? (
                          <div className="spinner">
                              <Spinner style={{ width: "3rem", height: "3rem" }} />
                          </div>
                      ) : error ? (
                          <div>Error...</div>
                      ) : (

                          <Row>
                              {products &&
                              products.map((product) => (

                                  <ProductItem product={product} id={product._id} onClick={() => setSelectedId(product._id)} />
                              ))}
                          </Row>
                      )
                  }
              </div>
          </div>


      </div>

)
}
export default Products;
