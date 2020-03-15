import React from 'react'
import Layout from '../components/layouts'
import Building from "../components/building/building";
import {graphql} from "gatsby";
import get from "lodash/get";

class BuildingContainer extends React.Component {
    render() {

        const GeneralContract = get(this, 'props.data.allContentfulGeneralContract.edges');
        const ZeroCycle = get(this, 'props.data.allContentfulZeroCycle.edges');
        const allContentfulBuildingPage = get(this, 'props.data.allContentfulBuildingPage');


        return (
                <Building data={[...GeneralContract, ...ZeroCycle ]} titles={allContentfulBuildingPage.edges[0].node}/>
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
      allContentfulBuildingPage {
        edges {
          node {
            buildingDescription {
              buildingDescription
            }
            buildingTitle {
              buildingTitle
            }
            childContentfulBuildingPageBuildingDescriptionTextNode {
              buildingDescription
            }
            childContentfulBuildingPageBuildingTitleTextNode {
              buildingTitle
            }
            childContentfulBuildingPageFirstBlockDescriptionTextNode {
              firstBlockDescription
            }
            childContentfulBuildingPageFirstBlockTitleTextNode {
              firstBlockTitle
            }
            childContentfulBuildingPageSecondBlockDescriptionTextNode {
              secondBlockDescription
            }
            childContentfulBuildingPageSecondBlockTitleTextNode {
              secondBlockTitle
            }
          }
        }
      }
    }
`

export default BuildingContainer


