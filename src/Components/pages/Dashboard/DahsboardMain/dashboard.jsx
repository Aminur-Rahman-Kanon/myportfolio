import React from "react";
import styles from './dashboard.module.css';
import Topbar from "../Topbar/topbar";
import Profile from "../Profile/profile";

const Dahsboard = ({ item, toggleItem, visibilityCheckItems }) => {
    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.dashboardTopbarContainer}>
                <Topbar item={item} changeItem={toggleItem} visibilityCheck={visibilityCheckItems} />
            </div>

            <div className={styles.dashboardProfileContainer}>
                <Profile />
            </div>
        </div>
    )
}

export default Dahsboard;
