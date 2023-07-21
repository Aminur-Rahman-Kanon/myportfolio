import React, { useState, useEffect } from 'react';
import './App.css';
import Dahsboard from './Components/pages/Dashboard/DahsboardMain/dashboard';
import About from './Components/pages/About/about';
import Resume from './Components/pages/Resume/resume';
import Projects from './Components/pages/Projects/projects';
import Contact from './Components/pages/Contact/contact';
import Spinner from './Components/Others/Spinner/spinner';
import Modal from './Components/Others/Modal/modal';
import Topbar from './Components/pages/Dashboard/Topbar/topbar';

function App() {
  
    const [item, setItem] = useState('about');
    
    const [spinner, setSpinner] = useState(false);

    const [modal, setModal] = useState(false);

    const [status, setStatus] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const smoothScroll = (id) => {
        if (window.innerWidth <= 1080){
            document.getElementById(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'center'
            });
            setItem(id);
        }
        else {
            setItem(id);
        }
    }

    const closeModal = () => {
        setStatus('');
        setModal(false);
    }

    let displayStatusMsg = <div className="statusMsgContainer">
        <h3 className="statusMsgH3">Something went wrong</h3>
        <p className="statusMsgP">I am working to fix it</p>
        <p className="statusMsgP">Please try again a bit later</p>
        <button className="statusMsgBtn" onClick={ closeModal }>Ok</button>
    </div>;

    if (status === 'success'){
        displayStatusMsg = <div className="statusMsgContainer">
            <h3 className="statusMsgH3">Email has been sent</h3>
            <p className="statusMsgP">I will get back to ASAP</p>
            <button className="statusMsgBtn" onClick={() => window.location.reload()}>Have a Nice Day!</button>
        </div>
    }

    return (
        <>
        <Modal modal={modal}>
            {displayStatusMsg}
        </Modal>
        <Spinner spinner={spinner}/>
        <div className="App">
            <div className="topbar-container">
                <Topbar item={item} changeItem={smoothScroll}/>
            </div>
            <div className="main-element">
                <div className="static-element">
                    <Dahsboard item={item} toggleItem={ smoothScroll }/>
                </div>
                <div className="slider-element-container">
                    <div className={item === 'about' ? "slider-element show" : "slider-element"} id="about">
                        <About />
                    </div>
                    <div className={item === 'resume' ? 'slider-element show' : 'slider-element'} id="resume">
                        <Resume />
                    </div>
                    <div className={item === 'projects' ? 'slider-element show' : 'slider-element'} id="projects">
                        <Projects />
                    </div>
                    <div className={item === 'contact' ? 'slider-element show' : 'slider-element'} id="contact">
                        <Contact toggleSpinner={setSpinner} toggleModal={setModal} toggleStatus={setStatus} />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default App;
