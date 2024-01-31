// PDFViewer.js
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Import your PDF file from the public folder
import pdfFile from  '..//../public/tour.pdf'

const PDFViewer = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

  const totalNumPages = 3; // Update this with the total number of pages in your PDF
  const [scale, setScale] = useState(.5); // Set your desired initial scale here

  return (
       <> 
    <div className='flex justify-center'>
      
      <Document file={pdfFile} onLoadSuccess={({ numPages }) => console.log(`Total pages: ${numPages}`)}>
        {Array.from(new Array(totalNumPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={scale} />
        ))}
      </Document>
    </div> </>
  );
};

export default PDFViewer;
