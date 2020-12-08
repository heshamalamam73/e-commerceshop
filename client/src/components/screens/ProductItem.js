import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { motion } from "framer-motion";
import {backVariants , imageVariants, frameVariants, thumbnailVariants , transition} from "./setting";
import {AiFillHeart} from 'react-icons/ai'
function ProductItem(props) {
    const { product } = props;

   const  handleAddLiked =(e)=> {
       e.preventDefault()
       let liked = JSON.parse(localStorage.getItem("liked")) || [];
       liked.push(product)
       localStorage.setItem('liked' , JSON.stringify(liked))
       console.log(localStorage.getItem("liked"))

    }


  return (
    <Col className="campground" xs={12} md={6} lg={4} xl={3}>

      <Card>
        <Link to={"products/" + product._id}>
          <Card.Img variant="top" src={product.image} />
        </Link>
        <Card.Body>
          <span>{product.name}</span>
          <span className="text-muted">{product.price} $</span>
          <span className="text-muted">{product.category} </span>
          <span className="text-muted">{product.brand} </span>
            <form className='productForm'>
                <Input className='input'  type="select" name="select" id="exampleSelect">
                    <option>Size</option>
                    <option>xs</option>
                    <option>sm</option>
                    <option>m</option>
                    <option>l</option>
                    <option>xl</option>
                    <option>xxl</option>
                </Input>
                <Input className='input'  type="select" name="select" id="exampleSelect">
                    <option>Color</option>
                    <option>red</option>
                    <option>block</option>
                    <option>yellow</option>
                    <option>blue</option>
                </Input>
                <button className="button ">Add</button>
                <button  className='button' onClick={handleAddLiked}><AiFillHeart  size='2em'/></button>
            </form>
        </Card.Body>

      </Card>


    </Col>


  );
}

export default ProductItem;
