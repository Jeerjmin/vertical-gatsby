const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const buildingPage = path.resolve('./src/templates/building.js')
    const designPage = path.resolve('./src/templates/design.js')

    resolve(
      graphql(
        `
          {
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
            
         
            allContentfulDesignItem {
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
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const buildings = result.data.allContentfulBuildingItem.edges
        const designs = result.data.allContentfulDesignItem.edges

        buildings.forEach((building, index) => {
          createPage({
            path: `/building/${building.node.id}/`,
            component: buildingPage,
            context: {
              type: 'template',
              item: building.node
            }
          })
        })
        designs.forEach((design, index) => {
          createPage({
            path: `/design/${design.node.id}/`,
            component: designPage,
            context: {
              type: 'template',
              item: design.node
            }
          })
        })
      })
    )
  })
}
