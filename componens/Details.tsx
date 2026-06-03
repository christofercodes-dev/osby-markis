import React from 'react';
import styles from './Details.module.css';

const Details = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.imageSide}>
          <img 
            src="/images/material-main.webp" 
            alt="Närbild på väv" 
            className={styles.mainImg} 
          />
          <img 
            src="/images/material-zoom.webp" 
            alt="Mekanisk detalj" 
            className={styles.detailImg} 
          />
        </div>

        <div className={styles.textSide}>
          <span>Kvalitet i varje fiber</span>
          <h2>Skapad för det nordiska klimatet.</h2>
          
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <h4>Akrylväv från Sandatex</h4>
              <p>Genomfärgad spinnakryl som behåller sin lyster år efter år, oavsett solmängd eller regn.</p>
            </div>
            
            <div className={styles.featureItem}>
              <h4>Precisionsgjuten aluminium</h4>
              <p>Komponenter i pulverlackerad aluminium som tål saltstänk och fukt utan att korrodera.</p>
            </div>

            <div className={styles.featureItem}>
              <h4>Sömlös Automatik</h4>
              <p>Integrerade sensorer som känner av vindstyrka och solljus för en helt bekymmersfri användning.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Details;