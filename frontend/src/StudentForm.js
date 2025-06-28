import React, { useState } from 'react';
import axios from 'axios';

function StudentForm({ fetchStudents }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8085/students', { name, email })
            .then(() => {
                setName('');
                setEmail('');
                fetchStudents();
            })
            .catch(error => console.error('Error adding student:', error));
    };

    return (
        <div>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
}

export default StudentForm;
