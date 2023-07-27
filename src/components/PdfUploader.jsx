import axios from "axios";
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { PDFState } from "../context/store";
import FileAdd from "./icons/FileAdd";

const PdfUploader = ({onFileUpload}) => {
  
  const [loading, setLoading] = useState(false);
 const navigate = useNavigate();

 const {
		user,
	} = PDFState();
  const handleFileChange = async ( event ) => {
    const file = event.target.files[0];
   
    setLoading( true );
    
    onFileUpload(file)
     const formData = new FormData();
    formData.append('pdf', file);
    console.log(formData, file)
    try {
      const config = {
				headers: {
					Authorization: `Bearer ${user.token}`,
          'Content-Type': 'multipart/form-data'
				},
			};

      const { data } = await axios.post(
        "/api/files/pdf/upload",formData,
         config
      );
      console.log(data)
      

      toast.success( "Upload Successfull" );
      setLoading( false );
    
      navigate( "/dashboard" );
    } catch ( error ) {
      console.error( error );
      toast.error( "Some error occured  " );
      setLoading( false );

    }
  };

  
  

   
  



  return (
    <div className="pdf-uploader">

      <input
        type="file"
        accept="file"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="pdf-input"
      />
      <label htmlFor="pdf-input" className="upload-button">
        <div
          className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center  bg-white shadow-sm text-lg rounded-md text-green-950 font-bold tracking-wide  focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition py-4 px-7 cursor-pointer "
         

        >
          <FileAdd/>

          CHOOSE FILE
        </div>
      </label>
      
    
    </div>
  );
};

export default PdfUploader;
