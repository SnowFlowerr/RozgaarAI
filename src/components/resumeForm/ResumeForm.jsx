import React, { useState } from 'react';
import {
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaLinkedin,
  FaGithub,
  FaCode,
  FaProjectDiagram,
  FaPlus,
  FaTimes
} from 'react-icons/fa';
import styles from './ResumeForm.module.css'; // Import the CSS module

const ResumeForm = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [projects, setProjects] = useState([{}]); // Initial empty project
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    github: '',
    leetCode: '',
    degree: '',
    skills: '',
    workExperience: { companyName: '', role: '', duration: '' },
  });
  const [errors, setErrors] = useState({});

  // Handle input change and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validate fields for the current step
  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.fullName) newErrors.fullName = 'Full Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.phone) newErrors.phone = 'Phone Number is required';
    } else if (step === 2) {
      if (!formData.degree) newErrors.degree = 'Highest Degree is required';
      if (!formData.skills) newErrors.skills = 'Skills are required';
    } else if (step === 4) {
      if (!formData.workExperience.companyName) newErrors.companyName = 'Company Name is required';
      if (!formData.workExperience.role) newErrors.role = 'Role is required';
      if (!formData.workExperience.duration) newErrors.duration = 'Duration is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Check if there are no errors
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step < 4) {
        setStep(step + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const addProject = () => {
    if (projects.length < 3) {
      setProjects([...projects, {}]);
    }
  };

  return (
    <div className={styles.resumeFormContainer}>
      <button className={styles.closeButton} onClick={onClose}>
        <FaTimes className={styles.closeIcon} />
      </button>

      {step === 1 && (
        <div className={styles.formStep}>
          <h2>Step 1: Personal Information</h2>
          <div className={styles.formGroup}>
            <FaUser className={styles.formIcon} />
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              className={styles.formInput}
              value={formData.fullName}
              onChange={handleInputChange}
            />
            {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
          </div>
          <div className={styles.formGroup}>
            <FaBriefcase className={styles.formIcon} />
            <input
              type="text"
              placeholder="Email"
              name="email"
              className={styles.formInput}
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>
          <div className={styles.formGroup}>
            <FaBriefcase className={styles.formIcon} />
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              className={styles.formInput}
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
          </div>
          <div className={styles.formGroup}>
            <FaLinkedin className={styles.formIcon} />
            <input
              type="text"
              placeholder="LinkedIn Profile"
              name="linkedIn"
              className={styles.formInput}
              value={formData.linkedIn}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <FaGithub className={styles.formIcon} />
            <input
              type="text"
              placeholder="GitHub Profile"
              name="github"
              className={styles.formInput}
              value={formData.github}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <FaCode className={styles.formIcon} />
            <input
              type="text"
              placeholder="LeetCode/Other Platform"
              name="leetCode"
              className={styles.formInput}
              value={formData.leetCode}
              onChange={handleInputChange}
            />
          </div>
          <button className={styles.nextButton} onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className={styles.formStep}>
          <h2>Step 2: Education & Skills</h2>
          <div className={styles.formGroup}>
            <FaGraduationCap className={styles.formIcon} />
            <input
              type="text"
              placeholder="Highest Degree"
              name="degree"
              className={styles.formInput}
              value={formData.degree}
              onChange={handleInputChange}
            />
            {errors.degree && <span className={styles.error}>{errors.degree}</span>}
          </div>
          <div className={styles.formGroup}>
            <FaCode className={styles.formIcon} />
            <input
              type="text"
              placeholder="Skills (comma separated)"
              name="skills"
              className={styles.formInput}
              value={formData.skills}
              onChange={handleInputChange}
            />
            {errors.skills && <span className={styles.error}>{errors.skills}</span>}
          </div>
          <div className={styles.stepButtons}>
            <button className={styles.prevButton} onClick={handlePrevious}>Previous</button>
            <button className={styles.nextButton} onClick={handleNext}>Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className={styles.formStep}>
          <h2>Step 3: Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className={styles.formGroup}>
              <FaProjectDiagram className={styles.formIcon} />
              <input type="text" placeholder={`Project ${index + 1} Name`} className={styles.formInput} />
              <input type="text" placeholder="Project Description" className={styles.formInput} />
              <input type="text" placeholder="Tech Stack" className={styles.formInput} />
            </div>
          ))}
          {projects.length < 3 && (
            <button className={styles.addProjectButton} onClick={addProject}>
              <FaPlus /> Add Another Project
            </button>
          )}
          <div className={styles.stepButtons}>
            <button className={styles.prevButton} onClick={handlePrevious}>Previous</button>
            <button className={styles.nextButton} onClick={handleNext}>Next</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className={styles.formStep}>
          <h2>Step 4: Work Experience</h2>
          <div className={styles.formGroup}>
            <FaBriefcase className={styles.formIcon} />
            <input
              type="text"
              placeholder="Company Name"
              name="companyName"
              className={styles.formInput}
              value={formData.workExperience.companyName}
              onChange={(e) => setFormData({ ...formData, workExperience: { ...formData.workExperience, companyName: e.target.value } })}
            />
            {errors.companyName && <span className={styles.error}>{errors.companyName}</span>}
          </div>
          <div className={styles.formGroup}>
            <FaUser className={styles.formIcon} />
            <input
              type="text"
              placeholder="Role"
              name="role"
              className={styles.formInput}
              value={formData.workExperience.role}
              onChange={(e) => setFormData({ ...formData, workExperience: { ...formData.workExperience, role: e.target.value } })}
            />
            {errors.role && <span className={styles.error}>{errors.role}</span>}
          </div>
          <div className={styles.formGroup}>
            <FaBriefcase className={styles.formIcon} />
            <input
              type="text"
              placeholder="Duration"
              name="duration"
              className={styles.formInput}
              value={formData.workExperience.duration}
              onChange={(e) => setFormData({ ...formData, workExperience: { ...formData.workExperience, duration: e.target.value } })}
            />
            {errors.duration && <span className={styles.error}>{errors.duration}</span>}
          </div>
          <div className={styles.stepButtons}>
            <button className={styles.prevButton} onClick={handlePrevious}>Previous</button>
            <button className={styles.submitButton}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeForm;
