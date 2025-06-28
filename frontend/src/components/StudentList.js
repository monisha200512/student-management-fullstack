import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StudentList({ refreshFlag }) {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStudents = () => {
    setIsLoading(true);
    axios.get('http://localhost:8085/students')
      .then(response => {
        setStudents(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchStudents();
  }, [refreshFlag]);

  const titleStyles = {
    color: '#2d3748',
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const listStyles = {
    listStyle: 'none',
    marginTop: '20px',
    padding: 0
  };

  const itemStyles = {
    background: 'rgba(102, 126, 234, 0.1)',
    border: '1px solid rgba(102, 126, 234, 0.2)',
    borderRadius: '8px',
    padding: '12px 16px',
    marginBottom: '8px',
    color: '#2d3748',
    fontSize: '16px'
  };

  const emptyStyles = {
    textAlign: 'center',
    padding: '40px',
    color: '#4a5568',
    fontSize: '16px'
  };

  if (isLoading) {
    return (
      <div>
        <h2 style={titleStyles}>👥 Student List</h2>
        <div style={emptyStyles}>Loading students...</div>
      </div>
    );
  }

  return (
    <div>
      <h2 style={titleStyles}>
        👥 Student List ({students.length})
      </h2>
      
      {students.length === 0 ? (
        <div style={emptyStyles}>
          <p>No students found. Add your first student above!</p>
        </div>
      ) : (
        <ul style={listStyles}>
          {students.map(student => (
            <li key={student.id} style={itemStyles}>
              <strong>{student.name}</strong> - {student.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;