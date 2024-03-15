import {useEffect, useState} from 'react';
import apiService from '../../Services/apiService';
import moment from 'moment';

const Blog = () => {
  const [blog, setBlog] = useState([])
  const DateFormterring = (data: any) => {
    return moment(data).format('MMMM D, YYYY')
  }

  const backendUrl = 'http://localhost:4001/'

  useEffect(() => {
    const fetchData = async () => {
      try{
        const result = await apiService.get('blog/blogs')
        const blogs = result.data.data
        // const blogsArrya = blogs.map((blog: any) => blog.image)
        // console.log(blogsArrya, "blogsArrya")
        // const imageUrl = backendUrl + blogs.image
        // console.log(imageUrl, "imageUrl")

        console.log(blogs, "blogs data")
        setBlog(blogs)
      } catch(error){
        console.log(error)
      }
    }
    fetchData();
  }, [])

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">Latest Blog Posts</h2>
        <div className="space-y-6">
          {blog.map((post: any, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <img src={post.image} className="w-full sm:w-36 h-36 object-cover rounded-lg mb-4 sm:mb-0" />
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-2">{post.description.length > 100 ? (post.description).slice(0,100) + '...' : post.description}</p>
                <div className="text-gray-500 text-sm">{DateFormterring(post.createdAt)}</div>
                <a href="#" className="text-blue-500 hover:text-blue-700 mt-2 inline-block">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
