import React, { useState } from 'react';
import styles from './PDFViewer.module.css';
import res1 from "./Bhudeo's Resume.pdf"
import res2 from "./JayDeep_s_CV__19_.pdf"
import res3 from "./RishavTarway_-Resume.pdf"
import { useNavigate } from 'react-router-dom';

const PDFViewer = () => {
  const [pdfFiles, setPdfFiles] = useState([res1, res2, res3]);
  const navigate = useNavigate();


  return (
    <div className={styles.container}>
      {pdfFiles.map((pdf, index) => (
        <div key={index} className={styles.pdfContainer}>
            <embed src={pdf} type="application/pdf" className={styles.pdf} height={"100%"}/>
            <button className={styles.choose} onClick={()=>navigate("/create-new-resume")}>Choose Templete</button>
        </div>
      ))}
    </div>
  );
};

export default PDFViewer;
