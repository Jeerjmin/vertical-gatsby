import "react-image-gallery/styles/css/image-gallery.css";
import "./style.css"
import React from 'react'


export const shouldUpdateScroll = ({
                                  routerProps: { location },
                                  getSavedScrollPosition,
                              }) => {


    return false
}


export const onInitialClientRender = () => {
    // dirty fix for missing popstate listener
    const GATSBY_NAVIGATE = window.___navigate || {}

    window.addEventListener('popstate', () =>
        GATSBY_NAVIGATE(window.location.pathname, { replace: true })
    )
}
