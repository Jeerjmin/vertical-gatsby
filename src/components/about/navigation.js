import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'
import withLocation from "../../modules/withLocation";

class AboutNavigation extends React.Component {


    activeLink(type) {


    }

    render() {

        const {param} = this.props

        return (
            <div className={styles.navigation}>
                <Link className={param && param.type === 'about' || !param.type ? styles.active : styles.deactive}
                      to={`/about?type=about`}>
                    О компании
                </Link>
                <Link  className={param && param.type === 'team' ? styles.active : styles.deactive}
                       to={`/about?type=team`}>
                    Наша команда
                </Link>
                <Link  className={param && param.type === 'work'? styles.active : styles.deactive}
                       to={`/about?type=work`}>
                    Как мы работаем
                </Link>
                <Link  className={param && param.type === 'object' ? styles.active : styles.deactive}
                       to={`/about?type=object`}>
                    Объекты
                </Link>
            </div>


        );
    }
}


export default withLocation(AboutNavigation)
