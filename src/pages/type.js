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

        const allContentfulDesignFirstBlockPage = get(this, 'props.data.allContentfulDesignFirstBlockPage.edges');
        const allContentfulDesignSecondPage = get(this, 'props.data.allContentfulDesignSecondPage');
        const allContentfulDesignThirdPage = get(this, 'props.data.allContentfulDesignThirdPage');
        const allContentfulBuildingFirstBlock = get(this, 'props.data.allContentfulBuildingFirstBlock.edges');
        const allContentfulBuildingSecondBlock = get(this, 'props.data.allContentfulBuildingSecondBlock.edges');

        const {type} = this.props.param

        return (
                <TypeComponent
                    ConstructiveDecisions={ConstructiveDecisions}
                    GeneralContract={GeneralContract}
                    GeneralDesign={GeneralDesign}
                    GeotechnicalSubstantation={GeotechnicalSubstantation}
                    ZeroCycle={ZeroCycle}
                    type={type}
                    firstBlockTitles={allContentfulDesignFirstBlockPage[0].node}
                    secondBlockTitles={allContentfulDesignSecondPage.nodes[0]}
                    thirdBlockTitles={allContentfulDesignThirdPage.nodes[0]}
                    firstBlockBuildingTitles={allContentfulBuildingFirstBlock[0].node}
                    secondBlockBuildingTitles={allContentfulBuildingSecondBlock[0].node}
                />
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
        
  allContentfulDesignFirstBlockPage {
    edges {
      node {
        childContentfulDesignFirstBlockPageDescriptionTextNode {
          description
        }
        childContentfulDesignFirstBlockPageFirstBlockTextTextNode {
          firstBlockText
        }
        childContentfulDesignFirstBlockPageNotificationTextNode {
          notification
        }
        childContentfulDesignFirstBlockPageSecondBlockTextTextNode {
          secondBlockText
        }
        childContentfulDesignFirstBlockPageTitleParagraphTextNode {
          titleParagraph
        }
        childContentfulDesignFirstBlockPageTitleTextNode {
          title
        }
        verticalList
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
      }
    }
  }
  
    allContentfulDesignSecondPage {
    nodes {
      childContentfulDesignSecondPageDescriptionTextNode {
        description
      }
      childContentfulDesignSecondPageFirstBlockTitleTextNode {
        firstBlockTitle
      }
      childContentfulDesignSecondPageSecondBlockTitleTextNode {
        secondBlockTitle
      }
      childContentfulDesignSecondPageThirdBlockTitleTextNode {
        thirdBlockTitle
      }
      childContentfulDesignSecondPageTitleTextNode {
        title
      }
      list
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
    }
  }
  
    allContentfulDesignThirdPage {
    nodes {
      childContentfulDesignThirdPageDescriptionTextNode {
        description
      }
      childContentfulDesignThirdPageFirstBlockTextTextNode {
        firstBlockText
      }
      childContentfulDesignThirdPageNotificationTextNode {
        notification
      }
      childContentfulDesignThirdPageSecondBlockTextTextNode {
        secondBlockText
      }
      childContentfulDesignThirdPageThirdBlockTextTextNode {
        thirdBlockText
      }
      childContentfulDesignThirdPageTitleTextNode {
        title
      }
      list
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
  
    allContentfulBuildingFirstBlock {
    edges {
      node {
        description {
          description
        }
        title {
          title
        }
        firstBlock {
          firstBlock
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
      }
    }
  }
  
    allContentfulBuildingSecondBlock {
    edges {
      node {
        title {
          title
        }
        description {
          description
        }
        firstBlockText {
          firstBlockText
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
      }
    }
  }
  
}

`


export default withLocation(TypeContainer)


