import classes from './HomePage.module.css';
import NavLinkIcons from '../NavLinks/NavLinkIcons';


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { FaDownload } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { BiSolidShow } from "react-icons/bi";
import { IoEyeOff } from "react-icons/io5";



export default function HomePage() {
    const navigate = useNavigate();
    const [show, setShow] = useState(true);

    const AboutMe = () => {
        navigate('/dashboard');
    }

    return (
        <>
            <section id={classes.section}>
                <div className={classes.left}>
                    <div className={classes.contente}>
                        <h4>Bonjour !</h4>
                        <h1>Je suis, <span></span></h1>
                        <p className={classes.description}> Développeur full stack passionné.</p>  
                        <p className={classes.profile}>
                             avec 3 ans d'expérience en développement web et mobile, je suis spécialisé dans la création de sites front-end et full stack. Je maîtrise les technologies HTML, CSS, JavaScript, React.js, Node.js et Flutter pour le développement d'applications Android. Je suis capable de fournir des solutions innovantes et efficaces, tout en étant toujours à la recherche de nouvelles opportunités pour enrichir mes compétences.
                        </p>
                        <div className={classes.box_btn}>
                            <button onClick={AboutMe}>Qui suis-je  <FaQuestionCircle /></button>
                            <a href="cv.pdf" target='blink' download className={classes.cv}> <FaDownload /> Télécharger Mon CV</a>
                        </div>
                    </div>
                </div>
                <div className={classes.right}>
                    <img src="me.png" alt="Cissé" />
                </div>
            </section>

            {show && <NavLinkIcons /> }

            {!show &&  <BiSolidShow className='show' onClick={()=> setShow(true)} /> }

            {show && <IoEyeOff className='anshow' onClick={()=> setShow(false)} /> }

           
           
        </>
    );
}
