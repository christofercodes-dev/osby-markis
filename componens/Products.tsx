import React from 'react';
import styles from './Products.module.css';
import Link from 'next/link';

const Products = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Kort 1 */}
          <Link href="/exterior" className={styles.card}>
            <img 
              src="/images/markis.webp" 
              alt="Exteriör design" 
              className={styles.image} 
            />
            <div className={styles.overlay}>
              <div className={styles.content}>
                <h2 className={styles.title}>Exteriör.</h2>
                <p className={styles.description}>
                  Skapa ett skyddat uterum med våra robusta markiser. 
                  Svenskt hantverk designat för att möta elementen.
                </p>
              </div>
            </div>
          </Link>

          {/* Kort 2 */}
          <Link href="/interior" className={styles.card}>
            <img 
              src="/images/markis4.jpg" 
              alt="Interiör atmosfär" 
              className={styles.image} 
            />
            <div className={styles.overlay}>
              <div className={styles.content}>
                <h2 className={styles.title}>Interiör.</h2>
                <p className={styles.description}>
                  Finjustera ljusinsläppet och skapa balans inomhus 
                  med våra måttanpassade persienner och gardiner.
                </p>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Products;