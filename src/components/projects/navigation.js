import React from 'react'
import Link from 'gatsby-link'

export default class ProjectsNavigation extends React.Component {


    render() {


        return (
            <div style={{ maxWidth: 1720,  margin: '0 auto'}}>
                <Link to={`/projects?type=design`}>
                    Проектирование
                </Link>
                <Link to={`/projects?type=building`}>
                    Строительство
                </Link>
                <Link to={`/projects`}>
                    Все проекты
                </Link>
            </div>


        );
    }
}
