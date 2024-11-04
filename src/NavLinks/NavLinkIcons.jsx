import classes from './NavLinkIcons.module.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function NavLinkIcons() {
    const handleIconClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <>
        <menu className={classes.items}>
            <div className={classes.icon_items}>
                <div className={classes.icon_box} onClick={() => handleIconClick('https://wa.me/+22372115699')}> 
                    <IoLogoWhatsapp className={classes.icon} /> 
                </div>
                <div className={classes.icon_box} onClick={() => handleIconClick('https://www.linkedin.com/in/mohamed-cisse-253ab9235')}> 
                    <FaLinkedin className={classes.icon} /> 
                </div>
                <div className={classes.icon_box} onClick={() => handleIconClick('https://github.com/McOriginal')}> 
                    <FaGithub className={classes.icon} /> 
                </div>
                <div className={classes.icon_box} onClick={() => handleIconClick('mailto:amedicisse1@gmail.com')}> 
                    <MdEmail className={classes.icon} /> 
                </div>
            </div>
        </menu>
        </>
    )
}
