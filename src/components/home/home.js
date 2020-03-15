import React, { useState } from 'react';
import styles from './home.module.css'
import Img from "gatsby-image";
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {Link} from "gatsby";
import mouse from './mouse.svg';
import showRealPlay from './showReal-play.svg';
import homeDesign from './home-design.jpg';
import homeBuilding from './home-building.jpg';
import closeMenu from './close-menu.svg';
import pauseButton from './pause-button.svg';

import ReactPlayer from "react-player";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default ({showReal, homeLeft, homeRight}) => {

    const [video, setVideo] = useState(false);
    const [play, setPlay] = useState(true);

    const Title = () => <p className={styles.showRealTitle}>{ShowRealTitle}</p>;
    const Description = () => <p className={styles.showRealDescription}>{ShowRealDescription}</p>;

    const ShowRealTitle = showReal.childContentfulHomeTitleTextNode.title.replace(/{new_line}/g,'\n')
    const ShowRealDescription = showReal.childContentfulHomeDescriptionTextNode.description.replace(/{new_line}/g,'')

    const HomeLeftTitle = homeLeft.title.replace(/{new_line}/g,'\n')
    const HomeLeftDescription = homeLeft.description.description.replace(/{new_line}/g,'')

    const HomeRightTitle = homeRight.title.replace(/{new_line}/g,'\n')
    const HomeRightDescription = homeRight.childContentfulHomeBuildingRightDescriptionTextNode.description.replace(/{new_line}/g,'')

        return (
            <div className={styles.container}>
                {!video &&
                <div className={styles.showReal}>
                    <Img className={styles.showRealImage} alt={showReal.title} fluid={showReal.image.fluid}/>
                    <div className={styles.titleContainer}>{Title()}</div>
                    <div className={styles.descriptionContainer}>{Description()}</div>
                    <div className={styles.buttonContainer}>
                        <Link to={`/projects`}>
                            <button className={styles.showRealButton}>К ПРОЕКТАМ</button>
                        </Link>
                    </div>
                    <div className={styles.buttonContainerPlay}>
                        <img onClick={() => setVideo(true)} className={styles.showRealPlay}
                             src={showRealPlay} alt="Плэй"/>
                    </div>
                </div>
                }
                {video &&
                <div className={styles.playerContainer}>
                    <ReactPlayer
                        className={styles.player}
                        onEnded={() => setVideo(false)} url={showReal.url}
                        width='100%'
                        height='100%'
                        playing={play} />
                        <img onClick={() => setPlay(!play)}
                             className={!play ? styles.playerPlay : styles.playerPause}
                             src={play ? pauseButton : showRealPlay} alt="Плэй"/>
                        <img onClick={() => setVideo(false)} className={styles.playerClose}
                         src={closeMenu} alt="Close"/>
                </div>
                }
                <div className={styles.mouse}>
                    <img  src={mouse} alt="Скролл" />
                </div>
                <div className={styles.types}>
                    <div className={styles.design}>
                        <img src={homeDesign} alt="Проектирование" />
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className={styles.designTitle}>{HomeLeftTitle} </ScrollAnimation>
                        <div className={styles.designDescriptionContainer}>
                            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className={styles.designDescription}>
                                <p>
                                    {HomeLeftDescription}
                                </p>
                            </ScrollAnimation>
                        </div>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className={styles.buttonContainer}>
                            <Link to={`/design`}>
                                <button className={styles.designButton}>ПЕРЕЙТИ</button>
                            </Link>
                        </ScrollAnimation>
                    </div>
                    <div className={styles.building}>
                        <img src={homeBuilding} alt="Строительство" />
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className={styles.buildingTitle}>{HomeRightTitle} </ScrollAnimation>
                        <div className={styles.buildingDescriptionContainer}>
                            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className={styles.buildingDescription}>
                                <p>
                                    {HomeRightDescription}
                                </p>
                            </ScrollAnimation>
                        </div>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className={styles.buttonContainer}>
                            <Link to={`/building`}>
                                <button className={styles.buildingButton}>ПЕРЕЙТИ</button>
                            </Link>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        )



}
