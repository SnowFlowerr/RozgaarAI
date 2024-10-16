import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, subtitle, description, imageUrl, stipend, discountText, dateUpdated, link }) => {
  return (
    <div className="card-horizontal" >
      <img src={imageUrl} alt="company logo" className="card-image-horizontal" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <h1>{description}</h1>
        <div className="pricing">
          {stipend && <span className="new-price"> ₹{stipend}</span>}
        </div>
        <p className="offer">{discountText}</p>
      </div>
      <div className="card-footer">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className='apply-btn'>Apply Now</button>
        </a>
        <p>Active {dateUpdated} ago</p>
      </div>
    </div>
  );
};

export default Card;
