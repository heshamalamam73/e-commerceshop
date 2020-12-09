import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import Topnav from "./screens/Topnav";
import { BsJustify, BsListUl } from 'react-icons/bs'

import { Link } from 'react-router-dom'
import TopnavItems from "./screens/TopnavItems";
function LeftNav(props) {
    const [show, setShow] = useState(true)

    const handleopen = () => {
        setShow(!show)
        const nav = document.getElementById("mySidenav")
        // show ? nav.style.width = "200px" : nav.style.width = "10px"

    }





  return (

              <div id="mySidenav" className="sidenav" >


                  {/*<Link to='/' >Home</Link>*/}
                  {/*<Link to='/allproducts'>All peoducts</Link>*/}
                  {/*<a href="#services">Services</a>*/}
                  {/*/!* <a href="#">Clients</a> *!/*/}
                  {/*<Link href="#cantact">Contact</Link>*/}
                  {/*<ul>*/}

                  {/*    <li>*/}
                  {/*        <a href="#projects"> Projects </a>*/}
                  {/*        <ul>*/}
                  {/*            <li><a href="#1"> Project1</a></li>*/}
                  {/*            <li><a href="#2"> Project2</a></li>*/}
                  {/*            <li><a href="#3"> Project3</a></li>*/}
                  {/*            <li><a href="#4"> Project4</a></li>*/}
                  {/*            <li><a href="#5"> Project5</a></li>*/}
                  {/*            <li><a href="#6"> Project6</a></li>*/}
                  {/*        </ul>*/}
                  {/*    </li>*/}
                  {/*    <li>*/}
                  {/*        <a href="#projects"> Blog </a>*/}
                  {/*        <ul>*/}
                  {/*            <li><a href="#1"> Project1</a></li>*/}
                  {/*            <li><a href="#2"> Project2</a></li>*/}
                  {/*            <li><a href="#3"> Project3</a></li>*/}
                  {/*            <li><a href="#4"> Project4</a></li>*/}
                  {/*            <li><a href="#5"> Project5</a></li>*/}
                  {/*            <li><a href="#6"> Project6</a></li>*/}
                  {/*        </ul>*/}
                  {/*    </li>*/}
                  {/*    <li>*/}
                  {/*        <a href="#projects"> Category </a>*/}
                  {/*        <ul>*/}
                  {/*            <li><a href="#1"> Project1</a></li>*/}
                  {/*            <li><a href="#2"> Project2</a></li>*/}
                  {/*            <li><a href="#3"> Project3</a></li>*/}
                  {/*            <li><a href="#4"> Project4</a></li>*/}
                  {/*            <li><a href="#5"> Project5</a></li>*/}
                  {/*            <li><a href="#6"> Project6</a></li>*/}
                  {/*        </ul>*/}
                  {/*    </li>*/}
                  {/*</ul>*/}
                  <TopnavItems />
              </div>


  );
}

export default LeftNav;
