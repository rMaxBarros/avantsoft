import { useEffect, useState } from "react";
import api from "../api";
import Header from "../components/Header";
import styles from './Search.module.css';

function Search() {
    const [students, setStudents] = useState([]);
    const [searchId, setSearchId] = useState('');
    const [filteredStudent, setFilteredStudent] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    // Load all students on component mount
    useEffect(() => {
        api.get('/students')
            .then(response => {
                setStudents(response.data);
             })
             .catch(() => {
                setErrorMessage('Error fetching students.');
             });
    }, []);

    // Search students by ID
    const handleSearch = () => {
        if (!searchId) return;

        api.get(`/students/${searchId}`)
        .then((response) => {
            setFilteredStudent(response.data);
            setErrorMessage('');
        })
        .catch(() => {
            setFilteredStudent(null);
            setErrorMessage(`Student with ID ${searchId} not found.`);
        });
    };

    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>Registered students</h1>

                <div className={styles.searchBar}>
                    <input 
                    className={styles.input}
                    type="number"
                    placeholder="Enter Student ID"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>

                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

                {filteredStudent ? (
                    <div className={styles.studentList}>
                        <h2>Student Found:</h2>
                        <p><strong>ID:</strong> {filteredStudent.id}</p>
                        <p><strong>Name:</strong> {filteredStudent.name}</p>
                        <p><strong>Grade:</strong> {filteredStudent.grade}</p>
                        <p><strong>Unique Letter:</strong> {filteredStudent.uniqueLetter}</p>
                        <button onClick={() => {
                            setFilteredStudent(null);
                            setSearchId('');
                            setErrorMessage('');
                        }}>Go back to all Students</button>
                    </div>
                ) : (
                    <div className={styles.studentList}>
                        <h2>All Students:</h2>
                        {students.lenght === 0 ? (
                            <p>No students registered yet.</p>
                        ) : (
                            <ul>
                                {students.map((student) => (
                                    <li key={student.id}
                                    className={styles.studentItem}
                                    >
                                        <strong>ID:</strong> {student.id} - <strong>{student.name}</strong> - Grade: {student.grade}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default Search;