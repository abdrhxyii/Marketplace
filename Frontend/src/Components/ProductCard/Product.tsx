import { useNavigate } from "react-router";

const Product = ({ name, image, price }: any) => {
  const route = useNavigate()
  const title = 'Elevate your morning ritual with the BrewMaster Deluxe Coffee Make';
  const limitedTitle = title.length > 35 ? `${title.slice(0, 35)}...` : title;

  const handleroute = () => {
    route('product')
  }

  return (
    <div className="m-2 max-w-52 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="m-3">
      <img src={image} alt={name} className="w-full h-56 object-cover object-center rounded-2xl" />
      </div>
      <div className="px-4 py-4">
        <h3 className="font-semibold text-sm">{name}</h3>
        <p className="font-semibold text-sm text-gray-800">{limitedTitle}</p>
        <p className="font-semibold text-sm">${price}</p>
        <div className="mt-2.5" onClick={handleroute}>
          <button className="bg-black rounded-md text-white text-sm px-3 font-medium w-full h-9 inline-flex justify-center items-center">View</button>
        </div>
      </div>
    </div>
  );
};

export default Product;