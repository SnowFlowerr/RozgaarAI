// src/components/JobCard.js
import React from 'react';
import './JobCard.css';

const JobCard = ({ job, onApply, status }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>Salary: {job.salary}</p>
      <p>Status: {status}</p>
      {onApply && (
        <button onClick={() => onApply(job)}>Apply Now</button>
      )}
    </div>
  );
};

export default JobCard;
