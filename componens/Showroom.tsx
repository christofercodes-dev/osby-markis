import React from 'react';
import styles from './Showroom.module.css';

const Showroom = () => {
  const projects = [
    { id: 1, title: 'Sommarresidens, Gotland', src: '/images/markis.webp' },
    { id: 2, title: 'Terrass i etage, Malmö', src: '/images/markis3.jpg' },
    { id: 3, title: 'Arkitektvilla, Täby', src: '/images/markis2.webp' },
    { id: 4, title: 'Morgonljus, Båstad', src: '/images/markis4.jpg' },
  ];

  return (
    <section id='inspo' className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p>Låt dig inspireras</p>
          <h1>Vardagens vackraste ljus.</h1>
        </header>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.item}>
              <img src={project.src} alt={project.title} className={styles.image} />
              <div className={styles.overlay}>
                <span className={styles.caption}>{project.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showroom;