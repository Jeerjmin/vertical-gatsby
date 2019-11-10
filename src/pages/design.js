import React from 'react'
import Layout from '../components/layouts'
import Design from "../components/design/design";
import {graphql} from "gatsby";
import get from "lodash/get";

class DesignContainer extends React.Component {
    render() {

        const designItems = get(this, 'props.data.allContentfulDesignItem.edges');

        console.log('designItems', designItems)

        return (
                <Design data={designItems}/>
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

export default DesignContainer


