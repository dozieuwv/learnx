import React from "react";
import mentorimg1 from '../assets/mentorimg1.png'
import mentorimg2 from '../assets/mentorimg2.png'
import mentorimg3 from '../assets/mentorimg3.png'

import "../styles/Mentors.css"

const mentors = [
  {
    name: "John Paul",
    email: "Johnpaul3@gmail.com",
    phone: "09069756093",
    img:  mentorimg1,
  },
  {
    name: "Travis Scott",
    email: "Travis911@gmail.com",
    phone: "09137274377",
    img: mentorimg2,
  },
  {
    name: "Annabel Francisca",
    email: "Annabel2@gmail.com",
    phone: "08083647926",
    img: mentorimg3,
  },
];

const Mentors = () => {
  return (
    <div className="mentors-container">
      <h2>Product Design Mentors</h2>
      <div className="mentors-grid">
        {mentors.map((mentor, index) => (
          <div key={index} className="mentor-card">
            <img src={mentor.img} alt={mentor.name} />
            <div className="mentor-info">
              <p><strong>Name:</strong> {mentor.name}</p>
              <p><strong>Email:</strong> {mentor.email}</p>
              <p><strong>Phone No:</strong> {mentor.phone}</p>
              <a href={`tel:${mentor.phone}`} className="call-link">
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;