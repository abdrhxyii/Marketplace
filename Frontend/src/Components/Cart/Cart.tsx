import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar/Navbar';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state:any) => state.cart.items);
  // const dispatch = useDispatch();

  // const [cartItems, setCartItems] = useState([
  //   { id: 1, name: 'Product 1', price: 10, quantity: 1 },
  //   { id: 2, name: 'Product 2', price: 15, quantity: 2 },
  // ]);

  // const removeFromCart = (itemId: any) => {
  //   setCartItems(cartItems.filter(item => item.id !== itemId));
  // };

  return (
    <>
    <Navbar/>
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.map((item: any) => (
        <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-2">
          <div className="flex items-center">
            <img src={`http://localhost:4000/images/${item.image}`} alt="Product" className="w-12 h-12 object-cover mr-4" />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-500">${item.price}</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="mr-4">Quantity: {item.quantity}</p>
            <button>
              <FontAwesomeIcon icon={faTrash} className="text-red-500 cursor-pointer" />
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Cart;
