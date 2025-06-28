import React, { useState } from 'react';
import axios from 'axios';

function AddCourse({ onCourseAdded }) {
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [instructor, setInstructor] = useState('');
  const [credits, setCredits] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    axios.post('http://localhost:8085/courses', {
      courseName,
      courseCode,
      instructor,
      credits
    })
      .then(response => {
        console.log('Course added:', response.data);
        onCourseAdded();
        setCourseName('');
        setCourseCode('');
        setInstructor('');
        setCredits('');
        setIsLoading(false);
        alert('Course added successfully!');
      })
      .catch(error => {
        console.error('Error adding course:', error);
        setIsLoading(false);
        alert('Error adding course. Please try again.');
      });
  };

  const titleStyles = {
    color: '#2d3748',
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const formStyles = {
    marginTop: '20px'
  };

  const rowStyles = {
    display: 'flex',
    gap: '16px',
    marginBottom: '20px'
  };

  const inputStyles = {
    flex: '1',
    padding: '14px 18px',
    border: '2px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    fontSize: '16px',
    background: '#ffffff',
    color: '#2d3748',
    boxSizing: 'border-box'
  };

    width: '100%',
    padding: '14px 18px',
    border: '2px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    fontSize: '16px',
    marginBottom: '15px',
    background: '#ffffff',
    color: '#2d3748',
    boxSizing: 'border-box'
  };

  const buttonStyles = {
    background: 'linear-gradient(45deg, #48bb78, #38a169)',
    border: 'none',
    color: 'white',
    padding: '14px 28px',
    borderRadius: '10px',
    fontWeight: '600',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(72, 187, 120, 0.3)'
  };

  return (
    <div>
      <h2 style={titleStyles}>
        📚 Add Course
      </h2>
      
      <form onSubmit={handleSubmit} style={formStyles}>
        <div style={rowStyles}>
          <input
            type="text"
            style={inputStyles}
            placeholder="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
          
          <input
            type="text"
            style={inputStyles}
            placeholder="Course Code"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
            required
          />
        </div>
        
        <div style={rowStyles}>
          <input
            type="text"
            style={inputStyles}
            placeholder="Instructor Name"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            required
          />
          
          <input
            type="number"
            style={inputStyles}
            placeholder="Credits"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
            required
            min="1"
            max="6"
          />
        </div>
        
        <button type="submit" style={buttonStyles} disabled={isLoading}>
          {isLoading ? 'Adding...' : '✅ Add Course'}
        </button>
      </form>
    </div>
  );
}

export default AddCourse;