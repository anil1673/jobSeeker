import React from 'react'
import Navbar from '../navbar/Navbar'
import "./Herosection.css"
import bgman from "../../images/bgman.png"

const Herosection = () => {
  return (
    <div className="herosection">
      <Navbar/>
      <div className="lowerHerosection">
        <div className="heroLeft">
            <div className="heading">
              <h1>Find and apply your dream job with us now</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Quod nobis ratione inventore adipisci accusantium quasi minima esse odit, .</p>
            <div className="searchBox">
              <input type="text" placeholder='search For Job' className='searchInput' />
            </div>
            <div className="smallReview">
              <div>
                <h2>1100 <span>+</span></h2>
                <p>Happy Customer</p>
              </div>

              <div>
                <h2>1100 <span>+</span></h2>
                <p>Happy Customer</p>
              </div>

              <div>
                <h2>1100 <span>+</span></h2>
                <p>Happy Customer</p>
              </div>

            </div>
        </div>
        <div className="heroRight">
            <img src={bgman} alt="dfsf" />
            {/* <img src="https://e7.pngegg.com/pngimages/630/617/png-clipart-assorted-product-in-metal-shopping-basket-shopping-cart-grocery-store-retail-supermarket-shopping-cart-food-package-thumbnail.png" alt="" /> */}
        </div>
      </div>
    </div>
    
  )
}

export default Herosection