import '../../assets/css/style.css'
import Nav from '../../components/Nav/index'
import Footer from '../../components/Footer/index'
import './index.scss'

import imageHero from '../../assets/img/hero-banner.webp'
import imageFeatured1 from '../../assets/img/featured-1.webp'
import imageFeatured2 from '../../assets/img/featured-2.webp'
import imageFeatured3 from '../../assets/img/featured-3.webp'
import { useEffect, useState, useRef } from 'react'

import axios from 'axios'
import { Helmet } from "react-helmet";


export default function Index() {

  const URL = "http://localhost:8080/product"
  const [data, setData] = useState([])
  const [priceSort, setPriceSort] = useState(0)
  const [searchVal, setSearchVal] = useState('')


  async function getProducts() {
    const response = await axios.get(URL);
    setData(response.data)
  }

  function orderByPrice() {

    let sortedData;

    if (priceSort == 0) {
      setPriceSort(1)
      sortedData = data.sort((a, b) => {
        return a.price - b.price
      })
    }
    else if (priceSort == 1) {
      setPriceSort(-1)
      sortedData = data.sort((a, b) => {
        return b.price - a.price
      })
    }
    else if (priceSort == -1) {
      setPriceSort(-1)
      sortedData = data.sort((a, b) => {
        return b.price - a.price
      })
    }

    setData(sortedData)
  }

  useEffect(() => {
    getProducts()
  }, []) 
  function mapData() {

  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Project || Home </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>


      <Nav />

      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="left-column">
              <img src={imageHero} alt="" />
            </div>
            <div className="right-column">
              <p className="subtitle"> Shop is fun </p>
              <h2 className="title"> BROWSE OUR PREMIUM PRODUCT </h2>
              <div className="desc"> Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</div>
              <button className='btn-blue' >  Browser Now </button>
            </div>
          </div>
        </div>
      </section>


      <section className="featured">
        <div className="row">

          <div className="box">
            <div className="img-wrap">
              <img src={imageFeatured1} alt="" />
            </div>
            <div className="info">
              <div className="content">
                <p className="name">Wireless headphone</p>
                <p className="category"> Acessories item </p>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="img-wrap">
              <img src={imageFeatured2} alt="" />
            </div>
            <div className="info">
              <div className="content">
                <p className="name">Wireless headphone</p>
                <p className="category"> Acessories item </p>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="img-wrap">
              <img src={imageFeatured3} alt="" />
            </div>
            <div className="info">
              <div className="content">
                <p className="name">Wireless headphone</p>
                <p className="category"> Acessories item </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="trending">
        <div className="container">
          <p className="subtitle"> Popular Item in the market</p>
          <p className="title"> Best <span> sellers </span>   </p>
          <div className="filter">
            <input type="text" placeholder='Search product name' value={searchVal} onChange={ (e) => { setSearchVal(e.target.value) }  } />
            <button onClick={orderByPrice}> Order By Price </button>
          </div>
          <div className="row">
            {data.map(x => {
              console.log('se', searchVal)
              if (x.name.includes(searchVal)) {
                return (
                  <div className="box">
                    <div className="img-wrap">
                      <img src={x.img} alt="" />
                    </div>
                    <div className="info">
                      <p className="category"> {x.category} </p>
                      <h4 className="name"> {x.name} </h4>
                      <p className="price"> {x.price} </p>
                    </div>
                  </div>
                )
              } else {
                return false
              }
            })}
            <div className="box">
              <div className="img-wrap">
                <img src="" alt="" />
                <div className="actions">

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="winter">
        <div className="container">
          <h2 className="title"> Up To 50% Off </h2>
          <h3 className="subtitle"> Winter Sale </h3>
          <p className="desc"> Him she'd let them sixth saw light</p>
          <button> Shop Now  </button>
        </div>
      </section>

      <section className="subscribe">
        <div className="container">
          <h3 className="title"> GET UPDATE FROM ANYWHERE</h3>
          <p className="subtitle"> Bearing Void gathering light light his eavening unto dont afraid</p>
          <form action="">
            <input type="text" placeholder='Your Email address' />
            <button className='btn-blue'> Subscribe Now </button>
          </form>
        </div>
      </section>

      <Footer />

    </div>
  )
}


function FeaturedBox(props) {
  const { img, name, category } = props.data

  return (
    <div className="box">
      <div className="img-wrap">
        <img src={img} alt="" />
      </div>
      <div className="info">
        <p className="name">{name}</p>
        <p className="category">{category}</p>
      </div>
    </div>
  )

}