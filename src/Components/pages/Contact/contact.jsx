import React, { useState, useEffect, useRef } from 'react';
import styles from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

function Contact ({toggleSpinner, toggleModal, toggleStatus}) {

    const formRef = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailValidity, setEmailValidity] = useState(true);
    const [message, setMessage] = useState('');
    const [submitBtnDisable, setSubmitBtnDisable] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (email){
                const checkAt = email.includes('@');
                const checkDot = email.includes('.com');
                if (checkAt && checkDot){
                    const domain = email.slice(email.indexOf('@')+1, email.indexOf('.com'));
                    if (domain){
                        setEmailValidity(true);
                    }
                    else {
                        setEmailValidity(false);
                    }
                }
                else {
                    setEmailValidity(false);
                }
            }
        }, 1200)

        return () => clearTimeout(timer);
    }, [email])

    useEffect(() => {
        if (name && (email && emailValidity) && message){
            setSubmitBtnDisable(false);
        }
        else {
            setSubmitBtnDisable(true);
        }
    }, [name, email, emailValidity, message]);

    const submitHandller = (e) => {
        e.preventDefault();
        toggleSpinner(true);

        try {
            emailjs.sendForm('service_yh1rqbo', 'template_aq68yod', formRef.current, 'fKTzucLUnrZtv4S0l')
            .then(res => {
                if (res.status === 200) {
                    toggleSpinner(false);
                    toggleStatus('success');
                    toggleModal(true);
                }
            })
            .catch(err => {
                toggleSpinner(false);
                toggleStatus('error');
                toggleModal(true);
            })
        } catch (error) {
            toggleSpinner(false);
            toggleStatus('error');
            toggleModal(true);
        }
    }

    return (
        <>
        <div className={styles.contactContainer}>
            <h3 className={styles.contactH3}>Contact</h3>
            <hr className={styles.hr}/>
            <div className={styles.contactDetails}>
                <p className={styles.contactP}>I would love to discuss how I can contribute to your projects or answer any questions you may have. Feel free to reach out to me through the following channels:</p>
                <p className={styles.contactP} style={{margin: '5px 0'}}><strong>Email: </strong>aminur.rahman.dev@gmail.com</p>
                <p className={styles.contactP} style={{margin: '5px 0'}}><strong>Phone: </strong>+447510268021</p>
                <p className={styles.contactP}>You can also find me on <a href='https://www.linkedin.com/in/aminur-rahman-kanon' target='_blank' className={styles.linkedin}>Linkedin</a> to connect professionally and stay updated on my latest projects and endeavors.</p>
                <p className={styles.contactP}>I look forward to hearing from you and exploring opportunities to collaborate!</p>
                <form className={styles.formContainer} ref={formRef} onSubmit={submitHandller}>
                    <div className={styles.formInputContainer}>
                        <input type='text'
                            className={styles.contactFormInput}
                            name='name'
                            placeholder='Name'
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className={styles.formInputContainer}>
                        <input type='email'
                            className={emailValidity ? styles.contactFormInput : `${styles.contactFormInput} ${styles.wrongInput}`}
                            name='email'
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={styles.formTextareaContainer}>
                        <textarea className={styles.contactFormTextarea}
                                placeholder='Message'
                                name='message'
                                maxLength="500"
                                onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <button disabled={submitBtnDisable} className={styles.submitBtn}>
                        <p className={styles.btnP}>SEND MESSAGE</p>
                        <FontAwesomeIcon icon={faPaperPlane} className={styles.btnIcon}/>
                    </button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Contact;
