import React from 'react'
import Layout from '../components/layouts'
import Design from "../components/design/design";
import {graphql} from "gatsby";
import get from "lodash/get";

class DesignContainer extends React.Component {
    render() {

        const ConstructiveDecisions = get(this, 'props.data.allContentfulConstructiveDecisions.edges');
        const GeneralDesign = get(this, 'props.data.allContentfulGeneralDesign.edges');
        const GeotechnicalSubstantiation = get(this, 'props.data.allContentfulGeotechnicalSubstantiation.edges');

        console.log('designItems', this.props)

        return (
                <Design data={[...ConstructiveDecisions, ...GeneralDesign, ...GeotechnicalSubstantiation]}/>
        )
    }
}

export const designItemQuery = graphql`
query designItemQuery {
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
}

`

export default DesignContainer


