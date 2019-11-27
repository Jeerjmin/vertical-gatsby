import React from 'react';
import styles from './menu.module.css';
import Link from "gatsby-link";
import menuBuilding from './menu-building.jpg'
import menuDesign from './menu-design.jpg'
import menuAbout from './menu-about.jpg'
import menuContacts from './menu-contacts.jpg'

export default class Menu extends React.Component {


    closeMenu() {
        document.body.style.overflow = 'unset';
        this.props.closeModal()
    }

    render() {

        const {prefix} = this.props

        return (
            <div className={styles.container}>
                <div onClick={() => this.closeMenu()} className={styles.building}>
                    <Link to={`/building`}>
                        <img className={styles.image} src={menuBuilding} alt="Строительство"/>
                        <span className={styles.title}>Строительство</span>
                        <div className={styles.text}>
                            <span>
                                <Link to={`/type?type=generalContract`}>Генеральный подряд</Link>
                            </span>
                            <span>
                                <Link to={`/type?type=zeroCycle`}>Нулевой цикл</Link>
                            </span>
                        </div>
                        <div className={styles.line}>
                        </div>
                    </Link>
                </div>
                <div onClick={() => this.closeMenu()} className={styles.design}>
                    <Link to={`/design`}>
                        <img className={styles.image} src={menuDesign} alt="Проектирование"/>
                        <span className={styles.title}>Проектирование</span>

                        <div className={styles.text}>
                            <span>
                                <Link to={`/type?type=generalDesign`}>Генеральное проектирование</Link>
                            </span>
                            <span>
                                <Link to={`/type?type=сonstructiveDecisions`}>Конструктивные решения</Link>
                            </span>
                            <span>
                                <Link to={`/type?type=geotechnicalSubstantiation`}>Геотехническое обоснование</Link>
                            </span>
                        </div>
                        <div className={styles.line}>
                        </div>
                    </Link>
                </div>
                <div onClick={() => this.closeMenu()} className={styles.about}>
                    <Link to={`/about`}>
                        <img className={styles.image} src={menuAbout} alt="О нас"/>
                        <span className={styles.title}>О Нас</span>

                        <div className={styles.text}>
                        </div>
                        <div className={styles.line}>
                        </div>
                    </Link>
                </div>
                <div onClick={() => this.closeMenu()} className={styles.contacts}>
                    <Link to={`/contacts`}>
                        <img className={styles.image} src={menuContacts} alt="Контакты"/>
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
