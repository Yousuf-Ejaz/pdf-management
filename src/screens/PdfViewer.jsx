import React, { useEffect, useState } from 'react';
import PdfRenderer from "../components/PdfRenderer";
import { useParams } from "react-router-dom";
import axios from "axios";
import PDFNew from "../components/PDFNew";
import Sample from "../components/Sample";

const PdfViewer = () => {
  const params = useParams();
  const user = JSON.parse( localStorage.getItem( "userInfo" ) );
  const fileId = params.id;
  const [pdfUrl, setPdfUrl] = useState( null );
  const [data, setData] = useState( null );

  useEffect(() => {
    if(localStorage.getItem("userInfo") === null){
      navigate("/login");
    }
  }, []);
  useEffect( () => {
    const getPDF = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        const response = await axios.post( `api/files/pdf/${fileId}/view`, {}, config );
        setData( response.data );
        setPdfUrl( response.data.file.url );
      }
      catch ( error ) {
        console.log( error );
      }
    };

    getPDF();
  }, [] );

  return (
    <div className=" bg-gray-100">

      {pdfUrl && <Sample url={pdfUrl} data={data} />}



    </div>
  );
};

export default PdfViewer;
