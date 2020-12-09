import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import TopnavItems from './TopnavItems'

function Topnav() {
  const [active, setActive] = useState(false);
  const [item, setItem] = useState(null)
  const handleChangeItem = (num) => {
    console.log(num)
  }

  return (
    <ul className='top-nav'>
      <li> <Link to="/online"> All Products</Link></li>
      <li >
        <a href="#" > Informatica</a>
      </li>
      <li > <a href="#"> Telefonia</a>
      </li>
      <li> <a href="#"> TV e Home Cinema</a></li>
      <li> <a href="#"> Audio e Hi-Fi</a></li>
      <li> <a href="#"> Foto e Video</a></li>
      <li> <a href="#"> Elettrodomestici</a></li>
      <li> <a href="#"> Console e Videogiochi</a></li>
      <li> <a href="#"> Tempo Libero</a></li>

    </ul>

  )


}


export default Topnav;