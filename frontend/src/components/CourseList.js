import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CourseList({ refreshFlag }) {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCourses = () => {
    setIsLoading(true);
    axios.get('http://localhost:8085/courses')
      .then(response => {
        setCourses(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchCourses();
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

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  };

  const courseCardStyles = {
    background: 'rgba(102, 126, 234, 0.1)',
    border: '1px solid rgba(102, 126, 234, 0.2)',
    borderRadius: '12px',
    padding: '20px',
    color: '#2d3748'
  };

  const courseHeaderStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  };

  const courseCodeStyles = {
    background: 'rgba(102, 126, 234, 0.2)',
    color: '#2d3748',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600'
  };

  const courseNameStyles = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#2d3748'
  };

  const courseInfoStyles = {
    fontSize: '14px',
    color: '#4a5568',
    marginBottom: '4px'
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
        <h2 style={titleStyles}>📚 Course List</h2>
        <div style={emptyStyles}>Loading courses...</div>
      </div>
    );
  }

  return (
    <div>
      <h2 style={titleStyles}>
        📚 Course List ({courses.length})
      </h2>
      
      {courses.length === 0 ? (
        <div style={emptyStyles}>
          <p>No courses found. Add your first course above!</p>
        </div>
      ) : (
        <div style={gridStyles}>
          {courses.map(course => (
            <div key={course.id} style={courseCardStyles}>
              <div style={courseHeaderStyles}>
                <span style={courseCodeStyles}>{course.courseCode}</span>
              </div>
              
              <h4 style={courseNameStyles}>{course.name || course.courseName}</h4>
              <p style={courseInfoStyles}>
                👨‍🏫 Instructor: {course.instructor}
              </p>
              <p style={courseInfoStyles}>
                🏆 Credits: {course.credits}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CourseList;