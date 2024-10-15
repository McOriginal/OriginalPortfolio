
import classes from './Dashboard.module.css'
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { useState } from 'react';
import AboutPage from './AboutPage';



export default function Dashboard(){
  const [selectedContent, setSelectedContent] = useState(<AboutPage/> );


  function handleContent(selectedPage){
    setSelectedContent(selectedPage);
  } 

  return(
    <>
    
      <section id={classes.main}>

        <div className={classes.dashboard}>
            <div className={classes.boxImg}>
                <img src="me.png" alt="cisse Mohamed" />
            </div>

            <nav>
                <ul>
                    <li><p>Home  </p> <IoHome  className={classes.icon} /> </li>
                    <li onClick={()=> handleContent(<AboutPage /> )}><p>Qui suis-je </p> <FaUser  className={classes.icon} /></li>
                    <li onClick={()=> handleContent("Mes Projets")}><p>Projets </p> <FaSitemap className={classes.icon} /> </li>
                    <li onClick={()=> handleContent("Contacts")}><p>Contact </p> <MdPermContactCalendar className={classes.icon}  /></li>
                </ul>
            </nav>
        </div>

        <div className={classes.containerPage}>

          {selectedContent}
        </div>


    </section>

    </>
  );
}