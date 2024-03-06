import './Product.css'
// import iphone from '../../assets/Images/iphone.jpg'
import { useNavigate } from 'react-router'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
]

const Product = () => {
  const navigate = useNavigate()

  // const title = "50L Travelihng Backpack Bag with Steel Plate Frame - Free Waterproof Raincover - Larger than 40L 45L Backpacks - Traveling Bag Men and Women"

  // const NavigateToProductDetails = () =>{ 
  //   navigate('/product')
  // }
  // const img = 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'

  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
    // <div>
    // <div onClick={NavigateToProductDetails} className="product-container">
    //   <div className="product-wrapper">
    //     <img src={img} className="product-image" alt="Product" />
    //     <div className="product-info">
    //       <div className="product-title">{title.length > 25 ? title.substring(0, 25) + " ...": title}</div>
    //       <div><span className='sold-div'>29 Sold</span></div>
    //       <div className="product-price">
    //         LKR<span>107,200</span>
    //       </div>
    //       <div className='offer-cls'>
    //         <span>Extra 2% off with coins</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
  )
}

export default Product