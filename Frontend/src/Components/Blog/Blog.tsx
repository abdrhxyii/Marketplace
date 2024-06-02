import { useEffect, useState } from 'react';
import apiService from '../../Services/apiService';
import moment from 'moment';
import BlogCard from './BlogCard';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router';

const Blog = () => {
  const route = useNavigate()
  const [blog, setBlog] = useState([]);
  const DateFormterring = (data:any) => {
    return moment(data).format('MMMM D, YYYY');
  };

  useEffect(() => {
    handlegetBlogCalls()
  }, []);

  const handlegetBlogCalls = () => {
    apiService.get('blog')
    .then((data: any) => {
      setBlog(data.data.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const handleRoute = (id: number) => {
    route(`/blogdetails/${id}`)
  }


  return (
    <>
    <Navbar/>
      <div className="w-full dark:bg-white-800 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black-900 sm:text-4xl">From The Blog</h2>
          <p className="mt-2 text-lg leading-8 text-black-600">
            Dive into the latest in technology with our insightful blog posts.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          { blog.map((blog: any) => (
            <BlogCard
              key={blog.id}
              date={DateFormterring(blog.createdAt)}
              authorImg="https://randomuser.me/api/portraits/women/2.jpg"
              authorName="Admin & Team"
              postTitle={blog.title}
              onClick={() => handleRoute(blog.id)}
              imageUrl={`http://localhost:4000/images/${blog.image}`}
            />
          ))
          }
        </div>
      </div>
    </div>
    </>
  );
};

export default Blog;
