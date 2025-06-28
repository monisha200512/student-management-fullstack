import React, { useState } from 'react';
import axios from 'axios';

function AddStudent({ onStudentAdded }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    axios.post('http://localhost:8085/students', { name, email })
      .then(response => {
        console.log('Student added:', response.data);
        onStudentAdded();
        setName('');
        setEmail('');
        setIsLoading(false);
        alert('Student added successfully!');
      })
      .catch(error => {
        console.error('Error adding student:', error);
        setIsLoading(false);
        alert('Error adding student. Please try again.');
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

  const inputStyles = {
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
        👤 Add Student
      </h2>
      
      <form onSubmit={handleSubmit} style={formStyles}>
        <input
          type="text"
          style={inputStyles}
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        <input
          type="email"
          style={inputStyles}
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <button type="submit" style={buttonStyles} disabled={isLoading}>
          {isLoading ? 'Adding...' : '✅ Add Student'}
        </button>
      </form>
    </div>
  );
}

export default AddStudent;