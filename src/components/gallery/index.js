import React from 'react'
import './gallery.module.css'
import styles from "./gallery.module.css"

import ImageGallery from 'react-image-gallery';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openFullScreen = () => {
        this._imageGallery.fullScreen()
    };

    componentDidMount() {
        this.openFullScreen()
    };

    render() {

        const images = [
            {
                original: 'https://picsum.photos/id/1018/1000/600/',
                thumbnail: 'https://picsum.photos/id/1018/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1015/1000/600/',
                thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
            },
        ];
        return (
            <div>
                <ImageGallery ref={f => this._imageGallery = f} items={images} showFullscreenButton={false} useBrowserFullscreen={false} />
            </div>


        );
    }
}
