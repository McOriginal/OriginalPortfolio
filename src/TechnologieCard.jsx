import classes from './Technologie.module.css';


export default function TechnologieCard({techno, icon}){

    return (
        <>
         <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src={icon} alt={techno} />
                    </div>
                    <h3>{techno} </h3>
                </div>
        </>
    )
}