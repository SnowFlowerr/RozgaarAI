// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the styles

const NavBar = ({ appliedCount, interviewingCount, offerReceivedCount, rejectedCount, archivedCount }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/applied" className="navbar-link">
            Applied({appliedCount})
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/interviewing" className="navbar-link">
            Interviewing({interviewingCount})
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/offer-received" className="navbar-link">
            Offer Received({offerReceivedCount})
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/rejected" className="navbar-link">
            Rejected({rejectedCount})
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/archived" className="navbar-link">
            Archived({archivedCount})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
