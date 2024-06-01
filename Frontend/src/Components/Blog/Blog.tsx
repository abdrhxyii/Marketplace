// import { useEffect, useState } from 'react';
// import apiService from '../../Services/apiService';
// import moment from 'moment';
import BlogCard from './BlogCard';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router';

const Blog = () => {
  const route = useNavigate()
  // const [blog, setBlog] = useState([]);
  // const DateFormterring = (data:any) => {
  //   return moment(data).format('MMMM D, YYYY');
  // };

  // const backendUrl = 'http://localhost:4001/';

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await apiService.get('blog/blogs');
  //       const blogs = result.data.data;
  //       setBlog(blogs);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);


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
          <BlogCard
            date="Oct 11, 2023"
            authorImg="https://randomuser.me/api/portraits/men/2.jpg"
            authorName="John"
            postTitle="The Future of Artificial Intelligence: Trends and Challenges"
            onClick={() => route('/blogsss')}
            imageUrl="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
            imageAlt=""
          />
          <BlogCard
            date="Sept 25, 2023"
            authorImg="https://randomuser.me/api/portraits/women/2.jpg"
            authorName="Jane"
            postTitle="The Rise of Blockchain Technology: A Comprehensive Guide"
            imageUrl="https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxibG9jayUyMGNoYWlufGVufDB8MHx8fDE3MTI3NTMxNjd8MA&ixlib=rb-4.0.3&q=80&w=1080"
            imageAlt=""
          />
          <BlogCard
            date="Sept 24, 2023"
            authorImg="https://randomuser.me/api/portraits/men/4.jpg"
            authorName="Michael"
            postTitle="How Quantum Computing Will Revolutionize Data Security"
            imageUrl="https://images.unsplash.com/photo-1666112835156-c65bb806ac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNXx8cXVhbnR1bSUyMGNvbXB1dGluZ3xlbnwwfDB8fHwxNzEyNzUzMTk2fDA&ixlib=rb-4.0.3&q=80&w=1080"
            imageAlt=""
          />
          <BlogCard
            date="Oct 11, 2023"
            authorImg="https://randomuser.me/api/portraits/men/2.jpg"
            authorName="John"
            postTitle="The Future of Artificial Intelligence: Trends and Challenges"
            imageUrl="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
            imageAlt=""
          />
          <BlogCard
            date="Sept 25, 2023"
            authorImg="https://randomuser.me/api/portraits/women/2.jpg"
            authorName="Jane"
            postTitle="The Rise of Blockchain Technology: A Comprehensive Guide"
            imageUrl="https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxibG9jayUyMGNoYWlufGVufDB8MHx8fDE3MTI3NTMxNjd8MA&ixlib=rb-4.0.3&q=80&w=1080"
            imageAlt=""
          />
          <BlogCard
            date="Sept 24, 2023"
            authorImg="https://randomuser.me/api/portraits/men/4.jpg"
            authorName="Michael"
            postTitle="How Quantum Computing Will Revolutionize Data Security"
            imageUrl="https://images.unsplash.com/photo-1666112835156-c65bb806ac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNXx8cXVhbnR1bSUyMGNvbXB1dGluZ3xlbnwwfDB8fHwxNzEyNzUzMTk2fDA&ixlib=rb-4.0.3&q=80&w=1080"
            imageAlt=""
          />
          <BlogCard
            date="Oct 11, 2023"
            authorImg="https://randomuser.me/api/portraits/men/2.jpg"
            authorName="John"
            postTitle="The Future of Artificial Intelligence: Trends and Challenges"
            imageUrl="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
            imageAlt=""
          />
          <BlogCard
            date="Sept 25, 2023"
            authorImg="https://randomuser.me/api/portraits/women/2.jpg"
            authorName="Jane"
            postTitle="The Rise of Blockchain Technology: A Comprehensive Guide"
            imageUrl="https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxibG9jayUyMGNoYWlufGVufDB8MHx8fDE3MTI3NTMxNjd8MA&ixlib=rb-4.0.3&q=80&w=1080"
            imageAlt=""
          />
          <BlogCard
            date="Sept 24, 2023"
            authorImg="https://randomuser.me/api/portraits/men/4.jpg"
            authorName="Michael"
            postTitle="How Quantum Computing Will Revolutionize Data Security"
            imageUrl="https://images.unsplash.com/photo-1666112835156-c65bb806ac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNXx8cXVhbnR1bSUyMGNvbXB1dGluZ3xlbnwwfDB8fHwxNzEyNzUzMTk2fDA&ixlib=rb-4.0.3&q=80&w=1080"
            imageAlt=""
          />
                    <BlogCard
            date="Oct 11, 2023"
            authorImg="https://randomuser.me/api/portraits/men/2.jpg"
            authorName="John"
            postTitle="The Future of Artificial Intelligence: Trends and Challenges"
            imageUrl="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
            imageAlt=""
          />
          <BlogCard
            date="Sept 25, 2023"
            authorImg="https://randomuser.me/api/portraits/women/2.jpg"
            authorName="Jane"
            postTitle="The Rise of Blockchain Technology: A Comprehensive Guide"
            imageUrl="https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxibG9jayUyMGNoYWlufGVufDB8MHx8fDE3MTI3NTMxNjd8MA&ixlib=rb-4.0.3&q=80&w=1080"
            imageAlt=""
          />
          <BlogCard
            date="Sept 24, 2023"
            authorImg="https://randomuser.me/api/portraits/men/4.jpg"
            authorName="Michael"
            postTitle="How Quantum Computing Will Revolutionize Data Security"
            imageUrl="https://images.unsplash.com/photo-1666112835156-c65bb806ac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNXx8cXVhbnR1bSUyMGNvbXB1dGluZ3xlbnwwfDB8fHwxNzEyNzUzMTk2fDA&ixlib=rb-4.0.3&q=80&w=1080"
            imageAlt=""
          />
          <BlogCard
            date="Oct 11, 2023"
            authorImg="https://randomuser.me/api/portraits/men/2.jpg"
            authorName="John"
            postTitle="The Future of Artificial Intelligence: Trends and Challenges"
            imageUrl="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
            imageAlt=""
          />
          <BlogCard
            date="Sept 25, 2023"
            authorImg="https://randomuser.me/api/portraits/women/2.jpg"
            authorName="Jane"
            postTitle="The Rise of Blockchain Technology: A Comprehensive Guide"
            imageUrl="https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxibG9jayUyMGNoYWlufGVufDB8MHx8fDE3MTI3NTMxNjd8MA&ixlib=rb-4.0.3&q=80&w=1080"
            imageAlt=""
          />
          <BlogCard
            date="Sept 24, 2023"
            authorImg="https://randomuser.me/api/portraits/men/4.jpg"
            authorName="Michael"
            postTitle="How Quantum Computing Will Revolutionize Data Security"
            imageUrl="https://images.unsplash.com/photo-1666112835156-c65bb806ac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNXx8cXVhbnR1bSUyMGNvbXB1dGluZ3xlbnwwfDB8fHwxNzEyNzUzMTk2fDA&ixlib=rb-4.0.3&q=80&w=1080"
            imageAlt=""
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Blog;
