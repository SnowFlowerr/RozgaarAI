import React from "react";
import styles from "./JobList.module.css"; // Import the CSS module
import JobCard from "./JobCard";
import jobs from "./jobData"; // Import the job data

const JobList = () => {
  return (
    <div className={styles.jobSection}>
      {/* Boxed Heading for Latest Job Postings */}
      <div className={styles.headingBox}>
        <h2 className={styles.heading}>Latest Job Postings</h2>
      </div>

      <div className={styles.jobContainer}>
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
