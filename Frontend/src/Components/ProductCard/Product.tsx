import './Product.css'
import iphone from '../../assets/Images/iphone.jpg'
import { useNavigate } from 'react-router'


const Product = () => {
  const navigate = useNavigate()

  const title = "50L Travelihng Backpack Bag with Steel Plate Frame - Free Waterproof Raincover - Larger than 40L 45L Backpacks - Traveling Bag Men and Women"

  const NavigateToProductDetails = () =>{ 
    navigate('/product')
  }

  return (
    <div>
    <div onClick={NavigateToProductDetails} className="product-container">
      <div className="product-wrapper">
        <img src={iphone} className="product-image" alt="Product" />
        <div className="product-info">
          <div className="product-title">{title.length > 25 ? title.substring(0, 25) + " ...": title}</div>
          <div><span className='sold-div'>29 Sold</span></div>
          <div className="product-price">
            LKR<span>107,200</span>
          </div>
          <div className='offer-cls'>
            <span>Extra 2% off with coins</span>
          </div>

          {/* <div className='btn-container'>
            <button className="shop-now-button">Shop Now</button>
          </div> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Product