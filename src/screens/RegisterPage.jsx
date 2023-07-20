import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function RegisterPage () {

  
  const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [confirmpassword, setConfirmpassword] = useState("");
	const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    console.log(email, confirmpassword, password);
  }, [email, password, confirmpassword]);



	const submitHandler = async (e) => {
    e.preventDefault();
    
       
    setLoading(true);
		if ( !name || !email || !confirmpassword || !password) {
			toast.error("Please fill all the fields"	);
			setLoading(false);
			return;
		}
		if (confirmpassword !== password) {
			toast.error("Passwords do not match");
			return;
		}
	
			try {
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.post(
				"api/user/register",
				{ name, email, password},
				config
			);
      toast.success("Registration Successful")
			

			localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
			
			navigate("/");
		} catch (error) {
			console.error(error);
      toast.error(error.response.data.message);
      setLoading(false);
		
		
		
		}
	};
  return (
    <main className="flex justify-center items-center bg-green-50 h-screen ">
      <div className="w-3/5 max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign up
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Already have an account? <a
                className="text-green-600 decoration-2 hover:underline font-medium"
                href="../examples/html/signin.html"
              >
                Sign in here
              </a>
            </p>
          </div>
          <div className="mt-5">

            {/* Form */}
            <form onSubmit={submitHandler}>
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="name"
                      id="name"
                      name="name"
                      className="py-3 px-4 block w-full focus:outline-none border border-gray-200 rounded-md text-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      required=""
                      aria-describedby="name-error"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
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
                    Please include a name
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-3 px-4 block w-full focus:outline-none border border-gray-200 rounded-md text-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      required=""
                      aria-describedby="email-error"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
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
                  <label
                    htmlFor="password"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="py-3 px-4 block w-full focus:outline-none border border-gray-200 rounded-md text-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      required=""
                      aria-describedby="password-error"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirm-password"
                      name="confirm-password"
                      className="py-3 px-4 block w-full focus:outline-none border border-gray-200 rounded-md text-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      required=""
                      aria-describedby="confirm-password-error"
                      value={confirmpassword}
                      onChange={(e) => setConfirmpassword(e.target.value)}
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
                    id="confirm-password-error"
                  >
                    Password does not match the password
                  </p>
                </div>
                {/* End Form Group */}
              
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  disabled={loading}
                >
                  Sign up
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
export default RegisterPage;