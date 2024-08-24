import React from 'react';
import styles from './projects.module.css';
import new_era from '../../../Assets/projects/new_era.png';
import tridiva from '../../../Assets/projects/tridiva.png';
import boxdelabonita from '../../../Assets/projects/box.png';

function Projects () {
    return (
        <div className={styles.projectsContainer}>
            <h3 className={styles.projectsHeaderH3}>Recent Works</h3>
            <hr className={styles.hr}/>
            <div className={styles.projectsItemContainer}>
                <a href='https://tridivait.co.uk' target='_blank' className={styles.projectsItem}>
                    <div className={styles.projectsImgContainer}>
                        <img src={tridiva} className={styles.projectsImg}/>
                    </div>
                    <div className={styles.projectsDetailsContainer}>
                        <h3 className={styles.projectsH3}>A semi-commerce web application for an IT Company</h3>
                    </div>
                </a>
                <a href='https://www.neweraglazingsolutionsltd.co.uk' target='_blank' className={styles.projectsItem}>
                    <div className={styles.projectsImgContainer}>
                        <img src={new_era} className={styles.projectsImg}/>
                    </div>
                    <div className={styles.projectsDetailsContainer}>
                        <h3 className={styles.projectsH3}>A semi-commerce web application for selling products.</h3>
                    </div>
                </a>
                <a href='https://boxdelabonita.com' target='_blank' className={styles.projectsItem}>
                    <div className={styles.projectsImgContainer}>
                        <img src={boxdelabonita} className={styles.projectsImg}/>
                    </div>
                    <div className={styles.projectsDetailsContainer}>
                        <h3 className={styles.projectsH3}>An online store for selling womens bag and purse</h3>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Projects;
