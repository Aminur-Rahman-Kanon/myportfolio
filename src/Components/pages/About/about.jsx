import React from 'react';
import styles from './about.module.css';
import developement from '../../../Assets/icon/development.svg';
import design from '../../../Assets/icon/design.svg';
import responsive from '../../../Assets/icon/responsive.svg';
import testing from '../../../Assets/icon/testing.svg';

function About () {
    return (
        <div className={styles.aboutContaner}>
            <div className={styles.aboutDetailsContainer}>
                <h3 className={styles.aboutH3}>About Me</h3>
                <hr className={styles.hr}/>
                <div className={styles.aboutDetails}>
                    <p className={styles.aboutP}><strong>Hello, I'm Md Aminur Rahman.</strong> A frontend developer specializing in user-friendly websites using the MERN stack. With 4+ years of experience in HTML, CSS, JavaScript, and the MERN (MongoDB, Express.js, React, Node.js) stack, transforming design mockups into pixel-perfect sites.</p>
                    <p className={styles.aboutP}>I prioritize the user experience, staying up to date with the latest trends and best practices. Collaboration is key, and I enjoy working closely with designers and developers to deliver seamless interfaces.</p>
                    <p className={styles.aboutP}>Clean code architecture and problem-solving are my strengths. I strive for scalability and maintainability in every project. Continuous learning is important to me, and I stay engaged with online communities and conferences.</p>
                    <p className={styles.aboutP}>Let's discuss how I can contribute to your projects and create exceptional user experiences together !</p>
                    <br />
                    <div className={styles.contactDetailsGroup}>
                        <div className={styles.contactDetailsItem}>
                            <span className={styles.contactLabel}>Age:</span>
                            <p className={styles.contactItem}>31 Years</p>
                        </div>
                        <div className={styles.contactDetailsItem}>
                            <span className={styles.contactLabel}>Country:</span>
                            <p className={styles.contactItem}>United Kingdom</p>
                        </div>
                        <div className={styles.contactDetailsItem}>
                            <span className={styles.contactLabel}>Email:</span>
                            <p className={styles.contactItem}>kanon754@gmail.com</p>
                        </div>
                        <div className={styles.contactDetailsItem}>
                            <span className={styles.contactLabel}>Phone:</span>
                            <p className={styles.contactItem}>+447510268021</p>
                        </div>
                        <div className={styles.contactDetailsItem}>
                            <span className={styles.contactLabel}>Freelance:</span>
                            <p className={styles.contactItem}>Available</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.aboutDetailsContainer}>
                <h3 className={styles.aboutH3}>My Services</h3>
                <hr className={styles.hr}/>
                <div className={styles.servicesContainer}>
                    <div className={styles.serviceItem}>
                        <img src={developement} className={styles.serviceIcon}/>
                        <h3 className={styles.serviceH3}>Web Development</h3>
                        <p className={styles.serviceP}>Modern and mobile-ready website that will help you reach all of your marketing.</p>
                    </div>
                    <div className={styles.serviceItem}>
                        <img src={design} className={styles.serviceIcon}/>
                        <h3 className={styles.serviceH3}>Web Design</h3>
                        <p className={styles.serviceP}>I will design & develop a Profesional, Creative, Full Responsive Website.</p>
                    </div>
                    <div className={styles.serviceItem}>
                        <img src={responsive} className={styles.serviceIcon}/>
                        <h3 className={styles.serviceH3}>Responsive Design</h3>
                        <p className={styles.serviceP}>I follow the mobile first approach for responsive design so every pixels of the website are well organised and perfectly fits every corner.</p>
                    </div>
                    <div className={styles.serviceItem}>
                        <img src={testing} className={styles.serviceIcon}/>
                        <h3 className={styles.serviceH3}>Software Testing</h3>
                        <p className={styles.serviceP}>I carefully test every single function of the website so before shipping its completey bug free</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
