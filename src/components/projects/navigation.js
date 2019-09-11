import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'
import withLocation from "../../modules/withLocation";
import Building from "./projectBuilding";
import Design from "./projectDesign";
import classNames from 'classnames';

class ProjectsNavigation extends React.Component {


    activeLink(type) {


    }

    render() {

        const {param} = this.props

        return (
            <div className={styles.navigation}>
                <Link className={param && param.type === 'design' ? styles.active : styles.deactive}
                      to={`/projects?type=design`}>
                    Проектирование
                </Link>
                <Link  className={param && param.type === 'building' ? styles.active : styles.deactive}
                       to={`/projects?type=building`}>
                    Строительство
                </Link>
                <Link  className={param && param.type !== 'design' && param.type !== 'building' ? styles.active : styles.deactive}
                       to={`/projects`}>
                    Все проекты
                </Link>
            </div>


        );
    }
}


export default withLocation(ProjectsNavigation)
