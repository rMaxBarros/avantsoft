import Header from "../components/Header";
import StudentForm from "../components/StudentForm";
import styles from './Home.module.css';

function Home() {
    return (
        <div>
            <Header />
            <section className={styles.mainContent}>
                <h1 className={styles.title}>Register the Student's name and grade below</h1>
                <StudentForm />
            </section>
        </div>
    );
}

export default Home;