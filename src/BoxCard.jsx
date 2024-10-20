
import classes from './Contact.module.css';



export default function BoxCard({type, description, price1, price2}){

    return(
        <>
         
                <div className={classes.card}>
                    <h4>{type}</h4>
                    <p>{description}</p>
                    <h3 className={classes.price}>{price1}<span> F CFA</span>/ {price2} <span> €</span></h3>
                </div>
           
        </>
    )
}