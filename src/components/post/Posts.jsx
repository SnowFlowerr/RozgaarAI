// components/FindJobs.js
import React, { useState } from "react";
import { FaUserGraduate, FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ResumeModal from "../resumeModel/ResumeModal"; // Adjust the path according to your project structure

import styles from './Posts.module.css'

const Posts = () => {
  const navigate=useNavigate()



  return (
    <div className={styles.findJobsContainer}> {/* Updated to use the CSS module class */}
      <div className={styles.questionContainer}>
        <h1>Which jobs you want to Apply</h1>
        <p>Let us know which jobs you want to Apply!</p>
      </div>
      
      <div className={styles.optionsContainer}>
        <div className={styles.optionCard}>
          <FaUserGraduate className={styles.optionIcon} />
          <h2>Company Listing</h2>
          <p>Explore Company Listed, and more opportunities to kickstart your career.</p>
          <button className={styles.selectButton} onClick={() => navigate("/jobs")}>
            Click to view Company Listed
          </button>
        </div>

        <div className={styles.optionCard}>
          <FaBriefcase className={styles.optionIcon} />
          <h2>Insight posts</h2>
          <p>View Professionals Posts were they share many years of experiences.</p>
          <button className={styles.selectButton} onClick={() => navigate("/insightpost")}>
            Click to view Professionals Posts 
          </button>
        </div>
      </div>

    </div>
  );
};

export default Posts;
