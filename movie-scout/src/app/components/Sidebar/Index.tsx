import styles from './style.module.css';

import { BsLightning } from "react-icons/bs";


const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.heading}>
                <div className={styles.headingText}>
                    <h1>MovieScout</h1>
                    {/* <p>Lorem ipsum</p> */}
                </div>
                {/* <img src="" alt="Asso img" className={styles.headingImage} /> */}
            </div>
            <div className={styles.nav}>

                <div className={styles.navItems}>
                    <div className={styles.navItem}>
                        <BsLightning />
                        Trending
                    </div>
                </div>
                <div className={styles.signOut}>
                    Sign Out
                </div>
            </div>
        </div>
    );
}
 
export default Sidebar;