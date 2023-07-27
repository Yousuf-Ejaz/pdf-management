import Comments from "./Comments";
import Sample from "./Sample";
import Sidebar from "./Sidebar";
import SharePDFNavbar from "./sharePDFNavbar";

function SharePDF({pdfUrl, data}) {
  return (
    <div className="flex flex-col h-screen ">
      <SharePDFNavbar/>
      <div className="flex justify-between grow">
        <Sidebar data={data}/>
      <Sample url={pdfUrl} data={data} />
        <Comments data={data}/>
      </div>
    </div>
  )
}
export default SharePDF