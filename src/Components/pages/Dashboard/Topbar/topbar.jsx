import React from "react";
import styles from './topbar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBookOpen, faLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';

const Topbar = ({ item, changeItem, visibilityCheck }) => {

    return (
        <div className={styles.topbarContainer}>
            <div className={item === 'about' || (visibilityCheck.isAboutVisible || visibilityCheck.isDashBoardVisible) ? `${styles.topbarIconContainer} ${styles.activeIcon}` : styles.topbarIconContainer} onClick={() => changeItem('about')}>
                <FontAwesomeIcon icon={faUser} className={styles.topbarIcon}/>
                <p className={styles.topbarP}>About</p>
            </div>
            <div className={item === 'resume' || visibilityCheck.isResumeVisible ? `${styles.topbarIconContainer} ${styles.activeIcon}` : styles.topbarIconContainer} onClick={() => changeItem('resume')}>
                <FontAwesomeIcon icon={faBookOpen} className={styles.topbarIcon}/>
                <p className={styles.topbarP}>Resume</p>
            </div>
            <div className={item === 'projects' || visibilityCheck.isProjectVisible ? `${styles.topbarIconContainer} ${styles.activeIcon}` : styles.topbarIconContainer} onClick={() => changeItem('projects')}>
                <FontAwesomeIcon icon={faLaptop} className={styles.topbarIcon}/>
                <p className={styles.topbarP}>Projects</p>
            </div>
            <div className={item === 'contact' || visibilityCheck.isContactVisible ? `${styles.topbarIconContainer} ${styles.activeIcon}` : styles.topbarIconContainer} onClick={() => changeItem('contact')}>
                <FontAwesomeIcon icon={faPhone} className={styles.topbarIcon}/>
                <p className={styles.topbarP}>Contact</p>
            </div>
        </div>
    )
}

export default Topbar;
