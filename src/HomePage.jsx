
import { useNavigate } from 'react-router-dom';
import classes from './HomePage.module.css';
import NavLinkIcons from './NavLinkIcons';
import { FaDownload } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";



export default function HomePage(){
//  const [navigate, setNavigate] = useNavigate();

//  const  AboutMe = ()=>{
//     navigate('/dashboard');
//  }



    return(
        <>
        <section id={classes.section}>

            <div className={classes.left}>

            <div className={classes.contente}>
                <h4>Salut !</h4>
                <h1>Je suis, <span></span></h1>
                <p className={classes.description}> Développeur full stack </p>  

                <p className={classes.profile}>
                Développeur web avec 3 ans d'expérience en freelance, spécialisé en création de sites front-end et full stack. Maîtrise des technologies HTML, CSS, JavaScript, React.js, Node.js et Flutter pour le développement d'applications Android. 
                Capable de livrer des solutions innovantes et efficaces. Toujours à la recherche de nouvelles opportunités pour enrichir ses compétences.
                </p>

                <div className={classes.box_btn}>
                    <button>Qui suis-je  <FaQuestionCircle /> </button>
                    <button className={classes.cv}> <FaDownload /> Télécharger Mon Cv</button>
                </div>
            </div>

            </div>

            <div className={classes.right}>
                <img src="me.png" alt="cisse" />
            </div>
        </section>

        <NavLinkIcons />
        </>
    )
}