import React from 'react'

import Container from '../container'
import Header from '../header/header'
import Footer from "../footer/footer";
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";
import withLocation from "../../modules/withLocation";
import {graphql, useStaticQuery} from "gatsby";
import get from "lodash/get";

export default ({ location, children, footer, template, pageContext }) => {

    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

      const data = useStaticQuery(
          graphql`
query layoutsItemQuery {
    allContentfulContacts {
        nodes {
            phone {
                phone
            }
            email {
                email
            }
        }
    }
}
    `
      )

      const {phone, email} = data.allContentfulContacts.nodes[0]

      const childrenWithLocation = React.cloneElement(
        <>
          {children}
          {location && location.pathname !== '/contacts' && <Footer phone={phone.phone} email={email.email} template={template} /> }
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

