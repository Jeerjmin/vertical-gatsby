import React from 'react'
import Layout from '../components/layout'
import Design from "../components/design/design";
import {graphql} from "gatsby";
import get from "lodash/get";

class DesignContainer extends React.Component {
    render() {

        const designItems = get(this, 'props.data.allContentfulDesignItem.edges');

        console.log('designItems', designItems)

        return (
            <Layout footer location={this.props.location} >
                <Design data={designItems}/>
            </Layout>
        )
    }
}

export const designItemQuery = graphql`
query designItemQuery {
    allContentfulDesignItem {
        edges {
            node {
                id
                name
                image {
                    fluid(quality: 10, sizes: "") {
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

export default DesignContainer


