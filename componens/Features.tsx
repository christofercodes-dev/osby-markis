"use client"
import styles from './Features.module.css';

const Features = () => {
  return (
    <section id='vision' className={styles.section}>
      <div className={styles.container}>
        <div className={styles.feature}>
          <div className={styles.line}></div>
          <h3>Svenskt Hantverk</h3>
          <p>Varje solskydd tillverkas efter dina exakta mått i vår lokala fabrik, med fokus på precision och hållbarhet.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.line}></div>
          <h3>Hållbara Material</h3>
          <p>Vi använder uteslutande väderbeständiga komponenter som är testade för att klara av kalla vintrar och stark sommarsol.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.line}></div>
          <h3>Full Service</h3>
          <p>Från första konsultation till färdig montering. Vi tar hand om hela processen så att du kan njuta av resultatet.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;