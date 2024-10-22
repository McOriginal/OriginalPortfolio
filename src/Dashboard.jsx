
import classes from './Dashboard.module.css'
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { useState } from 'react';
import AboutPage from './AboutPage';
import { TiArrowSortedUp } from "react-icons/ti";
import Contact from './Contact';
import Projects from './Projects';

export default function Dashboard(){
  const [selectedContent, setSelectedContent] = useState(<AboutPage/> );
  const [hideDashboard, setHideDachboard] = useState(false);


  function handleContent(selectedPage){
    setSelectedContent(selectedPage);
  } 

  return(
    <>
    
      <section id={classes.main}>

        <div className={classes.dashboard} id={hideDashboard ? classes.dashboard_hide : classes.dashboard_displaying}>
               
            <div className={classes.boxImg}>
                <img src="me.png" alt="cisse Mohamed" />
            </div>

              <TiArrowSortedUp className={classes.arrowLeft} onClick={()=> setHideDachboard(true)} size={50} />
              

            <nav>
                <ul>
                    <li><p>Home  </p> <IoHome  className={classes.icon} /> </li>
                    <li onClick={()=> handleContent(<AboutPage /> )}><p>Qui suis-je </p> <FaUser  className={classes.icon} /></li>
                    <li onClick={()=> handleContent(<Projects /> )}><p>Projets </p> <FaSitemap className={classes.icon} /> </li>
                    <li onClick={()=> handleContent(<Contact /> )}><p>Contact </p> <MdPermContactCalendar className={classes.icon}  /></li>
                </ul>
            </nav>
        </div>

        <div className={classes.containerPage}>

        <TiArrowSortedUp onClick={() => setHideDachboard(false)} className={classes.arrowRight}  size={50}/>
          {selectedContent}
        </div>


    </section>

    </>
  );
}