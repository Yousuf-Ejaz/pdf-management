import { Link } from "react-router-dom";

function SharePDFNavbar () {
  return (
    <header className="flex justify-between items-center bg-green-100 text-green-950 w-full p-5 border-2 border-b-green-200">

      <div className="uppercase tracking-wide font-medium text-xl">Share PDF</div>
      <Link className="border rounded-xl border-green-300 bg-green-300 px-3 cursor-pointer" to="/dashboard"> Back</Link>

    </header>
  );
}
export default SharePDFNavbar;