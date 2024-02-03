import React, {useState, useEffect} from 'react'
import './Product.css'
import iphone from '../../assets/Images/iphone.jpg'


const Product = () => {

    const title = "50L Traveling Backpack Bag with Steel Plate Frame - Free Waterproof Raincover - Larger than 40L 45L Backpacks - Traveling Bag Men and Women"
    const [word, setWord] = useState(title)

    useEffect(() => {
        const limit = 80;
        const slice = word.length > limit ? title.substring(0, limit) + " ...": title;
        setWord(slice)
    }, [title])

  return (
    <div className="product-container">
      <div className="product-wrapper">
        <img src={iphone} className="product-image" alt="Product" />
        <div className="product-info">
          <div className="product-title">{word}</div>
          <div className="product-price">Rs.107,200</div>
          <div className='btn-container'>
            <button className="shop-now-button">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product