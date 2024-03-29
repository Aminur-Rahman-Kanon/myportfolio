import React from 'react';
import styles from './projects.module.css';
import cycle from '../../../Assets/projects/cycleFix.png';
import karkhana from '../../../Assets/projects/karkhana.png';
import phone from '../../../Assets/projects/phoneClinic.png';
import nihon from '../../../Assets/projects/nihonChukoSha.png';
import boxdelabonita from '../../../Assets/projects/box.png';

function Projects () {
    return (
        <div className={styles.projectsContainer}>
            <h3 className={styles.projectsHeaderH3}>Recent Works</h3>
            <hr className={styles.hr}/>
            <div className={styles.projectsItemContainer}>
                <a href='https://boxdelabonita.com' target='_blank' className={styles.projectsItem}>
                    <div className={styles.projectsImgContainer}>
                        <img src={boxdelabonita} className={styles.projectsImg}/>
                    </div>
                    <div className={styles.projectsDetailsContainer}>
                        <h3 className={styles.projectsH3}>An online store for selling womens bag and purse</h3>
                    </div>
                </a>
                <a href='https://karkhana.onrender.com' target='_blank' className={styles.projectsItem}>
                    <div className={styles.projectsImgContainer}>
                        <img src={karkhana} className={styles.projectsImg}/>
                    </div>
                    <div className={styles.projectsDetailsContainer}>
                        <h3 className={styles.projectsH3}>An online store for selling womens casual jewelleries</h3>
                    </div>
                </a>
                <a href='https://cyclefix.onrender.com' target='_blank' className={styles.projectsItem}>
                    <div className={styles.projectsImgContainer}>
                        <img src={cycle} className={styles.projectsImg}/>
                    </div>
                    <div className={styles.projectsDetailsContainer}>
                        <h3 className={styles.projectsH3}>An online bike and e-scooter repair booking service</h3>
                    </div>
                </a>
                <a href='https://phoneclinic.onrender.com' target='_blank' className={styles.projectsItem}>
                    <div className={styles.projectsImgContainer}>
                        <img src={phone} className={styles.projectsImg}/>
                    </div>
                    <div className={styles.projectsDetailsContainer}>
                        <h3 className={styles.projectsH3}>An online phone tablet and laptop repair booking service</h3>
                    </div>
                </a>
                <a href='https://nihonchukosha.onrender.com' target='_blank' className={styles.projectsItem}>
                    <div className={styles.projectsImgContainer}>
                        <img src={nihon} className={styles.projectsImg}/>
                    </div>
                    <div className={styles.projectsDetailsContainer}>
                        <h3 className={styles.projectsH3}>Semi commerce website for cars auction and parts</h3>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Projects;
