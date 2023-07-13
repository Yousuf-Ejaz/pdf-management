import Navbar from "../components/Navbar";
import PdfUploader from "../components/PdfUploader";

function Homepage({handleFileUpload}) {
  return (
    <>
    <Navbar/>
   

  {/* ========== MAIN CONTENT ========== */}
  <main id="content" role="main" >
    <div className="text-center py-10 px-4 sm:px-6 lg:px-8 bg-slate-800 h-screen flex flex-col justify-center">
      <h1 className="block text-2xl font-bold text-white sm:text-4xl">
       Upload Your PDF here
      </h1>
      
      <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
        
        <PdfUploader onFileUpload={handleFileUpload}/>
      </div>
    </div>
  </main>
  {/* ========== END MAIN CONTENT ========== */}
  

    </>
  )
}
export default Homepage