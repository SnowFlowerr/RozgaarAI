// src/components/ResumeCreation.js
import React, { useState } from 'react';
import { FaUser, FaBriefcase, FaGraduationCap, FaProjectDiagram, FaLinkedin, FaGithub, FaPlus, FaTimes } from 'react-icons/fa';
import './ResumeCreation.css';

const ResumeCreation = () => {
  const [step, setStep] = useState(1);
  const [projects, setProjects] = useState([{}]);

  const addProject = () => {
    if (projects.length < 3) {
      setProjects([...projects, {}]);
    }
  };

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  return (
    <div className="resumeCreationContainer">
      <h1 className="formTitle">Create Your Resume</h1>
      <div className="progressIndicator">Step {step} of 4</div>

      {step === 1 && (
        <div className="stepContainer">
          <h2>Step 1: Personal Information</h2>
          <input type="text" placeholder="Full Name" className="formInput" />
          <input type="text" placeholder="Email" className="formInput" />
          <input type="text" placeholder="Phone Number" className="formInput" />
          <input type="text" placeholder="LinkedIn Profile" className="formInput" />
          <input type="text" placeholder="GitHub Profile" className="formInput" />
          <button className="nextButton" onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="stepContainer">
          <h2>Step 2: Education & Skills</h2>
          <input type="text" placeholder="Highest Degree" className="formInput" />
          <input type="text" placeholder="Skills (comma separated)" className="formInput" />
          <div className="buttonGroup">
            <button className="prevButton" onClick={handlePrevious}>Previous</button>
            <button className="nextButton" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="stepContainer">
          <h2>Step 3: Projects</h2>
          {projects.map((_, index) => (
            <div key={index}>
              <input type="text" placeholder={`Project ${index + 1} Name`} className="formInput" />
              <input type="text" placeholder="Project Description" className="formInput" />
              <input type="text" placeholder="Tech Stack" className="formInput" />
            </div>
          ))}
          {projects.length < 3 && (
            <button className="addProjectButton" onClick={addProject}>
              <FaPlus /> Add Another Project
            </button>
          )}
          <div className="buttonGroup">
            <button className="prevButton" onClick={handlePrevious}>Previous</button>
            <button className="nextButton" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="stepContainer">
          <h2>Step 4: Work Experience</h2>
          <input type="text" placeholder="Company Name" className="formInput" />
          <input type="text" placeholder="Role" className="formInput" />
          <input type="text" placeholder="Duration" className="formInput" />
          <div className="buttonGroup">
            <button className="prevButton" onClick={handlePrevious}>Previous</button>
            <button className="submitButton">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeCreation;
