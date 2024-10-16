// components/ResumeModal.js
import React, { useState } from 'react';
import { FaFileUpload, FaFileAlt, FaTimes } from 'react-icons/fa'; // Import FaTimes
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './ResumeModal.module.css';
import axios from 'axios';

const ResumeModal = ({ onClose, userType }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  async function uploadFile(e) {
    // setSelectedFile(e.target.files[0]);
    const file = selectedFile
    if (file) {
        const formData = new FormData();
        formData.append('file', file)
        scanPdfForSpecificData(formData)
        formData.append('folder', "resume")
        formData.append("upload_preset", process.env.REACT_APP_API_PRESET)
        try {
            const data = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_API_NAME}/auto/upload`, formData)
            currentUser(data?.data.secure_url)
            navigate("/searchjobs")
            // console.log(data?.data.secure_url)
        } catch (err) {
            console.log(err)
        }
    }
}
const scanPdfForSpecificData = async (formData) => {
  try {
    const response = await axios.post(
        'https://app.nanonets.com/api/v2/OCR/Model/7065502f-6edf-44fa-a463-9249b80e4472/LabelFile/',
        formData,
        {
            headers: {
                'Authorization': 'Basic ' + btoa('943d2958-8927-11ef-9d9b-72f1edabb222' + ':'),
                'Content-Type': 'multipart/form-data',
            },
        }
    );

    if (response.data.result && response.data.result.length > 0) {
        // setExtractedData(response.data.result); // Display extracted data
        const d=response.data.result[0].prediction
        // console.log(response.data.result[0].prediction)
        let obj={}
        for(let i=0;i<d.length;i++){
            obj[`${d[i].label}`]=`${d[i].ocr_text}`
        }
        // setData(()=>obj)
        currentUser2(obj)
        console.log(response.data.result)
    } else {
        alert("No specific data was extracted. Please check the PDF file.");
    }
} catch (error) {
    console.error("Error extracting specific data from PDF:", error.response.data);
}
}
async function currentUser2(data) {
  try {
        const userD = await axios.put(`http://localhost:8000/api/users/update`,{name:data.Name,email:data.Email,phone:data.Phone,accademinDet:data?.Bachelor,collegeName:data.Education,project1:data.Project_1,project2:data.Project_2},
            { withCredentials: true }
        )
    }
    catch (err) {
        
        // localStorage.removeItem("userData")
        console.log(err)
    }
}
async function currentUser(data) {
  try {
        const userD = await axios.put(`http://localhost:8000/api/users/update`,{resume:data},
            { withCredentials: true }
        )
        navigate("/insightpost")
    }
    catch (err) {
        // localStorage.removeItem("userData")
        console.log(err)
    }
}
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // const handleSubmit = () => {
  //   if (selectedFile) {
  //     alert(`File uploaded: ${selectedFile.name}`);
  //     // Add additional upload handling logic here if needed
  //   } else {
  //     alert('Please select a file before submitting!');
  //   }
  // };

  const handleCreateNewResume = () => {
    onClose(); // Close the modal before navigating
    navigate('/showresume'); // Navigate to the new resume creation page
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>
          {userType === 'Student' ? 'Student Resume Options' : 'Professional Resume Options'}
        </h2>

        <div className={styles.iconContainer}>
          <FaFileUpload className={styles.uploadIcon} />
        </div>

        <div className={styles.fileUploadContainer}>
          <input
            type="file"
            onChange={handleFileChange}
            className={styles.fileInput}
            accept=".pdf, .doc, .docx"
          />
          {selectedFile && <p className={styles.fileName}>Selected: {selectedFile.name}</p>}
        </div>

        <p className={styles.modalDescription}>
          {userType === 'Student'
            ? 'Would you like to upload your resume or create a new one?'
            : 'Upload your resume for career advancement opportunities.'}
        </p>

        <div className={styles.buttonContainer}>
          {userType === 'Student' && (
            <>
              <button className={styles.modalButton} onClick={uploadFile}>Upload Resume</button>
              <button className={styles.modalButton} onClick={handleCreateNewResume}>Create New Resume</button>
            </>
          )}
          {userType === 'Professional' && (
            <button className={styles.submitButton} onClick={uploadFile}>
              Submit Resume
            </button>
          )}
        </div>

        
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes className={styles.closeIcon} /> {/* Cross icon */}
        </button>
      </div>
    </div>
  );
};

export default ResumeModal;
