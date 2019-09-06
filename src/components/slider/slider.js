import React from 'react';
import sliderStyles from './slider.module.css'

export default class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.containerRef = React.createRef()
    }


    toScrollRight = () => {
        this.containerRef.current.scroll({top: 0, left: this.containerRef.current.scrollLeft + 300, behavior: 'smooth'})
    };

    toScrollLeft = () => {
        this.containerRef.current.scroll({top: 0, left: this.containerRef.current.scrollLeft - 300, behavior: 'smooth'})
    };


    render() {
        return (
            <div >
                <div ref={this.containerRef} className={sliderStyles.container}>
                    <img src='cat.jpeg' alt="Cat"/>
                    <img src='cat.jpeg' alt="Cat"/>
                    <img src='cat.jpeg' alt="Cat"/>
                    <img src='./cat.jpeg' alt="Cat"/>
                    <img src='./cat.jpeg' alt="Cat"/>
                    <img src='./cat.jpeg' alt="Cat"/>
                    <img src='./cat.jpeg' alt="Cat"/>
                    <img src='./cat.jpeg' alt="Cat"/>
                    <img src='./cat.jpeg' alt="Cat"/>
                    <img src='./cat.jpeg' alt="Cat"/>
                </div>
                <button onClick={this.toScrollLeft} >Left</button>
                <button onClick={this.toScrollRight} >Right</button>

            </div>
        )
    }
}