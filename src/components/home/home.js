import React from 'react';
import styles from './home.module.css'
import Img from "gatsby-image";
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {Link} from "gatsby";

export default ({showReal}) => {
    console.log('showReal', showReal)

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
                <div className={styles.showReal}>
                    <Img  alt={showReal.title.title} fluid={showReal.image.fluid}/>
                    {ShowRealTitle}
                    {ShowRealDescription}
                    <Link to={`/projects`}>
                        <button className={styles.showRealButton}>К ПРОЕКТАМ</button>
                    </Link>
                    <img className={styles.showRealPlay} src="assets\showReal-play.svg" alt="Плэй" />
                </div>
                <div className={styles.mouse}>
                    <img  src="assets\mouse.svg" alt="Скролл" />
                </div>
                <div className={styles.types}>
                    <div className={styles.design}>
                        <img src="assets\home-design.jpg" alt="Проектирование" />
                        <p className={styles.designTitle}>ПРОЕКТИРОВАНИЕ </p>
                        <p className={styles.designDescription}>
                            Проектирование зданий и сооружений – это, пожалуй,
                            основополагающий этап строительства объекта. Именно
                            на этой стадии закладывается базис всех последующих
                            этапов строительных или реконструкционных работ
                        </p>
                        <Link to={`/design`}>
                            <button className={styles.designButton}>ПЕРЕЙТИ</button>
                        </Link>
                    </div>
                    <div className={styles.building}>
                        <img src="assets\home-building.jpg" alt="Строительство" />
                        <p className={styles.designTitle}>СТРОИТЕЛЬСТВО </p>
                        <p className={styles.designDescription}>
                            Строительство жилых домов – востребованное
                            направление в сфере недвижимости, и компания «ООО
                            Вертикаль» уже несколько лет успешно развивается в
                            этой области.
                        </p>
                        <Link to={`/building`}>
                            <button className={styles.designButton}>ПЕРЕЙТИ</button>
                        </Link>
                    </div>
                </div>
            </div>
        )

}
