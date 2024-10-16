import React from 'react';
import styles from './JobCard.module.css';

const JobCard = ({ job }) => {
  // Define logic for "New" badge (assuming 'posted' tells us the time)
  const isNewPost = job.posted.toLowerCase().includes('few hours') || job.posted.toLowerCase().includes('today');

  return (
    <div className={styles.jobCard}>
      {isNewPost && <span className={styles.newPostBadge}>New</span>} {/* Display the "New" badge if the job is new */}
      <div className={styles.jobHeader}>
        <h3>{job.title}</h3>
        <div className={styles.companyInfo}>
          <span>{job.company}</span>
          <span className={styles.rating}>⭐ {job.rating} | {job.reviews} Reviews</span>
        </div>
      </div>
      <div className={styles.jobDetails}>
        <div className={styles.experience}>
          <i className="icon-briefcase"></i> {job.experience}
        </div>
        <div className={styles.salary}>
          <i className="icon-money"></i> {job.salary}
        </div>
        <div className={styles.location}>
          <i className="icon-location"></i> {job.location}
        </div>
      </div>
      <div className={styles.qualification}>
        <p>{job.qualification}</p>
      </div>
      <div className={styles.skills}>
        {job.skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
      <div className={styles.postedTime}>
        {job.posted}
      </div>
    </div>
  );
};

export default JobCard;
