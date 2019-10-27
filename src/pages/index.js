import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Home from "../components/home/home";

class RootIndex extends React.Component {
  render() {
    const showReal = get(this, 'props.data.allContentfulShowreal')


    console.log('posts', )

    return (
      <Layout footer location={this.props.location} >
        <Home showReal={showReal && showReal.edges[0].node}/>
      </Layout>
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
              tracedSVG
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
