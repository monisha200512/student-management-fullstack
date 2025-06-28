import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import AddCourse from './components/AddCourse';
import CourseList from './components/CourseList';

function App() {
  const [refreshStudents, setRefreshStudents] = useState(false);
  const [refreshCourses, setRefreshCourses] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');
  const [studentCount, setStudentCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [isLoadingStats, setIsLoadingStats] = useState(true);

  // Fetch dashboard statistics
  const fetchStats = () => {
    setIsLoadingStats(true);
    
    // Fetch students count
    axios.get('http://localhost:8085/students')
      .then(response => {
        setStudentCount(response.data.length);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
        setStudentCount(0);
      });

    // Fetch courses count
    axios.get('http://localhost:8085/courses')
      .then(response => {
        setCourseCount(response.data.length);
        setIsLoadingStats(false);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        setCourseCount(0);
        setIsLoadingStats(false);
      });
  };

  // Fetch stats when component mounts and when data changes
  useEffect(() => {
    fetchStats();
  }, [refreshStudents, refreshCourses]);

  const handleStudentAdded = () => {
    setRefreshStudents(!refreshStudents);
    fetchStats(); // Refresh stats immediately
  };

  const handleCourseAdded = () => {
    setRefreshCourses(!refreshCourses);
    fetchStats(); // Refresh stats immediately
  };

  const appStyles = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    color: '#ffffff'
  };

  const navStyles = {
    background: 'rgba(75, 0, 130, 0.95)',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px'
  };

  const navBrandStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };

  const logoStyles = {
    width: '32px',
    height: '32px',
    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px'
  };

  const titleStyles = {
    margin: 0,
    fontSize: '20px',
    fontWeight: '600',
    color: '#ffffff'
  };

  const navLinksStyles = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  };

  const navTabStyles = {
    color: '#ffffff',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '25px',
    fontWeight: '500',
    fontSize: '14px',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const activeNavTabStyles = {
    ...navTabStyles,
    background: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(255, 255, 255, 0.3)'
  };

  const containerStyles = {
    padding: '30px',
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const pageHeaderStyles = {
    marginBottom: '30px'
  };

  const pageTitleStyles = {
    fontSize: '28px',
    fontWeight: '700',
    color: '#ffffff',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '0'
  };

  const dashboardGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '24px',
    marginBottom: '30px'
  };

  const cardStyles = {
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '20px'
  };

  const cardHeaderStyles = {
    color: '#2d3748',
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const cardContentStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const cardNumberStyles = {
    fontSize: '36px',
    fontWeight: '700',
    color: '#1a202c',
    marginBottom: '8px'
  };

  const cardIconStyles = {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    color: 'white'
  };

  const welcomeCardStyles = {
    ...cardStyles,
    gridColumn: '1 / -1',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: '#ffffff'
  };

  const welcomeTitleStyles = {
    color: '#ffffff',
    fontSize: '24px',
    marginBottom: '16px'
  };

  const featureListStyles = {
    listStyle: 'none',
    marginTop: '20px',
    padding: 0
  };

  const featureItemStyles = {
    marginBottom: '12px',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '16px'
  };

  const statusIndicatorStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '18px',
    fontWeight: '600',
    color: '#48bb78'
  };

  const statusDotStyles = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#48bb78',
    animation: 'pulse 2s infinite'
  };

  return (
    <div style={appStyles}>
      {/* Navigation */}
      <nav style={navStyles}>
        <div style={navBrandStyles}>
          <div style={logoStyles}>📚</div>
          <h1 style={titleStyles}>Student Management System</h1>
        </div>
        
        <div style={navLinksStyles}>
          <a 
            href="#dashboard" 
            style={activeView === 'dashboard' ? activeNavTabStyles : navTabStyles}
            onClick={(e) => {e.preventDefault(); setActiveView('dashboard');}}
          >
            📊 Dashboard
          </a>
          <a 
            href="#students" 
            style={activeView === 'students' ? activeNavTabStyles : navTabStyles}
            onClick={(e) => {e.preventDefault(); setActiveView('students');}}
          >
            👥 Students
          </a>
          <a 
            href="#courses" 
            style={activeView === 'courses' ? activeNavTabStyles : navTabStyles}
            onClick={(e) => {e.preventDefault(); setActiveView('courses');}}
          >
            📚 Courses
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div style={containerStyles}>
        {/* Dashboard View */}
        {activeView === 'dashboard' && (
          <div>
            <div style={pageHeaderStyles}>
              <h2 style={pageTitleStyles}>Dashboard</h2>
            </div>

            <div style={dashboardGridStyles}>
              <div style={cardStyles}>
                <h3 style={cardHeaderStyles}>Total Students</h3>
                <div style={cardContentStyles}>
                  <div>
                    <div style={cardNumberStyles}>
                      {isLoadingStats ? '...' : studentCount}
                    </div>
                  </div>
                  <div style={{...cardIconStyles, background: 'linear-gradient(45deg, #4299e1, #3182ce)'}}>
                    👥
                  </div>
                </div>
              </div>

              <div style={cardStyles}>
                <h3 style={cardHeaderStyles}>Total Courses</h3>
                <div style={cardContentStyles}>
                  <div>
                    <div style={cardNumberStyles}>
                      {isLoadingStats ? '...' : courseCount}
                    </div>
                  </div>
                  <div style={{...cardIconStyles, background: 'linear-gradient(45deg, #ed8936, #dd6b20)'}}>
                    📚
                  </div>
                </div>
              </div>

              <div style={cardStyles}>
                <h3 style={cardHeaderStyles}>System Status</h3>
                <div style={cardContentStyles}>
                  <div>
                    <div style={statusIndicatorStyles}>
                      <span style={statusDotStyles}></span>
                      Active
                    </div>
                  </div>
                  <div style={{...cardIconStyles, background: 'linear-gradient(45deg, #48bb78, #38a169)'}}>
                    🖥️
                  </div>
                </div>
              </div>

              <div style={welcomeCardStyles}>
                <h3 style={welcomeTitleStyles}>🎉 Welcome to Your Dashboard!</h3>
                <ul style={featureListStyles}>
                  <li style={featureItemStyles}>🚀 Your Student Course Management System is running perfectly!</li>
                  <li style={featureItemStyles}>📊 Use the navigation above to manage students and courses</li>
                  <li style={featureItemStyles}>⚡ Built with Spring Boot backend and React frontend</li>
                  <li style={featureItemStyles}>🔄 Integrated with Jenkins CI/CD pipeline</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Students View */}
        {activeView === 'students' && (
          <div>
            <div style={pageHeaderStyles}>
              <h2 style={pageTitleStyles}>Students</h2>
            </div>
            <div style={cardStyles}>
              <AddStudent onStudentAdded={handleStudentAdded} />
            </div>
            <div style={cardStyles}>
              <StudentList refreshFlag={refreshStudents} />
            </div>
          </div>
        )}

        {/* Courses View */}
        {activeView === 'courses' && (
          <div>
            <div style={pageHeaderStyles}>
              <h2 style={pageTitleStyles}>Courses</h2>
            </div>
            <div style={cardStyles}>
              <AddCourse onCourseAdded={handleCourseAdded} />
            </div>
            <div style={cardStyles}>
              <CourseList refreshFlag={refreshCourses} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;