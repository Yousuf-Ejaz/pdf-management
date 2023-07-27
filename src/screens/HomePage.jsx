import { useEffect } from "react";
import Navbar from "../components/Navbar";
import PdfUploader from "../components/PdfUploader";
import PDFsvg from "../components/icons/PDFsvg";
import SendIcon from "../components/icons/SendIcon";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Homepage ( { handleFileUpload } ) {
 useAuth()
  return (
    <div className="h-screen flex flex-col ">
      <Navbar />


      {/* ========== MAIN CONTENT ========== */}
      <main id="content" role="main" className=" bg-white grow text-center py-10 px-4 sm:px-6 lg:px-8  flex flex-col  justify-center" >
        <div className="grow mx-6  rounded-lg p-6 items-center flex flex-col justify-between  gap-4 ">

          <div className="flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <SendIcon />
            <h1 className="block text-xl font-semibold text-green-950 sm:text-4xl">
              Share Document
            </h1>
          </div>

          <div className="p-5 w-full rounded-md flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3 bg-green-500 h-4/5">
            <div className="grow border-2 border-green-100 rounded-md p-5 border-dotted gap-3 bg-black bg-opacity-10 h-full flex flex-col items-center justify-center" >
<PDFsvg/>
              <PdfUploader onFileUpload={handleFileUpload} />
            </div>


          </div>
        </div>

      </main>
      {/* ========== END MAIN CONTENT ========== */}


    </div>
  );
}
export default Homepage;