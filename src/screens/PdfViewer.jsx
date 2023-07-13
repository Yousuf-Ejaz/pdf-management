import React from 'react';
import PdfRenderer from "../components/PdfRenderer";

const PdfViewer = ({ match }) => {
  const { fileName } = match.params;
   const pdfUrl = 'https://example.com/path/to/pdf.pdf';

  return (
    <div>
      <h3>PDF Viewer</h3>
      <p>File: {fileName}</p>
      <PdfRenderer pdfUrl={pdfUrl} />
    </div>
  );
};

export default PdfViewer;
