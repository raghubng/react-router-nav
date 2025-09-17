import React from 'react'
import "./service.css"
import Back from "../Back"
import img from "../services.jpg"

const Service = () => {
   const services = [
  {
    cover: "../images/hero/h1.png",
    name: "Family House",
    total: "122 Property",
  },
  {
    cover: "../images/hero/h2.png",
    name: "House & Villa",
    total: "155 Property",
  },
  {
    cover: "../images/hero/h3.png",
    name: "Apartment",
    total: "300 Property",
  },
  {
    cover: "../images/hero/h4.png",
    name: "Office & Studio",
    total: "80 Property",
  },
  {
    cover: "../images/hero/h6.png",
    name: "Villa & Condo",
    total: "80 Property",
  },
]
  return (
       <>
        <section className='services mb'>
            <Back name='Services' title='Services -All Services' cover={img} />
        <div className='featured container'>
      <div className='content grid5 mtop'>
        {services.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
      </div>
      </section>
    </>
  )
}

export default Service