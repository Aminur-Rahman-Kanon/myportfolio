import React from 'react';
import styles from './resume.module.css';
import bootstap from '../../../Assets/icon/bootstrap.png';
import cisco from '../../../Assets/icon/cisco.png';
import css from '../../../Assets/icon/css.png';
import express from '../../../Assets/icon/express.png';
import git from '../../../Assets/icon/git.png';
import html from '../../../Assets/icon/html.png';
import js from '../../../Assets/icon/js.png';
import mongo from '../../../Assets/icon/mongo.png';
import node from '../../../Assets/icon/node.png';
import python from '../../../Assets/icon/python.png';
import react from '../../../Assets/icon/react.png';
import sql from '../../../Assets/icon/sql.png';
import vs from '../../../Assets/icon/vs.png';
import udemy from '../../../Assets/icon/udemy.png';
import freeCodeCamp from '../../../Assets/icon/freecodecamp.png';
import certificate from '../../../Assets/icon/certificate.png';

function Resume () {
    return (
        <div className={styles.resumeContainer}>
            <div className={styles.skillContainer}>
                <h3 className={styles.resumeH3}>Education</h3>
                <hr className={styles.hr}/>
                <div className={styles.skillsItems} style={{justifyContent: 'flex-start'}}>
                    <div className={styles.educationItem}>
                        <span className={styles.label}>2012</span>
                        <img src={certificate} alt="education" className={styles.educationItemIcon}/>
                        <h3 className={styles.educationH3}>Bachelor of Science</h3>
                        <p className={styles.educationP}>Science</p>
                    </div>
                    <div className={styles.educationItem}>
                        <span className={styles.label}>2009</span>
                        <img src={certificate} alt="education" className={styles.educationItemIcon}/>
                        <h3 className={styles.educationH3}>Higher School Certificate</h3>
                        <p className={styles.educationP}>Science</p>
                    </div>
                    <div className={styles.educationItem}>
                        <span className={styles.label}>2007</span>
                        <img src={certificate} alt="udemy" className={styles.educationItemIcon}/>
                        <h3 className={styles.educationH3}>Secondary School Certificate</h3>
                        <p className={styles.educationP}>Science</p>
                    </div>
                    <div className={styles.educationItem}>
                        <span className={styles.label}>2020</span>
                        <img src={cisco} alt="cisco" className={styles.educationItemIcon}/>
                        <h3 className={styles.educationH3}>Cisco</h3>
                        <p className={styles.educationP}>Cisco Certified Entry Network Technician</p>
                    </div>
                    <div className={styles.educationItem}>
                        <span className={styles.label}>2021</span>
                        <img src={udemy} alt="udemy" className={styles.educationItemIcon}/>
                        <h3 className={styles.educationH3}>Udemy</h3>
                        <p className={styles.educationP}>The Complete Python Bootstrap</p>
                    </div>
                    <div className={styles.educationItem}>
                        <span className={styles.label}>2021</span>
                        <img src={udemy} alt="cisco" className={styles.educationItemIcon}/>
                        <h3 className={styles.educationH3}>Udemy</h3>
                        <p className={styles.educationP}>The Complete Javascript Course</p>
                    </div>
                    <div className={styles.educationItem}>
                        <span className={styles.label}>2022</span>
                        <img src={freeCodeCamp} alt="cisco" className={styles.educationItemIcon}/>
                        <h3 className={styles.educationH3}>Free Code Camp</h3>
                        <p className={styles.educationP}>Front End Development Libraries</p>
                    </div>
                </div>
            </div>
            <div className={styles.skillContainer}>
                <h3 className={styles.resumeH3}>My Skills</h3>
                <hr className={styles.hr}/>
                <div className={styles.skillsItems}>
                    <div className={styles.skillsItem}>
                        <img src={html} className={styles.skillsItemIcon}/>
                        <p className={styles.skillsItemP}>HTML</p>
                    </div>
                    <div className={styles.skillsItem}>
                        <img src={css} className={styles.skillsItemIcon}/>
                        <p className={styles.skillsItemP}>CSS</p>
                    </div>
                    <div className={styles.skillsItem}>
                        <img src={bootstap} className={styles.skillsItemIcon}/>
                        <p className={styles.skillsItemP}>Bootstrap</p>
                    </div>
                    <div className={styles.skillsItem}>
                        <img src={js} className={styles.skillsItemIcon}/>
                        <p className={styles.skillsItemP}>Javascript</p>
                    </div>
                    <div className={styles.skillsItem}>
                        <img src={node} className={styles.skillsItemIcon}/>
                        <p className={styles.skillsItemP}>NodeJS</p>
                    </div>
                    <div className={styles.skillsItem}>
                        <img src={react} className={styles.skillsItemIcon}/>
                        <p className={styles.skillsItemP}>React</p>
                    </div>
                    <div className={styles.skillsItem}>
                        <img src={express} className={styles.skillsItemIcon}/>
                        <p className={styles.skillsItemP}>Express</p>
                    </div>
                    <div className={styles.skillsItem}>
                        <img src={mongo} className={styles.skillsItemIcon}/>
                        <p className={styles.skillsItemP}>MongoDB</p>
                    </div>
                    <div className={styles.skillsItem}>
                        <img src={sql} className={styles.skillsItemIcon}/>
                        <p className={styles.skillsItemP}>SQL</p>
                    </div>
                    <div className={styles.skillsItem}>
                        <img src={python} className={styles.skillsItemIcon}/>
                        <p className={styles.skillsItemP}>Python</p>
                    </div>
                    <div className={styles.skillsItem}>
                        <img src={git} className={styles.skillsItemIcon}/>
                        <p className={styles.skillsItemP}>Git</p>
                    </div>
                    <div className={styles.skillsItem}>
                        <img src={vs} className={styles.skillsItemIcon}/>
                        <p className={styles.skillsItemP}>VS Code</p>
                    </div>
                    <div className={styles.skillsItem}>
                        <img src={cisco} className={styles.skillsItemIcon}/>
                        <p className={styles.skillsItemP}>CCENT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;
