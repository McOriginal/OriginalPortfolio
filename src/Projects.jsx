import { useState } from 'react';
import Card from './Card';
import classes from './Projects.module.css';
import { FaWindowClose } from "react-icons/fa";
import projects from './ListProjects';

export default function Projects() {
    const [filteredProjects, setFilteredProjects] = useState(projects); // État pour les projets filtrés
    const [selectedCategory, setSelectedCategory] = useState('tous'); // État pour la catégorie sélectionnée
    const [openDialog, setOpenDialog] = useState(false);
    
    const filterProjects = (category) => {
        setSelectedCategory(category); // Met à jour la catégorie sélectionnée

        if (category === 'tous') {
            setFilteredProjects(projects); // Affiche tous les projets
        } else {
            const filtered = projects.filter(project => project.categorie === category);
            setFilteredProjects(filtered); // Affiche les projets filtrés
        }
       setOpenDialog(true)
    };


    return (
        <>

        {openDialog && (
                    <div className={classes.modal} onClick={()=> setOpenDialog(false)}> 
                   
                        <div className={classes.projects}>
                             {
                             filteredProjects.map((item) => ( // Utilisation de filteredProjects
                            <Card key={item.id}
                            id={item.id}
                            title={item.title}
                            avatar={item.avatar}
                            link={item.link}
                            />
                        ))}
                        </div>

                         <FaWindowClose className={classes.close} onClick={()=> setOpenDialog(false)} />
                    </div>
                )}
        
            <div className='container'>
                <h1 className='title'> Projects</h1>
                <p className={classes.text}>Explorer mes projets réalisés durant mes expériences</p>

                <div className={classes.boxBtn}>
                    <button 
                        className={selectedCategory === 'tous' ? classes.active : ''} 
                        onClick={() => filterProjects('tous')}
                    >
                        Tous
                    </button>
                    <button 
                        className={selectedCategory === 'web' ? classes.active : ''} 
                        onClick={() => filterProjects('web')}
                    >
                        Site web
                    </button>
                    <button 
                        className={selectedCategory === 'app' ? classes.active : ''} 
                        onClick={() => filterProjects('app')}
                    >
                        Application Mobile
                    </button>
                    <button 
                        className={selectedCategory === 'graphisme' ? classes.active : ''} 
                        onClick={() => filterProjects('graphisme')}
                    >
                        Graphisme
                    </button>
                </div>
                   
               
            </div>
        </>
    );
}
