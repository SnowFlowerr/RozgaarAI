// components/HeroSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './HeroSection.module.css'; // Import CSS module

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize navigation function

  const handleFindJobsClick = () => {
    navigate('/find-jobs'); // Navigate to /find-jobs when button is clicked
  };

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Rozgarr AI
        </h1>
        <p className={styles.heroDescription}>
          Our AI makes landing job interviews dramatically easier and faster! Get matched jobs, tailored resumes,
          and recommended insider connections in less than 1 min!
        </p>
        <button className={styles.heroButton} onClick={handleFindJobsClick}>
          Start Finding Jobs
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
