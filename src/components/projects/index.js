import React from 'react'
import ProjectsNavigation from "./navigation";
import withLocation from "../../modules/withLocation";
import Design from './projectDesign';
import Building from './projectBuilding'
import All from './projectAll'
import styles from './projects.module.css'

class ProjectsComponent extends React.Component {


    renderSwitch(type) {


        switch(type) {
        case 'building':
            return <Building data ={this.props.buildingItems}/>;
        case 'design':
            return <Design data = {this.props.designItems} />;
        default:
            return <All building = {this.props.buildingItems} design = {this.props.designItems} />;
        }
    }

    render() {

        console.log('th', this.props)

        return (
            <div style={{ maxWidth: 1720,  margin: '0 auto'}}>
                <div className={styles.projectsWrapper}>
                    <img src="assets/projects-wrapper.jpg" alt="Наши проекты"/>
                    <p>Наши проекты</p>
                </div>
                <ProjectsNavigation />
                {this.props.param && this.renderSwitch(this.props.param.type)}
            </div>


        );
    }
}

export default withLocation(ProjectsComponent)
