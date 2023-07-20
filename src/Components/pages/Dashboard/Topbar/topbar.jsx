import React from "react";
import styles from './topbar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBookOpen, faLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';

const Topbar = ({ item, changeItem }) => {
    return (
        <div className={styles.topbarContainer}>
            <div className={item === 'about' ? `${styles.topbarIconContainer} ${styles.activeIcon}` : styles.topbarIconContainer} onClick={() => changeItem('about')}>
                <FontAwesomeIcon icon={faUser} className={styles.topbarIcon}/>
                <p className={styles.topbarP}>About</p>
            </div>
            <div className={item === 'resume' ? `${styles.topbarIconContainer} ${styles.activeIcon}` : styles.topbarIconContainer} onClick={() => changeItem('resume')}>
                <FontAwesomeIcon icon={faBookOpen} className={styles.topbarIcon}/>
                <p className={styles.topbarP}>Resume</p>
            </div>
            <div className={item === 'projects' ? `${styles.topbarIconContainer} ${styles.activeIcon}` : styles.topbarIconContainer} onClick={() => changeItem('projects')}>
                <FontAwesomeIcon icon={faLaptop} className={styles.topbarIcon}/>
                <p className={styles.topbarP}>Projects</p>
            </div>
            <div className={item === 'contact' ? `${styles.topbarIconContainer} ${styles.activeIcon}` : styles.topbarIconContainer} onClick={() => changeItem('contact')}>
                <FontAwesomeIcon icon={faPhone} className={styles.topbarIcon}/>
                <p className={styles.topbarP}>Contact</p>
            </div>
        </div>
    )
}

export default Topbar;
