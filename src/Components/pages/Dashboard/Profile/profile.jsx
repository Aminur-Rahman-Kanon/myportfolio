import React from "react";
import styles from './profile.module.css';
import person from '../../../../Assets/person.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import cv from '../../../../Assets/files/Aminur Rahman.docx';

const Profile = () => {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.borderContainer}></div>
            <div className={styles.profileAvatarContainer}>
                <div className={styles.profileAvatar}>
                    <div className={styles.profileAvatarImgContainer}>
                        {/* <img src={person} className={styles.profileImg}/> */}
                    </div>
                    <div className={styles.profileAvatarDetailsContainer}>
                        <div className={styles.profileDetails}>
                            <h1 className={styles.profileh1}>Aminur Rahman</h1>
                            {/* <h4 className={styles.profileh4}>Frontend Developer</h4> */}
                            <h4 className={styles.profileh4}>MERN Stack Developer</h4>
                            <div className={styles.profileSocialLinkContainer}>
                                <FontAwesomeIcon icon={faGithub} className={styles.socilaIcon}/>
                                <FontAwesomeIcon icon={faLinkedin} className={styles.socilaIcon}/>
                                <FontAwesomeIcon icon={faTwitter} className={styles.socilaIcon}/>
                                <FontAwesomeIcon icon={faStackOverflow} className={styles.socilaIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.downloadLinkContainer}>
                    <hr className={styles.hr}/>
                    <a href={cv} download className={styles.downloadLink}>
                        <span className={styles.downloadText}>DOWNLOAD RESUME</span>
                        <FontAwesomeIcon icon={faDownload} className={styles.downloadLinkIcon}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Profile;
