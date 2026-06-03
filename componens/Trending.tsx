import React from 'react';
import styles from './Trending.module.css';

const Trending = () => {
  const trends = [
    {
      id: 1,
      tag: "Färgtrender 2026",
      title: "Jordiga Toner",
      desc: "Vi ser ett skifte från kallt grått till varma beigea och terrakottafärgade vävar som smälter samman med naturen.",
      img: "/images/markis.webp"
    },
    {
      id: 2,
      tag: "Innovation",
      title: "Integrerad Belysning",
      desc: "Ljuslister i markisarmarna förlänger sommarkvällen och skapar en arkitektonisk atmosfär efter solnedgången.",
      img: "/images/markis4.jpg"
    },
    {
      id: 3,
      tag: "Livsstil",
      title: "In-out Living",
      desc: "Gränsen mellan ute och inne suddas ut. Vertikala screengardiner är årets mest efterfrågade lösning för stora glaspartier.",
      img: "/images/markis3.jpg"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>Trending Now.</h2>
          <p>En inblick i framtidens solskydd och modern skandinavisk exteriördesign.</p>
        </header>

        <div className={styles.grid}>
          {trends.map((trend) => (
            <div key={trend.id} className={styles.trendCard}>
              <div className={styles.imageBox}>
                <img src={trend.img} alt={trend.title} />
              </div>
              <div className={styles.content}>
                <span className={styles.tag}>{trend.tag}</span>
                <h3>{trend.title}</h3>
                <p>{trend.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;