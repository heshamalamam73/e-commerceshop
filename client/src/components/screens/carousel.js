import React from 'react'
import Slider from "react-slick";
import img1 from '../../img/slid21.jpg'
import img2 from '../../img/slid22.jpg'
import img3 from '../../img/slid23.jpg'
import img4 from '../../img/slid24.jpg'
import { Container } from 'react-bootstrap'

function Carousel(props) {
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
    <Container className="slider2">
      <Slider {...settings} >

        <div className="slid-box" style={{ width: 400 }} >
          <img src={img1} />

        </div>
        <div className="slid-box" style={{ width: 400 }}>
          <img src={img2} />

        </div>
        <div className="slid-box" style={{ width: 400 }}>
          <img src={img3} />

        </div>
        <div className="slid-box" style={{ width: 500 }}>
          <img src={img4} />

        </div>
      </Slider >
    </Container>

  )
}


export default Carousel;