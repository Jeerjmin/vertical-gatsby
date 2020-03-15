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
        const allContentfulDesignPage = get(this, 'props.data.allContentfulDesignPage');

        return (
                <Design data={[...ConstructiveDecisions, ...GeneralDesign, ...GeotechnicalSubstantiation]} titles={allContentfulDesignPage.edges[0].node} />
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
        
  allContentfulDesignPage {
    edges {
      node {
        childContentfulDesignPageFirstBlockDescriptionTextNode {
          firstBlockDescription
        }
        childContentfulDesignPageFirstBlockTitleTextNode {
          firstBlockTitle
        }
        childContentfulDesignPageMainDescriptionTextNode {
          mainDescription
        }
        childContentfulDesignPageMainTitleTextNode {
          mainTitle
        }
        childContentfulDesignPageSecondBlockDescriptionTextNode {
          secondBlockDescription
        }
        childContentfulDesignPageSecondBlockTitleTextNode {
          secondBlockTitle
        }
        childContentfulDesignPageThirdBlockDescriptionTextNode {
          thirdBlockDescription
        }
        childContentfulDesignPageThirdBlockTitleTextNode {
          thirdBlockTitle
        }
        
        firstBlockImage {
          fluid(quality: 100, maxWidth: 1720,  toFormat: JPG) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
          }
        }
        secondBlockImage {
          fluid(quality: 100, maxWidth: 1720,  toFormat: JPG) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
          }
        }
        thirdBlockImage {
          fluid(quality: 100, maxWidth: 1720,  toFormat: JPG) {
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


