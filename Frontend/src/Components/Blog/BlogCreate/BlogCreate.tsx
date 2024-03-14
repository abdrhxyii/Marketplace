import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import apiService from "../../../Services/apiService";

const BlogCreate = () => {

    const [input, setInput] = useState({
        image: '',
        title: '',
        description: ''
    })

    const handleFileChanges = (event: any) => {
      setInput((prevState) => ({
        ...prevState,
        image: event.target.files[0]
      }))
    }

    const handleInputChanges = (event: any) => {
        const {name, value} = event.target
        setInput((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        try{
          if (!input.image){
            toast.error("Please, select a image")
          } else {
            const formData = new FormData()
            formData.append("image", input.image)
            formData.append("title", input.title)
            formData.append("description", input.description)
            const data = await apiService.imagePost(`blog/create/${localStorage.getItem('id')}`, formData)
            toast.success(data?.data?.message)
            console.log(data)
            setInput({
              image:'',
              title: '',
              description: ''
            })
          }
        } catch(error){
            toast.error("Error occurred while creating the blog")
            console.log(error)
        }
    }


  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="sm:w-full sm:max-w-md relative top-neg-150px">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a new blog post
          </h2>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
              <input
                type="file"
                name="image"
                onChange={handleFileChanges}
                required
              />
            </div>

            <div>
              <input
                name="title"
                type="text"
                required
                onChange={handleInputChanges}
                value={input.title}
                className="appearance-none rounded-md w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline-indigo focus:border-indigo-500"
                placeholder="Enter title"
              />
            </div>

            <div>
              <input
                name="description"
                type="text"
                required
                onChange={handleInputChanges}
                value={input.description}
                className="appearance-none rounded-md w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline-indigo focus:border-indigo-500"
                placeholder="Enter description"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BlogCreate