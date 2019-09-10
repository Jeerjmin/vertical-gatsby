import React from 'react'
import Layout from '../components/layout'
import Building from "../components/building/building";
import {graphql} from "gatsby";
import get from "lodash/get";

class BuildingContainer extends React.Component {
    render() {

        const buildingItems = get(this, 'props.data.allContentfulBuildingItem.edges');

        console.log('buildingItems', buildingItems)

        return (
            <Layout footer location={this.props.location} >
                <Building data={buildingItems}/>
            </Layout>
        )
    }
}

export const buildingItemQuery = graphql`
    query buildingItemQuery {
        allContentfulBuildingItem {
            edges {
                node {
                    id
                    name
                    image {
                        fluid(quality: 100, sizes: "") {
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

export default BuildingContainer


