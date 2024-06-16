import apiService from '../Services/apiService';
import { useState, useEffect } from 'react';


const ProductForm = () => {
  const [category, setCategory] = useState([]);

  const [categoryfield, setCategoryfield] = useState({
    image: null,
    name: '',
    description: '',
    price: '',
    category: ''
  })

  const handleCatgory = () => {
    apiService.get('category')
    .then((data: any) => {
      setCategory(data.data)
      console.log(data.data, "data")
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    handleCatgory()
  }, [])

  const handleChange = (e: any) => {
    const {name, value, files} = e.target
    if (name === 'image'){
      setCategoryfield({
        ...categoryfield,
        [name]: files[0] || null
      })
    } else {
      setCategoryfield({
        ...categoryfield,
        [name]: value
      })
    }
  }

  const handleFormSubmission = (e: any) => {
    e.preventDefault();
    const formData = new FormData()
    try{
      if (categoryfield.image) {
        formData.append('image', categoryfield.image);
      }      
      formData.append('name', categoryfield.name);
      formData.append('description', categoryfield.description);
      formData.append('price', categoryfield.price);
      formData.append('categoryId', categoryfield.category);

      apiService.imagePost('product', formData)
      .then((data: any) => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })

    }catch(error){

    }
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
    <form className="space-y-4" onSubmit={handleFormSubmission}>
      <div>
        <label className="block text-sm font-medium text-gray-700">Image</label>
        <input onChange={handleChange} type="file" name='image' className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input onChange={handleChange} type="text" value={categoryfield.name} name='name' className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea onChange={handleChange} name='description' value={categoryfield.description} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input onChange={handleChange} type="number" name='price' value={categoryfield.price} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label> 
        <select onChange={handleChange} name='category' className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        {
          category.map((cat: any) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))
        }
        <option value="create-category">Create Category</option>
        </select>
      </div>
      
      <div>
        <button type="submit" className="w-full py-2 px-4 bg-black text-white font-medium rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Create
        </button>
      </div>
    </form>
  </div>
  );
};

export default ProductForm;
