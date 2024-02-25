import { useNavigate } from "react-router";
import apiService from "../../Services/apiService";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const Signup = () => {
  const route = useNavigate();
  const [input, setInput] = useState<{ email: string, password: string}>({
    email: '',
    password: ''
  })

  const fieldtriggered = (e: any) => {
    const { name, value } = e.target;
    
    setInput({
      ...input,
      [name]: value
    });
  }

  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault()
    let inputData = {
      email: input.email,
      password: input.password
    }
    apiService.post('auth/register', inputData)
    .then((data: any) => {
      console.log(data)
      toast.success(`${data.data.message}, Please login to continue`)
      // if (data.status === 200) {
      //   route('/auth/login')
      // }
    })
    .catch(error => {
      toast.error(error.response.data.error)
    })
  }

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={registerUser}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={fieldtriggered}
                  value={input.email}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={input.password}
                  onChange={fieldtriggered}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>

            <div>
              <button
              type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <a onClick={() => route('/auth/login')} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">
              Sign in to your account
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup