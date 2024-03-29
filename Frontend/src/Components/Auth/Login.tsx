import { useNavigate } from "react-router";
import { useState } from "react";
import '../../index.css';
import apiService from "../../Services/apiService";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const route = useNavigate();
  const [input, setInput] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const fieldtriggerred = (e: any) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    let body = {
      email: input.email,
      password: input.password
    }
    try{
      const data = await apiService.post('auth/login', body)
      localStorage.setItem('id', data.data.id)
      localStorage.setItem('authToken', data.data.Token)
      toast.success(data.data.message)
      setInput({
        email: '',
        password: ''
      })
    } catch(error:any){
      toast.error(error.response.data.message)
    }
  }

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="sm:w-full sm:max-w-md relative top-neg-150px">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              value={input.email}
              onChange={fieldtriggerred}
              className="appearance-none rounded-md w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline-indigo focus:border-indigo-500"
              placeholder="Email address"
            />
          </div>

          <div>
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={input.password}
              onChange={fieldtriggerred}
              className="appearance-none rounded-md w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline-indigo focus:border-indigo-500"
              placeholder="Password"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a
            onClick={() => {
              route("/auth/register");
            }}
            className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
