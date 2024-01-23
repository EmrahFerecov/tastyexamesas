import React from 'react'
import "./index.scss"
import { Helmet, HelmetProvider } from "react-helmet-async";


const Menu = () => {
  return (
    <section className='sari'>
      <h1>Sari</h1>
   <Helmet>
    <title>Menu</title>
    </Helmet>
    </section>
  )
}

export default Menu