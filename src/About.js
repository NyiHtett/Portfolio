import React from 'react';
import './App.css';
import './Animation.css';

function About() {
  return (
    <div className="about">
      <h2>Educational Background</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>2019 - Present</h3>
          <h4>Ohlone College</h4>
          <p>Bachelor of Science in Computer Science</p>
          <p>Major GPA: 3.8</p>
        </div>
        <div className="timeline-item">
          <h3>2017 - 2019</h3>
          <h4>High School Name</h4>
          <p>High School Diploma</p>
          <p>Achievements: Honor Roll</p>
        </div>
        <div className="timeline-item">
          <h3>2014 - 2017</h3>
          <h4>Middle School Name</h4>
          <p>Achievements: Student Council Member</p>
        </div>
      </div>
    </div>
  );
}

export default About;
