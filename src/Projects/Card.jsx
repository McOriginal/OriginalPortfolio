
import classes from './Projects.module.css';

export default function Card({title, avatar, link}){
    return(
        <>
         <div className={classes.card}>
            <div className={classes.img}>
                <img src={avatar} alt={title} />
            </div>
                <h3>{title}</h3>
            <a target='blank' href={link}>Voir </a>
         </div>
        </>
    );
}

