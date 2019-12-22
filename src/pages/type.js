import React from 'react'
import Layout from '../components/layouts'
import TypeComponent from '../components/type/type';
import withLocation from "../modules/withLocation";
import get from "lodash/get";
import {graphql} from "gatsby";

class TypeContainer extends React.Component {
    render() {


        const ConstructiveDecisions = get(this, 'props.data.allContentfulConstructiveDecisions.edges');
        const GeneralContract = get(this, 'props.data.allContentfulGeneralContract.edges');
        const GeneralDesign = get(this, 'props.data.allContentfulGeneralDesign.edges');
        const GeotechnicalSubstantation = get(this, 'props.data.allContentfulGeotechnicalSubstantiation.edges');
        const ZeroCycle = get(this, 'props.data.allContentfulZeroCycle.edges');


        const {type} = this.props.param

        return (
                <TypeComponent
                    ConstructiveDecisions={ConstructiveDecisions}
                    GeneralContract={GeneralContract}
                    GeneralDesign={GeneralDesign}
                    GeotechnicalSubstantation={GeotechnicalSubstantation}
                    ZeroCycle={ZeroCycle}
                    type={type}/>
        )
    }
}


export const buildingItemQuery = graphql`
    query buildingItemQuery {
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


export default withLocation(TypeContainer)


