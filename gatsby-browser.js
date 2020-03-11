import "react-image-gallery/styles/css/image-gallery.css";
import "./style.css"
import React from 'react'


export const onRouteUpdate = ({location}) => {
    anchorScroll(location);
    return true;
};

export const shouldUpdateScroll = ({
                                       routerProps: { location },
                                   }) => {
    anchorScroll(location);
    return true;
}


function anchorScroll(location){
    // Check for location so build does not fail
    if (location && location.hash) {
        setTimeout(() => {
            // document.querySelector(`${location.hash}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
            const item = document.querySelector(`${location.hash}`).offsetTop;
            const mainNavHeight = document.querySelector(`nav`).offsetHeight;
            window.scrollTo({top: item - mainNavHeight, left: 0, behavior: 'smooth'});
        }, 0);
    }
}
