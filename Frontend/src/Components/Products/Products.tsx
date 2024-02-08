import Product from '../ProductCard/Product';
import './Products.css'

const Products = () => {
    const renderproducts = () => {
      const products = [];
      for (let i = 0; i < 40; i++){
          products.push(<Product key={i}/>)
      }
      return products;
    }

  return (
    <div>
      <div className='products'>
        {renderproducts()}
      </div>
    </div>
  )
}

export default Products