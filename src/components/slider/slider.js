import React from 'react';
import styles from './slider.module.css'
import Img from "gatsby-image";
import {Link} from "gatsby";
import arrowRight from './arrow-right.svg';

export default class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.containerRef = React.createRef()
    }

    componentDidMount() {

    }


    toScrollRight = () => {
        this.containerRef.current.scroll({top: 0, left: this.containerRef.current.scrollLeft + 548, behavior: 'smooth'})
        console.log(' this.containerRef.current.scrollLeft',  this.containerRef.current.scrollLeft)
    };

    toScrollLeft = () => {
        this.containerRef.current.scroll({top: 0, left: this.containerRef.current.scrollLeft - 548, behavior: 'smooth'})
    };


    render() {

        console.log('items', this.props.items)

        return (
            <div className={styles.container} >
                <div ref={this.containerRef} className={styles.slider}>

                    {this.props.items && this.props.items.map(item => {
                        return (
                            <Link key={item.node.id} to={`/${this.props.type.toLowerCase()}/${item.node.id}`}>
                                <div className={styles.sliderItem}>
                                    <Img  className={styles.sliderImage} alt={item.node.name} fluid={item.node.image.fluid} />
                                    {/*<div className={styles.info}>*/}
                                    {/*    <p className={styles.title}>{this.props.type=== 'Building' ? 'Строительство' : 'Проектирование'}</p>*/}
                                    {/*    <p className={styles.name}>{item.node.name}</p>*/}
                                    {/*</div>*/}
                                    <div className={styles.hover}>
                                        <div className={styles.hoverContainer}>
                                            <p className={styles.title}>{this.props.type=== 'Building' ? 'Строительство' : 'Проектирование'}</p>
                                            <p className={styles.name}>{item.node.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}

                </div>
                <div className={styles.sliderFooter}>
                    <div class={styles.arrows}>
                        <button className={styles.buttonArrow}>
                            <img src={arrowRight} style={{transform: 'rotate(180deg)'}} className={styles.imageArrow} onClick={this.toScrollLeft} />
                        </button>
                        <button className={styles.buttonArrow}>
                            <img src={arrowRight}  className={styles.imageArrowRight} onClick={this.toScrollRight} />
                        </button>
                    </div>
                    <Link to={`/projects?type=${this.props.type.toLowerCase()}`}>
                        <button className={styles.allProjects}>
                            Все проекты
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}
