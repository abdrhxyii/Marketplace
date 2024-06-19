import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Navbar from "../Navbar/Navbar"
import Product from "../ProductCard/Product"
import apiService from "../../Services/apiService"

const Category = () => {
  const [category, setCategory] = useState('')
  const [products, setProducts] = useState([])
  const param = useParams()

  useEffect(() => {
  handleproductsByCategoryCall()
    console.log(param.id)
  }, [param])

  const handleproductsByCategoryCall = () => {
    apiService.get(`product/category/${param.id}`)
      .then((data: any) => {
        setProducts(data.data.data)
        setCategory(data.data.categoryname)
      })

      .catch(errr => console.log(errr))
  }

  return (
    <>
    <Navbar/>
      <p className="text-xl font-bold	m-5 mb-0">{products.length === 0 ? `${category} Products Not Available `: `All ${category} products`}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {products.map( (products:any) => (
          <Product
          key={products.id}
          name={products.name}
          image={products.image}
          price={products.price}
        />))}
      </div>
    </>
  )
}

export default Category