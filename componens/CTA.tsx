"use client"
import React from 'react';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section className={styles.section}>
      {/* Overlay för att texten ska synas bra */}
      <div className={styles.overlay} />

      <div className={styles.container}>
        <span>Redo för nästa steg?</span>
        <h2>Skapa ett hem att längta till.</h2>
        <a href="#kontakt" className={styles.button}>
          Boka kostnadsfritt hembesök
        </a>
      </div>
    </section>
  );
};

export default CTA;