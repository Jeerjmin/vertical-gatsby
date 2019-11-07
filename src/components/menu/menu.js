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
                        <span className={styles.title}>Строительство</span>
                        <div className={styles.text}>
                            <span>
                                Генеральный подряд
                            </span>
                            <span>
                                Нулевой цикл
                            </span>
                        </div>
                        <div className={styles.line}>
                        </div>
                    </Link>
                </div>
                <div className={styles.design}>
                    <Link to={`/design`}>
                        <img className={styles.image} src={prefix + "assets/menu-design.jpg"} alt="Проектирование"/>
                        <span className={styles.title}>Проектирование</span>

                        <div className={styles.text}>
                            <span>
                                Генеральное проектирование
                            </span>
                            <span>
                                Конструктивные решения
                            </span>
                            <span>
                                Геотехническое обоснование
                            </span>
                        </div>
                        <div className={styles.line}>
                        </div>
                    </Link>
                </div>
                <div className={styles.about}>
                    <Link to={`/about`}>
                        <img className={styles.image} src={prefix + "assets/menu-about.jpg"} alt="О нас"/>
                        <span className={styles.title}>О Нас</span>

                        <div className={styles.text}>
                        </div>
                        <div className={styles.line}>
                        </div>
                    </Link>
                </div>
                <div className={styles.contacts}>
                    <Link to={`/contacts`}>
                        <img className={styles.image} src={prefix + "assets/menu-contacts.jpg"} alt="Контакты"/>
                        <span className={styles.title}>Контакты</span>

                        <div className={styles.text}>

                        </div>
                        <div className={styles.line}>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
