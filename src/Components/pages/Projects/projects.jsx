import React from 'react';
import styles from './projects.module.css';
import cycle from '../../../Assets/projects/cycleFix.png';
import karkhana from '../../../Assets/projects/karkhana.png';
import phone from '../../../Assets/projects/phoneClinic.png';
import nihon from '../../../Assets/projects/nihonChukoSha.png';

function Projects () {
    return (
        <div className={styles.projectsContainer}>
            <h3 className={styles.projectsHeaderH3}>Recent Works</h3>
            <hr className={styles.hr}/>
            <div className={styles.projectsItemContainer}>
                <div className={styles.projectsItem}>
                    <div className={styles.projectsImgContainer}>
                        <img src={nihon} className={styles.projectsImg}/>
                    </div>
                    <div className={styles.projectsDetailsContainer}>
                        <h3 className={styles.projectsH3}>Semi-commerce website for cars auction and parts</h3>
                    </div>
                </div>
                <div className={styles.projectsItem}>
                    <div className={styles.projectsImgContainer}>
                        <img src={phone} className={styles.projectsImg}/>
                    </div>
                    <div className={styles.projectsDetailsContainer}>
                        <h3 className={styles.projectsH3}>An online phone, tablet and laptop repair booking service</h3>
                    </div>
                </div>
                <div className={styles.projectsItem}>
                    <div className={styles.projectsImgContainer}>
                        <img src={cycle} className={styles.projectsImg}/>
                    </div>
                    <div className={styles.projectsDetailsContainer}>
                        <h3 className={styles.projectsH3}>An online bike and e-scooter repair booking service</h3>
                    </div>
                </div>
                <div className={styles.projectsItem}>
                    <div className={styles.projectsImgContainer}>
                        <img src={karkhana} className={styles.projectsImg}/>
                    </div>
                    <div className={styles.projectsDetailsContainer}>
                        <h3 className={styles.projectsH3}>An online store for selling womens casual jewelleries</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
