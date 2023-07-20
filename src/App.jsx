import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/RegisterPage";
import DashboardPage from "./screens/DashboardPage";
import { useState } from "react";
import PdfRenderer from "./components/PdfRenderer";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import PDFProvider from "./context/store";
import PdfViewer from "./screens/PdfViewer";
import Homepage from "./screens/HomePage";

function App() {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
  };
  return (
    <>
      <Router>
        <PDFProvider>

          <Routes>
              <Route path="/" element={<Homepage handleFileUpload={handleFileUpload} />} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage/>} />
              <Route path="/dashboard" element={<DashboardPage/>} />
              <Route path="/:id" element={<PdfViewer />} />
          </Routes>
        </PDFProvider>
      </Router>
      <ToastContainer />
    </>
  )
}
export default App