import iphone from '../../assets/Images/sampleimg.jpg'
import './Productdetails.css'

const Productdetails = () => {
  const title = "50L Travelihng Backpack Bag with Steel Plate Frame - Free Waterproof Raincover - Larger than 40L 45L Backpacks - Traveling Bag Men and Women"

  return (
    <div>
      <div className="products-details">
        <div className="products-img">
          <img className='img' src={iphone} alt="" />
        </div>

        <div className="products-pricings">
          <div className="products-pricing-details">
            <span>LKR 105,000</span>
            {/* Offer any, its end date */}
            <span>Ends Feb 17, 01:29 PM (GMT+5.5)</span>
          </div>

          <div className="products-delivary-details">
            <span>Free shipping over LKR3,129.81</span>
            <span>Fast delivery by Mar 07</span>
          </div>

          <div className="product-titles">
            <span>{title}</span>
            <div className="product-feedbacks">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productdetails