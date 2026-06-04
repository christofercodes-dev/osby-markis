"use client"
import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id='kontakt' className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          {/* Varumärke */}
          <div className={styles.brand}>
            <h2>OSBY MARKIS & PERSIENN.</h2>
            <p>
              Premium solskydd för skandinaviska hem. 
              Precision, hantverk och tidlös design sedan 1994.
            </p>
          </div>

          {/* Kolumn 1 */}
          <div className={styles.column}>
            <h4>Utforska</h4>
            <ul className={styles.links}>
              <li><Link href="/exterior">Inspiration</Link></li>
              <li><Link href="/interior">Vår vision</Link></li>
              </ul>
          </div>

          {/* Kolumn 2 */}
          <div className={styles.column}>
            <h4>Kontakt</h4>
            <ul className={styles.links}>
              <li><Link href="/kontakt">123456780</Link></li>
              <li><Link href="/kontakt">info@markis.se</Link></li>
             
            </ul>
          </div>

          {/* Kontaktformulär i Footern */}
          <div className={styles.contactColumn}>
            <h4>Boka hembesök</h4>
            <form className={styles.footerForm} onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Namn" className={styles.input} required />
              <input type="email" placeholder="E-post" className={styles.input} required />
              <select className={styles.select}>
                <option value="">Välj produkt...</option>
                <option value="markis">Markiser</option>
                <option value="persienn">Persienner</option>
                <option value="annat">Övrigt</option>
              </select>
              <textarea placeholder="Kort meddelande" className={styles.textarea} rows={2}></textarea>
              <button type="submit" className={styles.button}>Skicka förfrågan</button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            © 2026 Osby markis & persiennfabrik. All rights reserved.
          </div>
          
          {/* <div className={styles.legal}>
            <Link href="/privacy">Integritetspolicy</Link>
            <Link href="/cookies">Cookies</Link>
          </div> */}

          <div className={styles.socials}>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;