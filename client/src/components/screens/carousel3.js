import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";
import Slider from "react-slick";
import img1 from '../../img/slid21.jpg'
import img2 from '../../img/slid22.jpg'
import img3 from '../../img/slid23.jpg'
import img4 from '../../img/slid24.jpg'
import { Container } from 'react-bootstrap'


function Carousel3(props) {
  const productsList = [
    {
      product_name: "iRobot Roomba 980, aspirapolvere robot",
      product_image: " https://res.cloudinary.com/momuzio/image/upload/v1606168211/products/1.jpg",
      product_category: "Robot Aspirapolvere",
      product_price: "399,00",
      product_desc: "",

    },
    {
      product_name: "Apple iPhone 11 128GB Nero",
      product_image: " https://res.cloudinary.com/momuzio/image/upload/v1606168559/products/6.jpg",
      product_category: "iPhone",
      product_price: "649,00",
      product_desc: "Un nuovo sistema a doppia fotocamera, per inquadrare più cose intorno a te.Il chip per smart­phone più veloce che ci sia, insieme a una batteria che ti dà una giornata intera di libertà, per fare più cose ancora più a lungo.E la più alta qualità video mai raggiunta da uno smart­phone, per ricordi più belli che mai",
    },
    {
      product_name: "Samsung Galaxy Buds+",
      product_image: " https://res.cloudinary.com/momuzio/image/upload/v1606168559/products/7.jpg",
      product_category: "Cuffie e Auricolari",
      product_price: "129,00",
      product_desc: "Un nuovo sistema a doppia fotocamera, per inquadrare più cose intorno a te.Il chip per smart­phone più veloce che ci sia, insieme a una batteria che ti dà una giornata intera di libertà, per fare più cose ancora più a lungo.E la più alta qualità video mai raggiunta da uno smart­phone, per ricordi più belli che mai",
    },
    {
      product_name: "Apple Watch SE GPS, 44mm in alluminio",
      product_image: " https://res.cloudinary.com/momuzio/image/upload/v1606168559/products/4.jpg",
      product_category: "Smartwatch",
      product_price: "329,00",
      product_desc: "Un grande display Retina per farti vedere più cose a colpo d’occhio. Sensori evoluti per misurare quanto ti muovi ogni giorno. Funzioni potenti per la tua salute e sicurezza. Apple Watch SE è pronto a darti tantissimo, a meno di quello pensi.",
    },
    {
      product_name: "Google Chromecast , dongle",
      product_image: " https://res.cloudinary.com/momuzio/image/upload/v1606168559/products/2.jpg",
      product_category: "Internet TV",
      product_price: "29,99",
      product_desc: "Divertiti con centinaia di app per Android o iPhone e riproduci o metti in pausa contenuti direttamente dal tuo telefono.",
    }
  ]




  useEffect(() => {

  }, [])

  const settings = {
    className: "center",
    centerPadding: "60px",

    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 4000,
    rtl: true
  };

  return (
    <Container className="slider3">
      <span>I più venduti</span>

      <Slider {...settings} className="">
        {productsList.map(product => (
          <div className="slid-box" style={{ width: 200 }} kay={product._id}>
            <img src={product.product_image} class="hastooltip" />
            <div>
              <span>{product.product_category}</span>
              <h5>{product.product_name} </h5>
              <h6>{product.product_price} $</h6>
              {/* <span>{product.product_desc}</span> */}

            </div>
          </div>

        ))}


        {/* <div className="slid-box" style={{ width: 200 }}>
          <img src={img2} />

        </div>
        <div className="slid-box" style={{ width: 200 }}>
          <img src={img3} />

        </div>
        <div className="slid-box" style={{ width: 200 }}>
          <img src={img4} />

        </div> */}
      </Slider >
    </Container>
  )
}


export default Carousel3;