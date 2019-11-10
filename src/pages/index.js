import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layouts'
import Home from "../components/home/home";

class RootIndex extends React.Component {
  render() {
    const showReal = get(this, 'props.data.allContentfulShowreal')


    console.log('posts', )

    return (
        <Home showReal={showReal && showReal.edges[0].node}/>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query MyQuery {
    allContentfulShowreal {
      edges {
        node {
          id
          title {
            json
          }
          descr {
            json
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
  }

`
