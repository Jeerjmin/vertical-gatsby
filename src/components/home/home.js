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

import ReactPlayer from "react-player";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default ({showReal}) => {

    const [video, setVideo] = useState(false);
    const [play, setPlay] = useState(true);

    const Title = ({ children }) => <p className={styles.showRealTitle}>{children}</p>;
    const Description = ({ children }) => <p className={styles.showRealDescription}>{children}</p>;

    const TitleOptions = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Title>{children}</Title>
        },
        renderText: text =>
            text.split("/n").flatMap((text, i) => [i > 0 && <br />, text])
    };

    const DescriptionOptions = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Description>{children}</Description>
        },
        renderText: text =>
            text.split("/n").flatMap((text, i) => [i > 0 && <br />, text])
    };

    const ShowRealTitle = documentToReactComponents(showReal.title.json, TitleOptions)
    const ShowRealDescription = documentToReactComponents(showReal.descr.json, DescriptionOptions)

        return (
            <div className={styles.container}>
                {!video &&
                <div className={styles.showReal}>
                    <Img className={styles.showRealImage} alt={showReal.title.title} fluid={showReal.image.fluid}/>
                    <div className={styles.titleContainer}>{ShowRealTitle}</div>
                    <div className={styles.descriptionContainer}>{ShowRealDescription}</div>
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
                        onEnded={() => setVideo(false)} url='https://vimeo.com/282340616'
                        width='100%'
                        height='100%'
                        playing={play} />
                        <img onClick={() => setPlay(!play)}
                             className={!play ? styles.playerPlay : styles.playerPause}
                             src={play ? `assets\\pause-button.svg` : "assets\\showReal-play.svg"} alt="Плэй"/>
                        <img onClick={() => setVideo(false)} className={styles.playerClose}
                         src="assets\close-menu.svg" alt="Close"/>
                </div>
                }
                <div className={styles.mouse}>
                    <img  src={mouse} alt="Скролл" />
                </div>
                <div className={styles.types}>
                    <div className={styles.design}>
                        <img src={homeDesign} alt="Проектирование" />
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className={styles.designTitle}>ПРОЕКТИРОВАНИЕ </ScrollAnimation>
                        <div className={styles.designDescriptionContainer}>
                            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className={styles.designDescription}>
                                <p>
                                Проектирование зданий и сооружений – это, пожалуй,
                                основополагающий этап строительства объекта. Именно
                                на этой стадии закладывается базис всех последующих
                                этапов строительных или реконструкционных работ
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
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className={styles.buildingTitle}>СТРОИТЕЛЬСТВО </ScrollAnimation>
                        <div className={styles.buildingDescriptionContainer}>
                            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className={styles.buildingDescription}>
                                <p>
                                Строительство жилых домов – востребованное
                                направление в сфере недвижимости, и компания «ООО
                                Вертикаль» уже несколько лет успешно развивается в
                                этой области.
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
