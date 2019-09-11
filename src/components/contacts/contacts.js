import React from 'react';
import styles from './contacts.module.css';
import Link from "gatsby-link";

export default class Contacts extends React.Component {


    render() {


        return (
            <div className={styles.container}>
                <img className={styles.imageWrapper} src="assets/contacts-wrapper.jpg" alt="Контакты"/>
                <h1 className={styles.title}>Контакты</h1>
                <div className={styles.phone}>
                    <p className={styles.phoneTitle}>Телефон</p>
                    <p className={styles.phoneNumber}>+7 812.244.0158</p>
                </div>
                <div className={styles.email}>
                    <p className={styles.emailTitle}>E-mail</p>
                    <p className={styles.emailNumber}>info@vertical.spb.ru</p>
                </div>
                <div className={styles.schedule}>
                    <p className={styles.scheduleTitle}> Пн – Пт: 8:00 – 19:00</p>
                    <p className={styles.scheduleNumber}> Сб – Вс: Выходной</p>
                </div>
                <div className={styles.address}>
                    <p className={styles.addressTitle}>194044 г. Санкт-Петербург, ул. Выборгская, д.5, лит.А, пом. 23-Н</p>
                    <p className={styles.addressNumber}>Смотреть на карте</p>
                </div>
                <Link to={`/`}>
                    <button className={styles.buttonLink}>
                            На главную <img className={styles.arrowLink} src="assets/arrow-right.svg" alt="На главную" />
                    </button>
                </Link>
            </div>
        )
    }
}