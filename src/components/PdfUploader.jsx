import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const PdfUploader = ({onFileUpload}) => {
  const [selectedFile, setSelectedFile] = useState( null );
 const navigate = useNavigate();

  const handleFileChange = ( event ) => {
    const file = event.target.files[0];
    setSelectedFile( file );
  };

  const handleUpload = () => {
    // Logic to handle the file upload goes here
    if ( selectedFile ) {
      // Perform upload operation
      console.log( 'Uploading file:', selectedFile );
       onFileUpload(selectedFile);
       navigate("/view");
    
    } else {
      console.log( 'No file selected' );
    }
  };

  const handleView = () => {
    if (selectedFile) {
      // Redirect to the view route with the file ID or any other necessary information
      navigate(`/view/${selectedFile.name}`);
    }
  };

  return (
    <div className="pdf-uploader">

      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="pdf-input"
      />
      <label htmlFor="pdf-input" className="upload-button">
        <div
          className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center  border-2 border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-300 hover:text-white hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition py-3 px-4 cursor-pointer ml-2 mb-2"

        >

          Select PDF
        </div>
      </label>
      <button onClick={handleUpload} disabled={!selectedFile} className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center  border-2 border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-300 hover:text-white hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition py-3 px-4 cursor-pointer ml-2 mb-2">
        Upload
      </button>
      <button onClick={handleView} disabled={!selectedFile} className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center  border-2 border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-300 hover:text-white hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition py-3 px-4 cursor-pointer ml-2 mb-2">
        View
      </button>
    </div>
  );
};

export default PdfUploader;
