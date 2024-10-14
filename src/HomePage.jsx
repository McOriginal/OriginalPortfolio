
import classes from './HomePage.module.css';

export default function HomPage(){
    return(
        <>
        <section id={classes.section}>

            <div className={classes.left}>

            <div className={classes.contente}>
                <h4>Salut !</h4>
                <h1>Je suis <span>Mohamed</span></h1>
                <p className={classes.description}>Développeur full stack</p>

                <p className={classes.profile}>
                Développeur web avec 3 ans d'expérience en freelance, spécialisé en création de sites front-end et full stack. Maîtrise des technologies HTML, CSS, JavaScript, React.js, Node.js et Flutter pour le développement d'applications Android. 
                Capable de livrer des solutions innovantes et efficaces. Toujours à la recherche de nouvelles opportunités pour enrichir ses compétences.
                </p>

                <div className={classes.box_btn}>
                    <button>Me connaître</button>
                    <button className={classes.cv}> Télécharger Mon Cv</button>
                </div>
            </div>

            </div>

            <div className={classes.right}>
                <img src="me.png" alt="cisse" />
            </div>
        </section>
        </>
    )
}