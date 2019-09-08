import React from 'react';
import styles from './menu.module.css';

export default class Menu extends React.Component {


    render() {


        return (
            <div className={styles.container}>
                <div className={styles.building}>
                    <img className={styles.image} src="assets/menu-building.jpg" alt="Строительство"/>
                </div>
                <div className={styles.design}>
                    <img className={styles.image} src="assets/menu-design.jpg" alt="Проектирование"/>
                </div>
                <div className={styles.about}>
                    <img className={styles.image} src="assets/menu-about.jpg" alt="О нас"/>
                </div>
                <div className={styles.contacts}>
                    <img className={styles.image} src="assets/menu-contacts.jpg" alt="Контакты"/>
                </div>
            </div>
        )
    }
}