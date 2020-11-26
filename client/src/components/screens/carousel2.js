import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Slider from "react-slick"
import img1 from '../../img/slid1.jpg'
import img2 from '../../img/slid2.jpg'
import img3 from '../../img/slid3.jpg'
import img4 from '../../img/slid4.jpg'
import img5 from '../../img/slid5.jpg'
import img6 from '../../img/slid6.png'


export default class Carousel2 extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>
          <div>
            <img src={img5} />
          </div>

        </Slider>
      </div>
    );
  }
}
