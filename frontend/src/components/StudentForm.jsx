import { useState } from "react";
import Modal from "./Modal";
import styles from './StudentForm.module.css';
import api from '../api';

function StudentForm() {
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e)=> {
        e.preventDefault();

        try {
            await api.post('/students', {
                name,
                grade: Number(grade),
            });

            setModalMessage('Student added successfully!');
            setShowModal(true);
            setName('');
            setGrade('');
        } catch (error) {
            setModalMessage('Error adding student. Please try again.');
            setShowModal(true);
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit} classNam={styles.form}>
            <section className={styles.inputSection}>
                <input 
                className={styles.input}
                type="text"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
                <input
                className={styles.input}
                type="number"
                placeholder="Grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                required
                />
            <button type="submit">Submit</button>
            </section>
        </form>

        {showModal && (
            <Modal message={modalMessage} onClose={() => setShowModal(false)} />
            )}
        </>
    );
}

export default StudentForm;
