import React from 'react'
import Link from 'gatsby-link'
import ProjectsNavigation from "./navigation";
import withLocation from "../../modules/withLocation";

class ProjectsComponent extends React.Component {


    renderSwitch(type) {

        switch(type) {
        case 'building':
            return 'building';
        case 'design':
            return 'design';
        default:
            return 'all projects';
        }
    }

    render() {

        console.log('th', this.props)

        return (
            <div style={{ maxWidth: 1720,  margin: '0 auto'}}>
                <ProjectsNavigation />
                {this.props.param && this.renderSwitch(this.props.param.type)}
            </div>


        );
    }
}

export default withLocation(ProjectsComponent)