import classes from './AboutPage.module.css';
import { RiGalleryFill } from "react-icons/ri";
import { FaAppStoreIos } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export default function AboutPage(){

    return(
        <>
            <div className={classes.container}>
                <div className={classes.profile}>
                    <h1 className={classes.title}> Qui suis-je ?</h1>
                <p className={classes.name}>Je suis <span>Cissé Mohamed,</span> Développeur <span>web/mobile,</span> Full Stack </p>

                <p className={classes.description}>Développeur web avec 3 ans d'expérience en freelance, spécialisé en création de sites front-end et full stack. Maîtrise des technologies HTML, CSS, JavaScript, React.js, Node.js et Flutter pour le développement d'applications Android. Capable de livrer des solutions innovantes et efficaces. 
                    Toujours à la recherche de nouvelles opportunités pour enrichir ses compétences.</p>
                    
                </div>

                <div className={classes.box}>
                    <div className={classes.left}>
                        <div className={classes.boxText}>
                            <h2>3+</h2>
                            <p>ans d'expérience</p>
                        </div>
                        <div className={classes.boxText}>
                            <h2>10+</h2>
                            <p>projets réalisé</p>
                        </div>
                        <div className={classes.boxText}>
                            <h2>50+</h2>
                            <p>clients satistait</p>
                        </div>
                        <div className={classes.boxText}>
                            <h2>10K</h2>
                            <p>abonnée</p>
                        </div>
                    </div>

                    <div className={classes.right}>
                        <h3>Ce que je peux faire</h3>

                         
                            <div className={classes.content}>
                                <img src='ui.png' alt='Ui UX' className={classes.icon} />
                                <div>
                                <h4>UI UX design</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, amet.</p>
                                </div>
                            </div>
                        

                        
                            <div className={classes.content}>

                                <img src='web.png' alt='Web' className={classes.icon} />
                                <div>
                                <h4>Conception des sites web</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, amet.</p>
                                </div>
                            </div>
                        

                      
                            <div className={classes.content}>

                                <img src='app.png' alt='app' className={classes.icon} />
                                <div>
                                <h4>Conception des Application Mobile</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, amet.</p>
                                </div>
                            </div>
                        
                       

                        


                    </div>
                </div>
            </div>
        </>
    );
}
