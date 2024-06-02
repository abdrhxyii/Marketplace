import { useState } from 'react';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    description: '',
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
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Blog Image URL"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Blog Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            placeholder="Blog Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
