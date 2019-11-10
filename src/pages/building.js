import React from 'react'
import Layout from '../components/layouts'
import Building from "../components/building/building";
import {graphql} from "gatsby";
import get from "lodash/get";

class BuildingContainer extends React.Component {
    render() {

        const buildingItems = get(this, 'props.data.allContentfulBuildingItem.edges');

        console.log('buildingItems', buildingItems)

        return (
                <Building data={buildingItems}/>
        )
    }
}

export const buildingItemQuery2 = graphql`
    query buildingItemQuery2 {
        allContentfulBuildingItem {
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

export default BuildingContainer


