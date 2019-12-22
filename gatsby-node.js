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
            allContentfulConstructiveDecisions {
              edges {
                  node {
                      id
                      name
                      address
                      area
                      works
                      about
                      customer
                      avatar {
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
                      photos {
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
            allContentfulGeneralContract {
                edges {
                    node {
                        id
                        name
                        address
                        area
                        works
                        about
                        customer
                        avatar {
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
                        photos {
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
            allContentfulGeneralDesign {
                edges {
                    node {
                        id
                        name
                        address
                        area
                        works
                        about
                        customer
                        avatar {
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
                        photos {
                            fluid(quality: 100, sizes: "") {
                                base64
                                aspectRatio
                                src
                                srcSet
                                srcWebp
                                srcSetWebp
                                sizes
                            }
                        }                }
                }
            }
            allContentfulGeotechnicalSubstantiation {
                edges {
                    node {
                        id
                        name
                        address
                        area
                        works
                        about
                        customer
                        avatar {
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
                        photos {
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
            allContentfulZeroCycle {
                edges {
                    node {
                        id
                        name
                        address
                        area
                        works
                        about
                        customer
                        avatar {
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
                        photos {
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
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }


        const buildings = [...result.data.allContentfulGeneralContract.edges, ...result.data.allContentfulZeroCycle.edges ]
        const designs = [...result.data.allContentfulGeotechnicalSubstantiation.edges, ...result.data.allContentfulGeneralDesign.edges, ...result.data.allContentfulConstructiveDecisions.edges ]

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
