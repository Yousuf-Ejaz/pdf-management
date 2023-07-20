import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

function PDFNew ( { url } ) {
  const pdfurl = "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf";

  return (
    // <div>
    //   <PDFViewer>

    //     <Document file={url}>
    //       <Page pageNumber={1} />
    //     </Document>
    //   </PDFViewer>
    // </div>
    <div className="flex justify-center items-center h-screen">
      <div className="w-3/4 shadow-lg">
        <Document file={url}>
          <Page pageNumber={1} className="m-auto" />
        </Document>
      </div>
    </div>
  );
}
export default PDFNew;