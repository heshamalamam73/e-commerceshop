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
      <Container className="slider">
        <Slider {...settings}>
          <div>
            <img src="https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/3946005/pexels-photo-3946005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/5083217/pexels-photo-5083217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>

        </Slider>
      </Container>
    );
  }
}
