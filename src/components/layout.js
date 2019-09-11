import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Header from './header/header'
import Footer from "./footer/footer";

class Template extends React.Component {
  render() {
    const { location, children, footer, template } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    console.log('_ffff',  __PATH_PREFIX__)

    return (
      <Container>
        <Header template={template} />
        {children}
        {footer && <Footer template={template} /> }
      </Container>
    )
  }
}

export default Template
