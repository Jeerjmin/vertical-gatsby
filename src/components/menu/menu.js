import React from 'react';
import styles from './menu.module.css';
import Link from "gatsby-link";

export default class Menu extends React.Component {


    render() {

        const {prefix} = this.props

        return (
            <div className={styles.container}>
                <div className={styles.building}>
                    <Link to={`/building`}>
                        <img className={styles.image} src={prefix + "assets/menu-building.jpg"} alt="Строительство"/>
                    </Link>
                </div>
                <div className={styles.design}>
                    <Link to={`/design`}>
                        <img className={styles.image} src={prefix + "assets/menu-design.jpg"} alt="Проектирование"/>
                    </Link>
                </div>
                <div className={styles.about}>
                    {/*<Link to={`/about`}>*/}
                        <img className={styles.image} src={prefix + "assets/menu-about.jpg"} alt="О нас"/>
                    {/*</Link>*/}
                </div>
                <div className={styles.contacts}>
                    <Link to={`/contacts`}>
                        <img className={styles.image} src={prefix + "assets/menu-contacts.jpg"} alt="Контакты"/>
                    </Link>
                </div>
            </div>
        )
    }
}
