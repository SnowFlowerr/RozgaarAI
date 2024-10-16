import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaLinkedin, FaMedium } from 'react-icons/fa';
import styles from './ProfileCardGrid.module.css';

// Sample professional AI-generated image URLs and data
const peopleData = [
  
    {
      name: 'Arpit Raj Baghel',
      designation: 'SDE-2 @ DP World, Ex-Flipkart',
      time: 'an hour ago',
      img: 'https://randomuser.me/api/portraits/men/32.jpg', // Male
      linkedin: '#',
      medium: '#',
    },
    {
      name: 'Ananya Sharma',
      designation: 'Product Manager @ XYZ Corp',
      time: '2 hours ago',
      img: 'https://randomuser.me/api/portraits/women/32.jpg', // Female
      linkedin: '#',
      medium: '#',
    },
    {
      name: 'Rohit Mehta',
      designation: 'Data Scientist @ ABC Ltd',
      time: '3 hours ago',
      img: 'https://randomuser.me/api/portraits/men/45.jpg', // Male
      linkedin: '#',
      medium: '#',
    },
    {
      name: 'Sneha Patel',
      designation: 'UX Designer @ Design Studio',
      time: '5 hours ago',
      img: 'https://randomuser.me/api/portraits/women/45.jpg', // Female
      linkedin: '#',
      medium: '#',
    },
    {
      name: 'Karan Singh',
      designation: 'Software Engineer @ Tech Solutions',
      time: '8 hours ago',
      img: 'https://randomuser.me/api/portraits/men/51.jpg', // Male
      linkedin: '#',
      medium: '#',
    },
    {
      name: 'Pooja Verma',
      designation: 'Marketing Specialist @ Media Agency',
      time: '10 hours ago',
      img: 'https://randomuser.me/api/portraits/women/51.jpg', // Female
      linkedin: '#',
      medium: '#',
    },
    {
      name: 'Vikram Joshi',
      designation: 'DevOps Engineer @ Cloud Services',
      time: '12 hours ago',
      img: 'https://randomuser.me/api/portraits/men/27.jpg', // Male
      linkedin: '#',
      medium: '#',
    },
    {
      name: 'Neha Gupta',
      designation: 'HR Manager @ Global Inc',
      time: '14 hours ago',
      img: 'https://randomuser.me/api/portraits/women/27.jpg', // Female
      linkedin: '#',
      medium: '#',
    },
    {
      name: 'Amit Kumar',
      designation: 'Business Analyst @ Finance Group',
      time: '16 hours ago',
      img: 'https://randomuser.me/api/portraits/men/68.jpg', // Male
      linkedin: '#',
      medium: '#',
    },
  ];

  
  const ProfileCardGrid = () => {
  const [ismeeting,setIsmeeting]=useState(false)
  const [istime,setIstime]=useState("")
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const openModal = (mentor) => {
    setSelectedMentor(mentor);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMentor(null);
  };

  // Generate random time slots for the booking
  const getRandomSlots = () => {
    const slots = ['10:00 AM - 11:00 AM', '1:00 PM - 2:00 PM', '5:00 PM - 6:00 PM'];
    return slots;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.animatedHeading}><span>Book a Mentor </span></h1>

      <div className={styles.grid}>
        {peopleData.map((person, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.profileInfo}>
              <img
                className={styles.profileImage}
                src={person.img}
                alt={person.name}
              />
              <div className={styles.profileDetails}>
                <h3 className={styles.name}>{person.name}</h3>
                <p className={styles.designation}>{person.designation}</p>
                <p className={styles.time}>{person.time}</p>
              </div>
            </div>

            <p className={styles.description}>
              Many beginners struggle with understanding how to structure and query relational databases, especially when it comes to joining multiple tables.
            </p>

            <div className={styles.tags}>
              <span className={styles.tag}>DBMS</span>
              <span className={styles.tag}>RDBMS</span>
              <span className={styles.tag}>SQL</span>
            </div>

            <div className={styles.connectOptions}>
              <a href={person.linkedin} className={styles.iconButton}>
                <FaLinkedin size={28} />
              </a>
              <a href={person.medium} className={styles.iconButton}>
                <FaMedium size={28} />
              </a>

              <button
                className={styles.scheduleCallButton}
                onClick={() => openModal(person)}
              >
                Schedule a Call
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Slot Booking */}
      {selectedMentor && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={styles.modal}
          overlayClassName={styles.overlay}
        >
          <h2 className={styles.modalTitle}>Book a Slot with {selectedMentor.name}</h2>
          <div className={styles.modalContent}>
            {ismeeting?
            <div className={styles.meetLink2}>
              <i class="fa-solid fa-check"></i>
            </div>
            :
            <>
            <p>Available Time Slots:</p>
            <ul className={styles.slotList}>
              {getRandomSlots().map((slot, index) => (
                <li key={index} className={istime!==index?styles.slotItem:styles.slotItem2} onClick={()=>setIstime(index)}>
                  {slot}
                </li>
              ))}
            </ul>
            </>}
            
              <p>
              Google Meet Link:{" "}
              <div className={ismeeting?styles.meetLink3:styles.meetLink} onClick={()=>setIsmeeting(true)}>
                {ismeeting?"Your meeting has been scheduled":"https://meet.google.com/random-link"}
              </div>
            </p>
            <button className={styles.closeButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProfileCardGrid;





