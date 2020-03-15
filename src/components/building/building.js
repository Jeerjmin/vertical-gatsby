import React from 'react'
import styles from './building.module.css'
import Slider from "../slider/slider";
import {Link} from "gatsby";
import building from './building.jpg';

import Img from "gatsby-image";

export default ({data, titles}) => {

    const buildingTitle = titles.buildingTitle.buildingTitle;
    const buildingDescription = titles.buildingDescription.buildingDescription;
    const firstBlockTitle = titles.childContentfulBuildingPageFirstBlockTitleTextNode.firstBlockTitle;
    const firstBlockDescription = titles.childContentfulBuildingPageFirstBlockDescriptionTextNode.firstBlockDescription;
    const secondBlockTitle = titles.childContentfulBuildingPageSecondBlockTitleTextNode.secondBlockTitle;
    const secondBlockDescription = titles.childContentfulBuildingPageSecondBlockDescriptionTextNode.secondBlockDescription;

    return (
        <div className={styles.building} style={{ maxWidth: 1718, margin: '0 auto', marginTop: '40px'}}>
            <div className={styles.wrapper}>
                <img src={building} alt="Архитектурно-строительное проектирование" />
                <p className={styles.title}>{buildingTitle}</p>
                <p className={styles.description}>{buildingDescription}</p>
                <Link to={`/design`}>
                    <button className={styles.link} >
                        Проектирование
                    </button>
                </Link>
            </div>
            <div className={styles.info}>
                <h5>Наши функции в </h5><h5> строительстве</h5>

            </div>

            <div className={styles.types}>
                <Link to={'/type?type=generalContract'}>
                    <div className={styles.generalContract}>
                        <Img className={styles.img} fluid={titles.firstBlockImage.fluid} alt="Генеральный подряд" />
                        <h6>{firstBlockTitle}</h6>
                        <p>
                            {firstBlockDescription}
                        </p>
                        <div className={styles.buttonContainer}>
                            <button>Перейти</button>
                        </div>
                    </div>
                </Link>
                <Link to={`/type?type=zeroCycle`}>
                    <div className={styles.zeroCycle}>
                        <Img className={styles.img} fluid={titles.secondBlockImage.fluid} alt="Нулевой цикл" />
                        <h6>{secondBlockTitle}</h6>
                        <p>
                            {secondBlockDescription}
                        </p>
                        <div className={styles.buttonContainer}>
                            <button>Перейти</button>
                        </div>
                    </div>
                </Link>

            </div>

            {/*<div className={styles.slider}>*/}
            <Slider type="Building" items={data} />
            {/*</div>*/}
        </div>


    );
}
