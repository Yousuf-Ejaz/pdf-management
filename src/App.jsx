import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./screens/Homepage";
import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/RegisterPage";
import DashboardPage from "./screens/DashboardPage";
import { useState } from "react";
import PdfRenderer from "./components/PdfRenderer";

function App() {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
  };
  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<Homepage handleFileUpload={handleFileUpload} />} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage/>} />
              <Route path="/dashboard" element={<DashboardPage/>} />
              <Route path="/view" element={<PdfRenderer uploadedFile={uploadedFile}  />} />
          </Routes>
      </Router>
    </>
  )
}
export default App