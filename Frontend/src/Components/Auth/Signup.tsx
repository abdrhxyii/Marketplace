import { useNavigate } from "react-router";
import apiService from "../../Services/apiService";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Navbar from "../Navbar/Navbar";
import '../../index.css';

const Signup = () => {
  const route = useNavigate();
  const [input, setInput] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const fieldtriggered = (e: any) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault();
    let inputData = {
      email: input.email,
      password: input.password,
    };
    try {
      const response = await apiService.post("auth/register", inputData);
      console.log(response);
      toast.success(`${response.data.message}, Please login to continue`);
      setInput({
        email: '',
        password: ''
      })
    } catch (error: any) {
      toast.error(error.response.data.message)
      setInput({
        email: '',
        password: ''
      })
    }
  };

  return (
    <div>
      <Navbar/>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="sm:w-full sm:max-w-md relative top-neg-150px">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>

          <form className="mt-8 space-y-6" onSubmit={registerUser}>
            <div>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={fieldtriggered}
                value={input.email}
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
                onChange={fieldtriggered}
                className="appearance-none rounded-md w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline-indigo focus:border-indigo-500"
                placeholder="Password"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              onClick={() => route("/login")}
              className="font-semibold text-black cursor-pointer"
            >
              Sign in to your account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
