import React, { useState } from 'react';
import axios from 'axios';

function CourseForm({ fetchCourses }) {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [instructor, setInstructor] = useState('');
    const [credits, setCredits] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8085/courses', { name, code, instructor, credits })
            .then(() => {
                setName('');
                setCode('');
                setInstructor('');
                setCredits('');
                fetchCourses();
            })
            .catch(error => console.error('Error adding course:', error));
    };

    return (
        <div>
            <h2>Add Course</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Course Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Course Code" value={code} onChange={(e) => setCode(e.target.value)} required />
                <input type="text" placeholder="Instructor" value={instructor} onChange={(e) => setInstructor(e.target.value)} required />
                <input type="number" placeholder="Credits" value={credits} onChange={(e) => setCredits(e.target.value)} required />
                <button type="submit">Add Course</button>
            </form>
        </div>
    );
}

export default CourseForm;
