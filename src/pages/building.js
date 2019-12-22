import React from 'react'
import Layout from '../components/layouts'
import Building from "../components/building/building";
import {graphql} from "gatsby";
import get from "lodash/get";

class BuildingContainer extends React.Component {
    render() {

        const GeneralContract = get(this, 'props.data.allContentfulGeneralContract.edges');
        const ZeroCycle = get(this, 'props.data.allContentfulZeroCycle.edges');


        return (
                <Building data={[...GeneralContract, ...ZeroCycle ]}/>
        )
    }
}

export const buildingItemQuery2 = graphql`
    query buildingItemQuery2 {
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
    }

`

export default BuildingContainer


