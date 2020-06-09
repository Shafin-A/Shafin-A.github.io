import React from 'react';
import NavBar from './NavBar';
import resumePDF from '../graphics/ShafinAhmedCV.pdf'

export class Resume extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <iframe
            src={resumePDF}
            frameBorder="0"
            scrolling="auto"
            height="775"
            width="100%"
        ></iframe>
      </div>
    );
  }
}

export default Resume;
