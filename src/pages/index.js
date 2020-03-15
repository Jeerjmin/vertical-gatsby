import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layouts'
import Home from "../components/home/home";

class RootIndex extends React.Component {
  render() {
    const showReal = get(this, 'props.data.allContentfulHome')
    const homeLeft = get(this, 'props.data.allContentfulHomeDesignLeft')
    const homeRight = get(this, 'props.data.allContentfulHomeBuildingRight')

    return (
        <Home showReal={showReal && showReal.edges[0].node}
              homeLeft={homeLeft && homeLeft.edges[0].node}
              homeRight={homeRight && homeRight.edges[0].node}
        />
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query MyQuery {
  allContentfulHome {
    edges {
      node {
        id
        childContentfulHomeDescriptionTextNode {
          description
        }
        childContentfulHomeTitleTextNode {
          title
        }
        image {
            id
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
  
    allContentfulHomeBuildingRight {
    edges {
      node {
        childContentfulHomeBuildingRightDescriptionTextNode {
          description
        }
        title
      }
    }
  }
    allContentfulHomeDesignLeft {
    edges {
      node {
        title
        description {
          description
        }
      }
    }
  }
  
  }

`
