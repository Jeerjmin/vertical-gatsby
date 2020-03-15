import React from 'react'
import styles from './design.module.css'
import Slider from "../slider/slider";
import {Link} from "gatsby";
import design from './design.jpg'
import Img from "gatsby-image";
export default ({data, titles}) => {


    const mainTitle = titles.childContentfulDesignPageMainTitleTextNode.mainTitle;
    const mainDescription = titles.childContentfulDesignPageMainDescriptionTextNode.mainDescription;
    const firstBlockTitle = titles.childContentfulDesignPageFirstBlockTitleTextNode.firstBlockTitle;
    const firstBlockDescription = titles.childContentfulDesignPageFirstBlockDescriptionTextNode.firstBlockDescription;
    const secondBlockTitle = titles.childContentfulDesignPageSecondBlockTitleTextNode.secondBlockTitle;
    const secondBlockDescription = titles.childContentfulDesignPageSecondBlockDescriptionTextNode.secondBlockDescription;
    const thirdBlockTitle = titles.childContentfulDesignPageThirdBlockTitleTextNode.thirdBlockTitle;
    const thirdBlockDescription = titles.childContentfulDesignPageThirdBlockDescriptionTextNode.thirdBlockDescription;

    console.log('titles', titles)

        return (
            <div className={styles.design} style={{ maxWidth: 1718, margin: '0 auto', marginTop: '40px'}}>
                <div className={styles.wrapper}>
                    <img src={design} alt="Архитектурно-строительное проектирование" />
                    <p className={styles.title}>{mainTitle}</p>
                    <p className={styles.description}>{mainDescription}</p>
                    <Link to={`/building`}>
                        <button className={styles.link} >
                            Строительство
                        </button>
                    </Link>
                </div>

                <div className={styles.info}>
                    <h5>Наши функции в </h5><h5> проектировании</h5>
                </div>

                <div className={styles.types}>
                    <Link to={`/type?type=generalDesign`}>
                        <div className={styles.generalDesign}>
                            <Img className={styles.img} fluid={titles.firstBlockImage.fluid} alt="Генеральное проектирование" />
                                    <h6>{firstBlockTitle}</h6>
                                    <p>
                                        {firstBlockDescription}
                                    </p>
                                    <div className={styles.buttonContainer}>
                                        <button>Перейти</button>
                                    </div>
                        </div>
                    </Link>
                    <Link to={`/type?type=сonstructiveDecisions`}>
                        <div className={styles.сonstructiveDecisions}>
                            <Img className={styles.img} fluid={titles.secondBlockImage.fluid} alt="Конструктивные решение" />
                                    <h6>{secondBlockTitle}</h6>
                                    <p>
                                        {secondBlockDescription}
                                    </p>
                                    <div className={styles.buttonContainer}>
                                        <button>Перейти</button>
                                    </div>
                        </div>
                    </Link>
                    <Link to={`/type?type=geotechnicalSubstantiation`}>
                        <div className={styles.geotechnicalSubstantiation}>
                            <Img className={styles.img} fluid={titles.thirdBlockImage.fluid} alt="Геотехническое обоснование" />
                                <h6>{thirdBlockTitle}</h6>
                                <p>
                                    {thirdBlockDescription}
                                </p>
                                <div className={styles.buttonContainer}>
                                    <button>Перейти</button>
                                </div>
                        </div>
                    </Link>
                </div>



                {/*<div className={styles.slider}>*/}
                <Slider type="Design" items={data} />
                {/*</div>*/}
            </div>


        );
}
