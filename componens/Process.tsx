import React from 'react';
import styles from './Process.module.css';

const Process = () => {
  const steps = [
    {
      id: "01",
      title: "Kostnadsfri konsultation",
      desc: "Vi besöker dig för att förstå ditt behov, mäta dina ytor och ge professionell rådgivning på plats."
    },
    {
      id: "02",
      title: "Måttanpassad tillverkning",
      desc: "Dina solskydd tillverkas med millimeterprecision i vår svenska fabrik med material valda för vårt klimat."
    },
    {
      id: "03",
      title: "Sömlös montering",
      desc: "Våra certifierade montörer installerar allt på plats och ser till att tekniken fungerar perfekt."
    }
  ];

  return (
    <section id='vision' className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>Vår Process</p>
          <h2>Från vision till färdig skugga.</h2>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.id} className={styles.step}>
              <span className={styles.number}>{step.id}</span>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;