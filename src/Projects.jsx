import { useState } from 'react';
import Card from './Card';
import classes from './Projects.module.css';
import Slider from 'react-slick';

export default function Projects() {
    const [filteredProjects, setFilteredProjects] = useState(projects); // État pour les projets filtrés
    const [selectedCategory, setSelectedCategory] = useState('tous'); // État pour la catégorie sélectionnée

    const filterProjects = (category) => {
        setSelectedCategory(category); // Met à jour la catégorie sélectionnée
        if (category === 'tous') {
            setFilteredProjects(projects); // Affiche tous les projets
        } else {
            const filtered = projects.filter(project => project.categorie === category);
            setFilteredProjects(filtered); // Affiche les projets filtrés
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Nombre de slides à afficher par défaut
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [ // Ajout de la configuration responsive
            {
                breakpoint: 890, // Pour les écrans de 1024px et moins
                settings: {
                    slidesToShow: 2, // Afficher 2 slides
                }
            },
            
            {
                breakpoint: 558, // Pour les écrans de 768px et moins
                settings: {
                    slidesToShow: 1, // Afficher 1 slide
                }
            }
        ]
    };


    

    return (
        <>
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

                <div className={classes.projects}>
                    <Slider {...settings}>
                        {filteredProjects.map((item) => ( // Utilisation de filteredProjects
                            <Card key={item.id}
                            id={item.id}
                            title={item.title}
                            avatar={item.avatar}
                            link={item.link}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

const projects = [
    {
        id: 'p1',
        categorie: 'web',
        title: 'fitness',
        avatar: 'gyme.jpg',
        link: 'https://www.alibaba.com'
    },
    {
        id: 'p2',
        categorie: 'graphisme',
        title: 'clinique',
        avatar: 'clinique.jpg',
        link: 'https://www.alibaba.com'
    },
    {
        id: 'p3',
        categorie: 'app',
        title: 'moovies',
        avatar: 'movies.jpg',
        link: 'https://www.alibaba.com'
    },
    {
        id: 'p4',
        categorie: 'graphisme',
        title: 'voyage',
        avatar: 'voyage.jpg',
        link: 'https://www.alibaba.com'
    },
     {
        id: 'p5',
        categorie: 'app',
        title: 'Voiture',
        avatar: 'voiture.jpg',
        link: 'https://www.alibaba.com'
    },
 
]
