import React, { useState } from 'react';
import './Card.css';
import { FaMapMarkerAlt, FaRegClock, FaBriefcase, FaBuilding } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Card = ({
  title,
  company,
  location,
  type,
  level,
  startDate,
  applicantsText,
  imageUrl,
  statusBadge,
  matchScore,
  link,
  id
}) => {
  const [applied, setApplied] = useState(false)
  const navigate=useNavigate()
  return (
    <>
    <div className="job-card">
      <div className="card-header" onClick={()=>navigate(`/jobdetails/${id}`)}>
        <img src={imageUrl} alt="company logo" className="company-logo" />
        <div className="status-badge">{statusBadge}</div>
      </div>
      <div className="card-body" onClick={()=>navigate(`/jobdetails/${id}`)}>
        <h3 className="job-title">{title}</h3>
        <p className="company-info">{company}</p>
        <div className="job-info">
          <span><FaMapMarkerAlt /> {location}</span>
          <span><FaBriefcase /> {type}</span>
          <span><FaBuilding /> {level}</span>
          <span><FaRegClock /> {startDate}</span>
        </div>
        <p className="applicants-text">{applicantsText}</p>
      </div>
      <div className="card-footer">
        <div className="match-info">
          <div className="match-circle">
            <span>{matchScore}%</span>
          </div>
          <span>FAIR MATCH</span>
          <span>✓ Culture & Values</span>
          <span>✓ No H1B</span>
        </div>
        <div>
          <a href={link} target="_blank" className="apply-btn" onClick={()=>setApplied(true)}>
          APPLY NOW
        </a>
        </div>
      </div>
    </div>
      {applied && <div className='haveYouApplied'>
                    <h1>
                        Have You Applied
                    </h1>
                    <div>
                        <span onClick={()=>setApplied(false)}>No</span>
                        <span>Yes</span>
                    </div>
                </div>}
    </>
  );
};

export default Card;
