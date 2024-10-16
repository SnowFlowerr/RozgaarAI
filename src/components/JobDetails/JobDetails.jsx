import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Modal from 'react-modal';
import styles from './JobDetails.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const referrals = [
  {
    name: 'Arpit Raj Baghel',
    designation: 'SDE-2 @ DP World, Ex-Flipkart',
    time: 'an hour ago',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    linkedin: '#',
    email: 'arpit@example.com',
  },
  {
    name: 'Ananya Sharma',
    designation: 'Product Manager @ DP World',
    time: '2 hours ago',
    img: 'https://randomuser.me/api/portraits/women/32.jpg',
    linkedin: '#',
    email: 'ananya@example.com',
  },
  {
    name: 'Rohit Mehta',
    designation: 'Data Scientist @ DP World',
    time: '3 hours ago',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    linkedin: '#',
    email: 'rohit@example.com',
  },
];

const learningResources = [
  {
    name: 'LeetCode',
    description: 'An online platform to practice coding skills with a focus on interview preparation and algorithm challenges.',
    link: 'https://leetcode.com',
  },
  {
    name: 'GeeksForGeeks',
    description: 'A comprehensive resource for learning data structures, algorithms, and computer science concepts.',
    link: 'https://www.geeksforgeeks.org',
  },
  {
    name: 'HackerRank',
    description: 'A platform for competitive coding and interview preparation that offers challenges across various domains.',
    link: 'https://www.hackerrank.com',
  },
  {
    name: 'Codecademy',
    description: 'Interactive platform to learn coding and web development through hands-on exercises.',
    link: 'https://www.codecademy.com',
  },
  {
    name: 'Coursera',
    description: 'Offers online courses from top universities and companies on various topics, including programming and data science.',
    link: 'https://www.coursera.org',
  },
  {
    name: 'edX',
    description: 'Provides access to high-quality online courses from renowned institutions, including programming and computer science.',
    link: 'https://www.edx.org',
  },
];

const JobDetails = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedReferral, setSelectedReferral] = useState(null);
  const [roadmapDays, setRoadmapDays] = useState(null);
  const [jobsData, setJobdata] = useState({})
  let { id } = useParams();

  const openModal = (referral) => {
    setSelectedReferral(referral);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedReferral(null);
  };

  const showRoadmap = (days) => {
    setRoadmapDays(days);
  };

  useEffect(() => {
    currentUser()
}, [])

async function currentUser() {
    try {
        const userD = await axios.get(`http://localhost:8000/api/naukri/getone/${id}`,
            { withCredentials: true }
        )
        setJobdata(userD.data)
        console.log(userD.data)
    }
    catch (err) {
        console.log(err)
    }
}

  const roadmapContent = {
    3: [
      'Day 1: Research the company and its culture.',
      'Day 2: Practice basic data structures and algorithms.',
      'Day 3: Mock coding interview.',
    ],
    7: [
      'Day 1: Company research and role requirements.',
      'Day 2: Data structures review.',
      'Day 3: Algorithms study.',
      'Day 4: System design fundamentals.',
      'Day 5: Behavioral interview preparation.',
      'Day 6: Mock interviews.',
      'Day 7: Review and feedback session.',
    ],
    15: [
      'Day 1: Research company values and mission.',
      'Day 2: Core JavaScript concepts.',
      'Day 3: React fundamentals.',
      'Day 4: Node.js basics.',
      'Day 5: APIs and server-side programming.',
      'Day 6: Advanced data structures.',
      'Day 7: Coding challenges.',
      'Day 8: System design case studies.',
      'Day 9: Behavioral interview practice.',
      'Day 10: Resume review.',
      'Day 11: Networking strategies.',
      'Day 12: Company-specific interview preparation.',
      'Day 13: Mock interviews with peers.',
      'Day 14: Final review of concepts.',
      'Day 15: Relax and prepare for the interview day.',
    ],
  };

  return (
    <div className={styles.jobDetails}>
      {/* First Section: Company Details + Referrals */}
      <section className={styles.companySection}>
        <div className={styles.companyHeader}>
          <img
            src={jobsData?.company_image}
            alt="DP World Logo"
            className={styles.companyLogo}
          />
          <div className={styles.companyInfo}>
            <h1 className={styles.companyName}>{jobsData?.company}</h1>
            <p className={styles.companyDescription}>
              {jobsData?.title}
            </p>
            <div className={styles.jobDetails}>
              <span className={styles.jobType}>{jobsData?.location}</span>
              <span className={styles.skills}>Required Skills: JavaScript, React, Node.js</span>
            </div>
            <a href={jobsData?.link} target='_blank'><button className={styles.applyButton}>Apply Now</button></a>
          </div>
        </div>

        {/* Referrals Subsection */}
        <div className={styles.referralsSection}>
          <h2>Referrals from the Company</h2>
          <div className={styles.referralsGrid}>
            {referrals.map((person, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.profileInfo}>
                  <img className={styles.profileImage} src={person.img} alt={person.name} />
                  <div className={styles.profileDetails}>
                    <h3 className={styles.name}>{person.name}</h3>
                    <p className={styles.designation}>{person.designation}</p>
                    <p className={styles.time}>{person.time}</p>
                  </div>
                </div>

                <div className={styles.contactInfo}>
                  <a href={person.linkedin} className={styles.iconButton}>
                    <FaLinkedin size={24} />
                  </a>
                  <a href={`mailto:${person.email}`} className={styles.iconButton}>
                    <FaEnvelope size={24} />
                  </a>
                </div>

                <button
                  className={styles.getReferralButton}
                  onClick={() => openModal(person)}
                >
                  Get Referral
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Section: Learning Resources */}
      <section className={styles.learningSection}>
        <h2>Learning Resources</h2>
        <div className={styles.learningGrid}>
          {learningResources.map((resource, index) => (
            <div key={index} className={styles.resourceCard}>
              <h3>{resource.name}</h3>
              <p>{resource.description}</p>
              <a href={resource.link} target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                Visit {resource.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Third Section: Customizable Roadmap */}
      <section className={styles.roadmapSection}>
        <h2>Customizable Roadmap to Get the Job</h2>
        <div className={styles.roadmapOptions}>
          <div className={styles.roadmapCard} onClick={() => showRoadmap(3)}>
            <h3>3-Day Plan</h3>
            <p>Quick overview of the company and essential coding practice.</p>
          </div>
          <div className={styles.roadmapCard} onClick={() => showRoadmap(7)}>
            <h3>7-Day Plan</h3>
            <p>Detailed review of tech stack and common interview questions.</p>
          </div>
          <div className={styles.roadmapCard} onClick={() => showRoadmap(15)}>
            <h3>15-Day Plan</h3>
            <p>Complete guide including mock interviews and company culture deep-dive.</p>
          </div>
        </div>

        {/* Diagrammatic Representation of Roadmap */}
        {roadmapDays && (
          <div className={styles.roadmapDiagram}>
            <h4>{roadmapDays}-Day Roadmap Steps</h4>
            {roadmapContent[roadmapDays].map((step, index) => (
              <div key={index} className={styles.roadmapNode}>
                <div className={styles.nodeCircle}>
                  <span>{`Day ${index + 1}`}</span>
                </div>
                <p>{step}</p>
                {index < roadmapContent[roadmapDays].length - 1 && <div className={styles.connector}></div>}
              </div>
            ))}
            <button className={styles.closeRoadmap} onClick={() => setRoadmapDays(null)}>Close</button>
          </div>
        )}
      </section>

      {/* Modal for Referral */}
      {selectedReferral && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={styles.modal}
          overlayClassName={styles.overlay}
        >
          <h2>Get a Referral from {selectedReferral.name}</h2>
          <p>Email: {selectedReferral.email}</p>
          <button onClick={closeModal} className={styles.closeButton}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default JobDetails;
