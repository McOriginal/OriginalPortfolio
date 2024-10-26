import classes from './Contact.module.css';
import BoxCard from './BoxCard';
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";


export default function Contact(){

    return (
        <>
        <div className='container'>
            <h1 className="title"> Contact</h1>

            <p className={classes.text}>Prenez juste <span>10 secondes</span> pour commander votre service.</p>

            <div className={classes.box}>
                <BoxCard
                type={"Site web"}
                description={"Création de sites web sur mesure."}
                price1={"100 000"}
                price2={"152"}
                />

                <BoxCard
                type={"Application mobile"}
                description={"Développement d'applications mobiles innovantes."}
                price1={"150 000"}
                price2={"228"}
                />
            </div>

            <div className={classes.adress}>
                <div className={classes.item}>
                    <div className={classes.boxIcon}>
                    <FaPhone className={classes.icon} />

                    </div>
                    <h4> <span>+223</span> 72 11 56 99</h4>
                </div>


                <div className={classes.item}>
                    <div className={classes.boxIcon}>
                    <MdEmail className={classes.icon} />

                    </div>
                    <h4> <span>Email:</span> amedicisse1@gmail.com</h4>
                </div>


                <div className={classes.item}>
                    <div className={classes.boxIcon}>
                    <FaMapMarkerAlt className={classes.icon} />

                    </div>
                    <h4> <span>Domicile:</span> Kabala, zone universitaire</h4>
                </div>
            </div>
        </div>
        </>
    );
}
