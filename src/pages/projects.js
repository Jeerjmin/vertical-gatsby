import React from 'react'
import Layout from '../components/layouts'
import {graphql} from "gatsby";
import get from "lodash/get";
import ProjectsComponent from "../components/projects";

class ProjectsContainer extends React.Component {
    render() {

        console.log('this', this)

        const buildingItems = get(this, 'props.data.allContentfulBuildingItem.edges');
        const designItems = get(this, 'props.data.allContentfulDesignItem.edges');


        return (
                <ProjectsComponent
                    buildingItems={buildingItems}
                    designItems={designItems}
                />
        )
    }
}

export const buildingItemQuery = graphql`
    query projectsBuildingItemQuery {
        allContentfulBuildingItem {
            edges {
                node {
                    id
                    name
                    image {
                        fluid(quality: 100, sizes: "") {
                            base64
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                        }
                    }
                }
            }
        }


        allContentfulDesignItem {
            edges {
                node {
                    id
                    name
                    image {
                        fluid(quality: 100, sizes: "") {
                            base64
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                        }
                    }
                }
            }
        }
    }

`


export default ProjectsContainer


