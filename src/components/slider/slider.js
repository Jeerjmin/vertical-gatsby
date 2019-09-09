import React from 'react';
import styles from './slider.module.css'
import Img from "gatsby-image";

export default class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.containerRef = React.createRef()
    }

    componentDidMount() {

    }


    toScrollRight = () => {
        this.containerRef.current.scroll({top: 0, left: this.containerRef.current.scrollLeft + 360, behavior: 'smooth'})
        console.log(' this.containerRef.current.scrollLeft',  this.containerRef.current.scrollLeft)
    };

    toScrollLeft = () => {
        this.containerRef.current.scroll({top: 0, left: this.containerRef.current.scrollLeft - 360, behavior: 'smooth'})
    };


    render() {

        return (
            <div className={styles.container} >
                <div ref={this.containerRef} className={styles.slider}>

                    {this.props.designItems && this.props.designItems.map(item => {
                        return (
                            <Img key={item.node.id} className={styles.sliderImage} alt={item.node.name} fluid={item.node.image.fluid} />
                        )
                    })}

                </div>
                <button onClick={this.toScrollLeft} >Left</button>
                <button onClick={this.toScrollRight} >Right</button>
            </div>
        )
    }
}