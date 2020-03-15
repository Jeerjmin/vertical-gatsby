import React from 'react';
import styles from './contacts.module.css';
import Link from "gatsby-link";
import contactsWrapper from './contacts-wrapper.jpg';

export default class Contacts extends React.Component {


    render() {
        const {contactsTitles: {phone, email, adressName, addressLink, schedule}} = this.props

        return (
            <div className={styles.container}>
                <img className={styles.imageWrapper} src={contactsWrapper} alt="Контакты"/>
                <h1 className={styles.title}>Контакты</h1>
                <div className={styles.contacts}>
                    <div className={styles.phone}>
                        <p className={styles.phoneTitle}>Телефон</p>
                        <p className={styles.phoneNumber}>{phone.phone}</p>
                    </div>
                    <div className={styles.email}>
                        <p className={styles.emailTitle}>E-mail</p>
                        <p className={styles.emailNumber}>{email.email}</p>
                    </div>
                    <div className={styles.schedule}>
                        {schedule && schedule.map(item => {
                            return <p className={styles.scheduleTitle}>{item}</p>
                        })}
                    </div>
                    <div className={styles.address}>
                        <p className={styles.addressTitle}>{adressName.adressName}</p>
                        <a href={addressLink.addressLink} className={styles.addressNumber}>Смотреть на карте</a>
                    </div>
                </div>
                <Link to={`/`}>
                    <button className={styles.buttonLink}>
                            На главную
                    </button>
                </Link>
            </div>
        )
    }
}
