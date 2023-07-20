import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginPage () {
  const [email, setEmail] = useState( "" );
  const [password, setPassword] = useState( "" );
  const [loading, setLoading] = useState( false );
 


  const navigate = useNavigate();

  const submitHandler = async ( e ) => {
    e.preventDefault();
   
    setLoading( true );
    if ( email === "" || password === "" ) {
      toast.error( "Please Fill all the Feilds" );
      setLoading( false );
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      toast.success( "Login Successfull" );
      setLoading( false );
      localStorage.setItem( "userInfo", JSON.stringify( data ) );

      navigate( "/" );
    } catch ( error ) {
      console.error( error );
      toast.error( "Invalid Credentials" );
      setLoading( false );

    }
  };
  return (
    <main className=" flex justify-center items-center h-screen bg-green-50">
   
      <div className=" w-3/5 max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 flex  ">
        <div className="p-4 sm:p-7 grow">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign in
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Dont have an account yet? <Link
                className="text-green-600 decoration-2 hover:underline font-medium"
                to="/register"
              >
                Sign up here
              </Link>
            </p>
          </div>
          <div className="mt-5">


            {/* Form */}
            <form onSubmit={submitHandler}>
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 "
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-3 px-4 block w-full border focus:outline-none border-gray-200 rounded-md text-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-800 "
                      required=""
                      aria-describedby="email-error"
                      value={email}
                      onChange={( e ) => setEmail( e.target.value )}
                    />
                    <div className="hidden absolute inset-y-0 right-0  items-center pointer-events-none pr-3">
                      <svg
                        className="h-5 w-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                    Please include a valid email address so we can get back to you
                  </p>
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Password
                    </label>
                    <a
                      className="text-sm text-green-600 decoration-2 hover:underline font-medium"
                      href="../examples/html/recover-account.html"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="py-3 px-4 block w-full border focus:outline-none border-gray-200 rounded-md text-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      required=""
                      aria-describedby="password-error"
                      value={password}

                      onChange={( e ) => setPassword( e.target.value )}
                    />
                    <div className="hidden absolute inset-y-0 right-0  items-center pointer-events-none pr-3">
                      <svg
                        className="h-5 w-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="password-error"
                  >
                    8+ characters required
                  </p>
                </div>
                {/* End Form Group */}

                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"

                >
                  Sign in
                </button>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
      </div>
 

    </main>
  );
}
export default LoginPage;