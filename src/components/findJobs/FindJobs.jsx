// components/FindJobs.js
import React, { useState } from "react";
import { FaUserGraduate, FaBriefcase } from "react-icons/fa";
import ResumeModal from "../resumeModel/ResumeModal"; // Import the actual ResumeModal component, not the CSS file
import styles from './FindJobs.module.css'; // Import the CSS module

const FindJobs = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userType, setUserType] = useState(""); // Track whether the user is a Student or Professional

  // Open the modal and set the user type
  const handleOpenModal = (type) => {
    setUserType(type); // Set the user type
    setModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <div className={styles.findJobsContainer}> {/* Updated to use the CSS module class */}
      <div className={styles.questionContainer}>
        <h1>Find Your Perfect Job Path</h1>
        <p>Let us know who you are to tailor job opportunities just for you!</p>
      </div>
      
      <div className={styles.optionsContainer}>
        <div className={styles.optionCard}>
          <FaUserGraduate className={styles.optionIcon} />
          <h2>Student</h2>
          <p>Explore internships, part-time roles, and more opportunities to kickstart your career.</p>
          <button className={styles.selectButton} onClick={() => handleOpenModal('Student')}>
            I am a Student
          </button>
        </div>

        <div className={styles.optionCard}>
          <FaBriefcase className={styles.optionIcon} />
          <h2>Working Professional</h2>
          <p>Find full-time roles and career advancement opportunities tailored to your experience.</p>
          <button className={styles.selectButton} onClick={() => handleOpenModal('Professional')}>
            I am a Professional
          </button>
        </div>
      </div>

      {isModalOpen && <ResumeModal onClose={handleCloseModal} userType={userType} />} {/* Render modal with dynamic content */}
    </div>
  );
};

export default FindJobs;
