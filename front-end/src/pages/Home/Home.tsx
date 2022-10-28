import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "./Home.scss";

const Home: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [name, setName] = useState("");

  const onDocumentLoadSuccess = () => {
    setPageNumber(1);
  };

  return (
    <div className="home-wrapper">
      <div className="key">
        <button name="google.com" onClick={(e: any) => setName(e.target.name)}>
          Google
        </button>
        <button name="facebook.com" onClick={(e: any) => setName(e.target.name)}>
          Facebook
        </button>
        <button name="youtube.com" onClick={(e: any) => setName(e.target.name)}>
          Youtube
        </button>
      </div>
      <div className="pdf">
        {name && (
          <Document
            file={{ url: `pdf/${name}` }}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        )}
      </div>
    </div>
  );
};

export default Home;
