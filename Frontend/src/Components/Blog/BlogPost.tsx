import { useEffect, useState } from 'react';
import moment from 'moment';
import Navbar from '../Navbar/Navbar'
import apiService from '../../Services/apiService';
import { useParams } from 'react-router';

const BlogPost = () => {
    const param = useParams()
    const [comments, setComments] = useState([])
    const [input, setInput] = useState({
      first_name: '',
      last_name: '',
      comment_des: ''
    })

    const [blogdetails, setBlogdetails] = useState({
      image: '',
      description: '',
      createdAt: ''
    })

    const handleFieldTriggers = (e: any) => {
      const {name, value} = e.target
      setInput({
        ...input,
        [name]: value,
      });
    }

    const handleCommentSubmit = (e: any) => {
      e.preventDefault()
      const body = {
        first_name: input.first_name,
        last_name: input.last_name,
        comment_des: input.comment_des
      }
      apiService.post(`comment/${param.id}`, body)
      .then((data: any) => {
        console.log(data, "commented")
        if (data.status === 200){
          handleBlogDetailsCall(param.id)
        }
        setInput({
          first_name: '',
          last_name: '',
          comment_des: ''
        })
      })
      .catch((error) => console.log(error))
    }

    useEffect(() => {
      handleBlogDetailsCall(param.id)
    }, [])

      const handleBlogDetailsCall = (id:any) => {
        apiService.get(`blog/${id}`)
        .then((data: any) => {
          setBlogdetails(data.data)
          setComments(data.data.Comments)
        })
        .catch(error => console.log(error))
      }

      const DateFormterring = (data:any) => {
        return moment(data).format('MMMM D, YYYY');
      }; 

  return (
    <>
    <Navbar/>
    <div className='m-2.5 lg:m-14'>
        <div className='lg:w-full'>
        <img className='rounded-lg lg:w-full' src={`http://localhost:4000/images/${blogdetails.image}`} alt="" />
        </div>
        <div className='mt-5'>
            <p className='text-sm text-gray-500'>Written by Admin</p>
            <p className='text-sm text-gray-500'>{DateFormterring(blogdetails.createdAt)}</p>
        </div>
        <div className='mt-5'>
            <p>{blogdetails?.description}</p>
        </div>
        <div className='mt-5'>
      <h5 className='text-lg font-extrabold'>Comments</h5>
      <div className='mt-4 space-y-4'>
        {comments.map((comment: any) => (
          <div key={comment.id} className='bg-white p-4 shadow rounded-lg'>
            <div className='flex justify-between items-center mb-2'>
              <h6 className='text-md font-semibold'>{comment.first_name + ' ' + comment.last_name}</h6>
              <span className='text-sm text-gray-500'>
                {DateFormterring(comment.createdAt)}
              </span>
            </div>
            <p className='text-gray-700'>{comment.comment_des}</p>
          </div>
        ))}
      </div>
    </div>
    <div className='mt-5'>
      <h5 className='text-lg font-extrabold'>Add Comment</h5>
        <div className='mt-4 space-y-4 bg-white p-4 shadow rounded-lg'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <input
              type='text'
              name='first_name'
              placeholder='First Name'
              value={input.first_name}
              onChange={handleFieldTriggers}
              className='w-full p-2 border border-gray-300 rounded-lg'
              />
            <input
              type='text'
              name='last_name'
              placeholder='Last Name'
              value={input.last_name}
              onChange={handleFieldTriggers}
              className='w-full p-2 border border-gray-300 rounded-lg'
              />
            </div>
              <textarea
                name='comment_des'
                placeholder='Comment'
                value={input.comment_des}
                onChange={handleFieldTriggers}
                className='w-full p-2 border border-gray-300 rounded-lg'   
                >
            </textarea>
                <button onClick={handleCommentSubmit} className='px-4 py-2 bg-black text-white rounded-lg'
                  >Add Comment
                </button>
              </div>
          </div>
    </div>
    </>
  )
}

export default BlogPost