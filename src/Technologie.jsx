import classes from './Technologie.module.css'

import { useState } from 'react';
import { FaWindowClose } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';




export default function Technologie(){
    const [openDialog, setOpenDialog] = useState(true);
    const navigate = useNavigate();

    const handleClose = () => {
        setOpenDialog(false);
        navigate('/');
    }

    return (
        <>
         {openDialog && <div className={classes.modal} onClick={handleClose}>

            <div className={classes.boxBg}>


                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/html.png' alt='icon' />
                    </div>
                    <h3> html </h3>
                </div>
                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/css.png' alt='icon' />
                    </div>
                    <h3> css </h3>
                </div>
                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/js.png' alt='icon' />
                    </div>
                    <h3> javascript </h3>
                </div>
                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/typscript.png' alt='icon' />
                    </div>
                    <h3> typescript </h3>
                </div>
                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/boostrap.png' alt='icon' />
                    </div>
                    <h3> bootsrap </h3>
                </div>
                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/angular.png' alt='icon' />
                    </div>
                    <h3> angular </h3>
                </div>
                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/nextjs.png' alt='icon' />
                    </div>
                    <h3> nextjs </h3>
                </div>
                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/react.png' alt='icon' />
                    </div>
                    <h3> reactjs </h3>
                </div>



                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/node.png' alt='icon' />
                    </div>
                    <h3> nodejs </h3>
                </div>
                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/php.png' alt='icon' />
                    </div>
                    <h3> php </h3>
                </div>
                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/mongodb.png' alt='icon' />
                    </div>
                    <h3> mongodb </h3>
                </div>
                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/sql.png' alt='icon' />
                    </div>
                    <h3> sql </h3>
                </div>
                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/firebase.png' alt='icon' />
                    </div>
                    <h3> firebase </h3>
                </div>
                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/mysql.png' alt='icon' />
                    </div>
                    <h3> my sql </h3>
                </div>


{/* ####################################################### */}


                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/dart.png' alt='icon' />
                    </div>
                    <h3> dart </h3>
                </div>
                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/flutter.png' alt='icon' />
                    </div>
                    <h3> flutter </h3>
                </div>
                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/firebase.png' alt='icon' />
                    </div>
                    <h3> firebase </h3>
                </div>


{/* #################################### */}


                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/wordpress.png' alt='icon' />
                    </div>
                    <h3> wordpress </h3>
                </div>
                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/git.png' alt='icon' />
                    </div>
                    <h3> git </h3>
                </div>
                <div className={classes.card}>
                    <div className={classes.icon}>

                    <img src='logo/github.png' alt='icon' />
                    </div>
                    <h3> github </h3>
                </div>
               
            </div>

             <FaWindowClose className={classes.close} onClick={handleClose} />

          </div>
        }

        </>
    )
}