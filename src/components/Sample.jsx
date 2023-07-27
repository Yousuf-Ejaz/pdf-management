import React, { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import "./Sample.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "cmaps/",
  standardFontDataUrl: "standard_fonts/"
};

export default function Sample ( { url, data } ) {
  const [numPages, setNumPages] = useState();
  const [showShareBar, setShowShareBar] = useState( false );
  const [showComments, setShowComments] = useState( false );

  

  function onDocumentLoadSuccess ( { numPages: nextNumPages } ) {
    setNumPages( nextNumPages );
  }

  const closeShareBar = () => {
    setShowShareBar( !showShareBar );
  };

  const closeComments = () => {
    setShowComments( !showComments );
  };

  return (
   

        <div className="Example__container__document grow">
          <Document
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            className="h-[40rem] overflow-y-scroll "
          >
            {Array.from( new Array( numPages ), ( el, index ) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ) )}
          </Document>
        </div>
      );
}

