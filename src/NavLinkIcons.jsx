
import classes from './NavLinkIcons.module.css'
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";


export default function NavLinkIcons(){


    return (
        <>
        
        <menu className={classes.items}>
            <div className={classes.icon_items}>
                <div className={classes.icon_box}> <IoHome  className={classes.icon} /> </div>
                <div className={classes.icon_box}> <FaUser  className={classes.icon} /> </div>
                <div className={classes.icon_box}><FaSitemap className={classes.icon}  /> </div>
                <div className={classes.icon_box}><MdPermContactCalendar className={classes.icon}  /> </div>
            </div>
        </menu>
        </>
    )
}