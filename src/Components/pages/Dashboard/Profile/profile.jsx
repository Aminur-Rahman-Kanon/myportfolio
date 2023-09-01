import React from "react";
import styles from './profile.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import cv from '../../../../Assets/files/cv.pdf';

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
                                <a href="https://github.com/Aminur-Rahman-Kanon" target="_blank" className={styles.socialLink}>
                                    <FontAwesomeIcon icon={faGithub} className={styles.socilaIcon}/>
                                </a>
                                <a href="https://www.linkedin.com/in/aminur-rahman-kanon" target="_blank" className={styles.socialLink}>
                                    <FontAwesomeIcon icon={faLinkedin} className={styles.socilaIcon}/>
                                </a>
                                <a href="https://github.com/Aminur-Rahman-Kanon" target="_blank" className={styles.socialLink}>
                                    <FontAwesomeIcon icon={faTwitter} className={styles.socilaIcon}/>
                                </a>
                                <a href="https://stackoverflow.com/users/14519102/aminur-rahman" target="_blank" className={styles.socialLink}>
                                    <FontAwesomeIcon icon={faStackOverflow} className={styles.socilaIcon}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.downloadLinkContainer}>
                    <hr className={styles.hr}/>
                    <a href={cv} download="Aminur_Rahman_CV" new className={styles.downloadLink}>
                        <span className={styles.downloadText}>DOWNLOAD RESUME</span>
                        <FontAwesomeIcon icon={faDownload} className={styles.downloadLinkIcon}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Profile;
