import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css';
import Navbar from '../Navbar/Navbar';
import Product from '../ProductCard/Product';
import { Toaster, toast } from "react-hot-toast";

const Productdetails: React.FC = () => {

  const handleCart = () => {
    const token = localStorage.getItem('authToken')
    if (!token){
      toast.error("Register or login to add the product to the cart")
    } else {
      toast.success("Proceed with payment")
    }
  }

  const product = {
    images: [
      'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
    ],
    title: 'Tee 6-Pack',
    description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    price: 29.99,
  };

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <Navbar/>
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <Carousel
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
          </Carousel>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-6">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</div>
          <button onClick={handleCart} className="bg-black text-white px-6 py-2 rounded-lg w-full">
            Add to Cart
          </button>
        </div>
      </div>
      <p className="mt-4 text-lg font-bold">Recommended For You</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        <Product
          name="Basic Tee"
          image="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          price="6000"
        />
        <Product
          name="Basic Tee"
          image="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          price="6000"
        />
        <Product
          name="Basic Tee"
          image="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          price="6000"
        />
        <Product
          name="Basic Tee"
          image="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          price="6000"
        />
        <Product
          name="Basic Tee"
          image="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          price="6000"
        />
        <Product
          name="Basic Tee"
          image="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          price="6000"
        />
        <Product
          name="Basic Tee"
          image="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          price="6000"
        />
        <Product
          name="Basic Tee"
          image="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          price="6000"
        />
      </div>
    </div>
    </>
  );
};

export default Productdetails