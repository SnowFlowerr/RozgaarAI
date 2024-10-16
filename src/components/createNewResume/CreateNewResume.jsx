import React from 'react';
import ResumeForm from '../resumeForm/ResumeForm'; // Import the multi-step resume form
import styles from './CreateNewResume.module.css'; // Import the CSS file for this component

const CreateNewResume = ({ onClose }) => {
  return (
    <div className={styles.createNewResumeContainer}>
      <h2>Create Your New Resume</h2>
      <ResumeForm onClose={onClose} /> {/* Pass the onClose function for modal use */}
    </div>
  );
};

export default CreateNewResume;
