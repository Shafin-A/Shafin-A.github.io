import React from 'react';
import resumePDF from '../graphics/ShafinAhmedCV.pdf'
import { Document, Page, pdfjs } from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';

export default function Resume() {
  	pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return (
    	<div>
			<Document file={resumePDF}>
				<Page pageNumber={1}/>
			</Document>
		</div>
    );
  }

