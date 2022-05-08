import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return(
        <div className={styles.container}>
        <div className={styles.iner}>
            <p>Copyright &copy; 2022 | All Right Reserved</p>
            <p>Made by <span>Manish Patel</span></p>
        </div>
        </div>
    )
}

export default Footer;