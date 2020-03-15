import React from 'react'
import Layout from '../components/layouts'
import {graphql} from "gatsby";
import get from "lodash/get";
import ProjectsComponent from "../components/projects";

class ProjectsContainer extends React.Component {
    render() {

        const ConstructiveDecisions = get(this, 'props.data.allContentfulConstructiveDecisions.edges');
        const GeneralContract = get(this, 'props.data.allContentfulGeneralContract.edges');
        const GeneralDesign = get(this, 'props.data.allContentfulGeneralDesign.edges');
        const GeotechnicalSubstantiation = get(this, 'props.data.allContentfulGeotechnicalSubstantiation.edges');
        const ZeroCycle = get(this, 'props.data.allContentfulZeroCycle.edges');


        return (
                <ProjectsComponent
                    ConstructiveDecisions={ConstructiveDecisions}
                    GeneralContract={GeneralContract}
                    GeneralDesign={GeneralDesign}
                    GeotechnicalSubstantiation={GeotechnicalSubstantiation}
                    ZeroCycle={ZeroCycle}
                />
        )
    }
}

export const buildingItemQuery = graphql`
    query projectsBuildingItemQuery {
        allContentfulConstructiveDecisions {
            edges {
                node {
                    id
                    name
                    avatar {
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
        allContentfulGeneralContract {
            edges {
                node {
                    id
                    name
                    avatar {
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
        allContentfulGeneralDesign {
            edges {
                node {
                    id
                    name
                    avatar {
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
        allContentfulGeotechnicalSubstantiation {
            edges {
                node {
                    id
                    name
                    avatar {
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
        allContentfulZeroCycle {
            edges {
                node {
                    id
                    name
                    avatar {
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


