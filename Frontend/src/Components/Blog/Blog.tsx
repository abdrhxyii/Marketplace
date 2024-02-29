import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding React Hooks",
      summary: "Dive deep into the world of React hooks and learn how they can make your code cleaner and more efficient.",
      date: "September 12, 2023",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "TailwindCSS: The Future of Styling?",
      summary: "Explore how TailwindCSS is changing the landscape of styling in web development for the better.",
      date: "October 05, 2023",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Why TypeScript is Essential in 2023",
      summary: "Learn about the benefits of TypeScript and why it's considered essential for modern web development.",
      date: "November 17, 2023",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">Latest Blog Posts</h2>
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <img src={post.imageUrl} alt={post.title} className="w-full sm:w-36 h-36 object-cover rounded-lg mb-4 sm:mb-0" />
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-2">{post.summary}</p>
                <div className="text-gray-500 text-sm">{post.date}</div>
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
