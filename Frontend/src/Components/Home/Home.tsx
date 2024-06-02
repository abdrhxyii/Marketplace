import Navbar from "../Navbar/Navbar";
import Product from "../ProductCard/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apiService from "../../Services/apiService";
import { useEffect, useState } from "react";
// import Footer from "../Footer/Footer";

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    handleProductsCall()
  }, [])

  const handleProductsCall = () => {
    apiService.get('product')
    .then((data:any) => {
      setProducts(data.data.data)
    })
    .catch(error => console.log(error))
  }

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      { products.map( (products: any) => (
          <Product
            key={products.id}
            name={products.name}
            image={`http://localhost:4000/images/${products.image}`}
            price={products.price}
          />))}
      </div>
    </>
  );
};

export default Home;
