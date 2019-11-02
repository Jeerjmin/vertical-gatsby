import React from 'react'
import Layout from '../components/layout'
import TypeComponent from '../components/type/type';
import withLocation from "../modules/withLocation";
import get from "lodash/get";
import {graphql} from "gatsby";

class TypeContainer extends React.Component {
    render() {


        const buildingItems = get(this, 'props.data.allContentfulBuildingItem.edges');


        const {type} = this.props.param

        return (
            <Layout footer location={this.props.location} >
                <TypeComponent data={buildingItems} type={type}/>
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


