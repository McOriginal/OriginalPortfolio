import classes from './Dashboard.module.css';
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { useState } from 'react';
import AboutPage from './AboutPage';
import { TiArrowSortedUp } from "react-icons/ti";
import Contact from './Contact';
import Projects from './Projects';
import { useNavigate } from 'react-router-dom';
import NavLinkIcons from './NavLinkIcons';
import { MdDeveloperMode } from "react-icons/md";
import Technologie from './Technologie';





export default function Dashboard(){
  const [selectedContent, setSelectedContent] = useState(<AboutPage/> );
  const [hideDashboard, setHideDachboard] = useState(false);
  const [activeButton, setActiveButton] = useState('about');

  const navigate = useNavigate();

  const HomePage = ()=>{
    navigate('/');
  }


  function handleContent(selectedPage, buttonName){
    setSelectedContent(selectedPage);
    setActiveButton(buttonName);
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
                    <button className={activeButton === 'home' ? classes.active : ''} onClick={() => { HomePage(); setActiveButton('home'); }}>Accueil <IoHome className={classes.icon} /></button>
                    <button className={activeButton === 'about' ? classes.active : ''} onClick={() => handleContent(<AboutPage />, 'about')}>Qui suis-je <FaUser className={classes.icon} /></button>
                    <button className={activeButton === 'projects' ? classes.active : ''} onClick={() => handleContent(<Projects />, 'projects')}>Projets <FaSitemap className={classes.icon} /></button>
                    <button className={activeButton === 'contact' ? classes.active : ''} onClick={() => handleContent(<Contact />, 'contact')}>Contact <MdPermContactCalendar className={classes.icon} /></button>
                    <button className={activeButton === 'techno' ? classes.active : ''} onClick={() => handleContent(<Technologie />, 'techno')}>Technologie <MdDeveloperMode className={classes.icon} /></button>

                   
                </ul>
            </nav>
        </div>

        <div className={classes.containerPage}>

        <TiArrowSortedUp onClick={() => setHideDachboard(false)} className={classes.arrowRight}  size={50}/>
          {selectedContent}
        </div>

    </section>

    <NavLinkIcons />

    </>
  );
}
