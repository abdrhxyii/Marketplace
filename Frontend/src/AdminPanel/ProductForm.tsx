import React, { useState } from 'react';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    description: '',
    price: '',
    category: '',
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Product Image URL"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            placeholder="Product Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Product Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <select name="category" onChange={handleChange} value={formData.category}>
            <option value="">Select Category</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            <option value="Category 3">Category 3</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
