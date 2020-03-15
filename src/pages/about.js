import React from 'react'
import Layout from '../components/layouts'
import AboutComponent from "../components/about";
import {graphql} from "gatsby";
import get from "lodash/get";

class AboutContainer extends React.Component {
    render() {

        const allContentfulAboutCompany = get(this, 'props.data.allContentfulAboutCompany.edges');
        const allContentfulAboutDocuments = get(this, 'props.data.allContentfulAboutDocuments.nodes');
        const allContentfulAboutOurTeam = get(this, 'props.data.allContentfulAboutOurTeam.nodes');

        return (
                <AboutComponent aboutCompanyTitles={allContentfulAboutCompany}
                                aboutDocuments={allContentfulAboutDocuments}
                                aboutOurTeamTitles={allContentfulAboutOurTeam}/>
        )
    }
}

export const buildingItemQuery = graphql`
    query aboutItemQuery {
      allContentfulAboutCompany {
        edges {
          node {
            description {
              description
            }
            firstBlockText {
              firstBlockText
            }
            secondBlockText {
              secondBlockText
            }
            notification {
              notification
            }
            thirdBlockText {
              thirdBlockText
            }
            secondTitle {
                secondTitle
            }
            title {
              title
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
      
    allContentfulAboutDocuments {
        nodes {
          filesLinks
          filesNames
          title {
            title
          }
          description {
            description
          }
        }
    }
    
  allContentfulAboutOurTeam {
    nodes {
      title {
        title
      }
      description {
        description
      }
      secondTitle {
        secondTitle
      }
      secondBlockText {
        secondBlockText
      }
      notification {
        notification
      }
      firstBlockText {
        firstBlockText
      }
      thirdBlockText {
        thirdBlockText
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
    `

export default AboutContainer


