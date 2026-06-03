import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Bakgrundsbild med långsam zoom-animation */}
      <div className={styles.backgroundImage}>
        <img 
          src="/images/markis3.jpg" 
          alt="Exklusivt ljusinsläpp" 
        />
      </div>

      {/* Lyxigt mörker-lager (Overlay) */}
      <div className={styles.overlay} />

      <div className={styles.container}>
        {/* Varje element har en unik delay definierad i CSS */}
        <span className={styles.tagline}>Familjetradition & Expertis</span>
        
        <h1 className={styles.title}>
        Skräddarsydda lösningar för ditt unika hem. 
{/*           <span className={styles.italic}>Solskydd som håller i generationer.</span>
 */}        </h1>
        
        <div className={styles.actions}>
          <a href="#kontakt" className={styles.primaryBtn}>Boka besök</a>
          <a href="#inspo" className={styles.secondaryBtn}>Inspiration</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;