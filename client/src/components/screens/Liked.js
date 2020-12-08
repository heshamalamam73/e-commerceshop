import React, {useState} from 'react'
import {Container, Input} from "reactstrap";
import {Card, Col,Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AiFillDelete} from "react-icons/ai";

function Liked(){

    const [products, setProducts] = useState( JSON.parse(localStorage.getItem("liked")) || [])
    const removeItem = (a) => {

        return function (e){
            e.preventDefault()
            let liked = JSON.parse(localStorage.getItem("liked")) || [];
            liked = liked.filter(function(item) {
                return item._id !== a._id
            })
            localStorage.setItem('liked' , JSON.stringify(liked))
            setProducts(liked)

        }
    }

    return (
        <Container className="products">


           <Row>
               {products.length > 0 ?products.map(product => (
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
                               <button  className='button'  onClick={removeItem(product)}><AiFillDelete  size='2em'/></button>
                           </form>
                       </Card.Body>

                   </Card>


               </Col>
               )): (
                   <div className="alert alert-info btn-block"> empaty</div>
               )}
           </Row>
        </Container>
    )
}


export default Liked;