import React from 'react'
import Layout from '../components/layout'
import {graphql} from "gatsby";
import get from "lodash/get";
import ProjectsComponent from "../components/projects";

class ProjectsContainer extends React.Component {
    render() {

        console.log('this', this)

        const buildingItems = get(this, 'props.data.allContentfulBuildingItem.edges');
        const designItems = get(this, 'props.data.allContentfulDesignItem.edges');


        return (
            <Layout footer location={this.props.location} >
                <ProjectsComponent
                    buildingItems={buildingItems}
                    designItems={designItems}
                />
            </Layout>
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


