import React from 'react'

import Container from '../container'
import Header from '../header/header'
import Footer from "../footer/footer";
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";
import withLocation from "../../modules/withLocation";

class Template extends React.Component {
  render() {
    const { location, children, footer, template, pageContext } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    console.log('_ffff',  this.props)

    const childrenWithLocation = React.cloneElement(
        <>
          {children}
          {location && location.pathname !== '/contacts' && <Footer template={template} /> }
        </>,
        { location })
    if (pageContext.type !== 'template') {
      return (
          <Container location={location}>
            <Header template={template} />
            <TransitionProvider location={location}>

                {childrenWithLocation }


            </TransitionProvider>

          </Container>


      )
    } else {
      return (
          <TransitionProvider location={location}>

              {children}

          </TransitionProvider>
      )
    }

  }
}

export default Template
