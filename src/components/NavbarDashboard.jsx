import { Link } from "react-router-dom";

function NavbarDashboard() {
  return (
    <div className="py-2">

    <div className="rounded-3xl  border border-green-800 bg-green-100 p-2 px-2 mx-2  py-3 flex justify-between">
      <div className="font-bold text-green-950 items-center my-2 ml-2 uppercase text-lg ">Dashboard</div>
      <div className="flex gap-2">

      <Link className="border rounded-xl border-green-300 bg-green-300 px-3 cursor-pointer py-1" to="/"> Back</Link>

      <a
          className="flex items-center gap-x-2 font-medium text-green-950 sm:border-l sm:border-green-900 sm:my-2 sm:mr-2 sm:pl-6"
          href="#"
          >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
            >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
          {JSON.parse(localStorage.getItem("userInfo")).email}
        </a>
            </div>
    </div>
    </div>
  )
}
export default NavbarDashboard