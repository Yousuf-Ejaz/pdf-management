import React, { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import "./Sample.css";
import Sidebar from "./Sidebar";
import Comments from "./Comments";

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
    <div className="Example w-screen">
      <header className="flex justify-between items-center">
        <button onClick={closeShareBar} data={data}>Share</button>
        <div className="uppercase leading-loose font-bold">PDF Viewer</div>
        <button onClick={closeComments} data={data} >Comments</button>
      </header>
      {showShareBar && <Sidebar closeHandler={closeShareBar} data={data} />}
      {showComments && <Comments closeHandler={closeComments} data={data} />}

      <div className="Example__container">

        <div className="Example__container__document">
          <Document
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {Array.from( new Array( numPages ), ( el, index ) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ) )}
          </Document>
        </div>
      </div>

    </div>
  );
}
