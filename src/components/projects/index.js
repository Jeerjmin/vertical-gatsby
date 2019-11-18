import React from 'react'
import ProjectsNavigation from "./navigation";
import withLocation from "../../modules/withLocation";
import Design from './projectDesign';
import Building from './projectBuilding'
import All from './projectAll'
import styles from './projects.module.css'
import projectsWrapper from './projects-wrapper.jpg';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import './styles.css';


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

        return (
            <div style={{ width: '100%',  margin: '0 auto'}}>
                <div className={styles.projectsWrapper}>
                    <img src={projectsWrapper} alt="Наши проекты"/>
                    <p>Наши проекты</p>
                </div>
                <ProjectsNavigation />
                <TransitionGroup>
                    <CSSTransition
                        key={this.props.param.type}
                        classNames={"slide-back"}
                        timeout={{ enter: 500, exit: 500 }}
                    >
                    {this.props.param && this.renderSwitch(this.props.param.type)}
                    </CSSTransition>
                </TransitionGroup>
            </div>


        );
    }
}

export default withLocation(ProjectsComponent)
