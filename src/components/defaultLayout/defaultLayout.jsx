import { Outlet } from "react-router-dom";
import styles from './defaultLayout.module.scss'
function defaultLayout() {
    return ( 
       <>
         <header>
               
        </header>
        <div className={styles.header}>
            <h1>asdsad</h1>
            <Outlet/>
        </div>
        <footer>

        </footer>
       </>

     );
}

export default defaultLayout;