// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css';
import Navbar from '../Navbar/Navbar';
import Product from '../ProductCard/Product';
import { Toaster, toast } from "react-hot-toast";
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import apiService from '../../Services/apiService';
import { useDispatch } from 'react-redux';
import {addItemToCart} from '../../Redux/cartSlice'

const Productdetails: React.FC = () => {
  const param = useParams()
  const route = useNavigate()
  const dispatch = useDispatch()
  const [recommendation, setRecommendation] = useState([])
  const [productDetail, setProductDetail] = useState({
    image: '',
    name: '',
    price: '',
    description: ''
  })

  const handleCart = () => {
    const token = localStorage.getItem('authToken')
    if (!token){
      route('/login')
    } else {
      dispatch(addItemToCart(productDetail))
      toast.success("Proceed with payment")
    }
  }

  const handleRecommendedProductsRoute = (id: number) => {
    route( `/product/${id}`)
  }

  useEffect(() => {
    handleGetProductDetailCall()
  }, [param.id])

  const handleGetProductDetailCall = async () => {
    await apiService.get(`product/${param.id}`)
    .then((data: any) => {
      console.log(data.data, "recommedntion checking")
      setProductDetail(data.data.product)
      setRecommendation(data.data.recommendations)
    })  
    .catch(error => console.log(error))
  }

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <Navbar/>
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <div>
            <img src={`http://localhost:4000/images/${productDetail.image}`}/>
          </div>
          {/* <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            useKeyboardArrows={true}
          >
            {product.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Product Image ${index + 1}`} />
              </div>
            ))}
          </Carousel> */}
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-6">
          <h1 className="text-3xl font-bold mb-2">{productDetail.name}</h1>
          <p className="text-gray-700 mb-4">{productDetail.description}</p>
          <div className="text-2xl font-semibold mb-4">${productDetail.price}</div>
          <button onClick={handleCart} className="bg-black text-white px-6 py-2 rounded-lg w-full">
            Add to Cart
          </button>
        </div>
      </div>
      <p className="mt-4 text-lg font-bold">Recommended For You</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {
          recommendation.map((recommendation: any) => (
            <Product
              key={recommendation.id}
              name={recommendation.name}
              image={`http://localhost:4000/images/${recommendation.image}`}
              price={recommendation.price}
              onClick={() => handleRecommendedProductsRoute(recommendation.id)}
            />
          ))
        }
      </div>
    </div>
    </>
  );
};

export default Productdetails