import Navbar from "../Navbar/Navbar";
import Product from "../ProductCard/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apiService from "../../Services/apiService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import Footer from "../Footer/Footer";

const Home = () => {
  const route = useNavigate();
  const [products, setProducts] = useState([])

  useEffect(() => {
    handleProductsCall()
  }, [])

  const handleProductsCall = () => {
    apiService.get('product')
    .then((data:any) => {
      console.log(data.data.data)
      setProducts(data.data.data)
    })
    .catch(error => console.log(error))
  }

  const handleProductDetailRoute = (id: number) => {
    route(`product/${id}`)
  }

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      { products.map( (products: any) => (
          <Product
            key={products.id}
            name={products.name}
            image={products.image}
            price={products.price}
            onClick={() => handleProductDetailRoute(products.id)}
          />))}
      </div>
    </>
  );
};

export default Home;
