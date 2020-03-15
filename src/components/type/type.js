import React from 'react'
import styles from './type.module.css'
import {Link} from "gatsby";
import Slider from "../slider/slider";
import designImage from './design.jpg';
import typeWrapper from './type-wrapper.png';
import designImage2 from './design2.jpg';
import Img from "gatsby-image";

export default ({
                    ConstructiveDecisions,
                    GeneralContract,
                    GeneralDesign,
                    GeotechnicalSubstantation,
                    ZeroCycle,
                    type,
                    firstBlockTitles,
                    secondBlockTitles,
                    thirdBlockTitles,
                    firstBlockBuildingTitles,
                    secondBlockBuildingTitles
    }) => {

    let wrapperTitle;
    let wrapperDescription;
    let description;
    let link;
    let linkTitle;
    let list;
    let content;
    let data;
    let image;


    console.log('titles', firstBlockBuildingTitles, secondBlockBuildingTitles)

    switch (type) {
        case 'generalContract': {
            data = GeneralContract
            wrapperTitle = firstBlockBuildingTitles.title.title;
            wrapperDescription = firstBlockBuildingTitles.description.description;
            link = 'Строительство';
            linkTitle = 'building';
            description = firstBlockBuildingTitles.firstBlock.firstBlock.replace(/{new_line}/g, '\n');
            image = firstBlockBuildingTitles.firstBlockImage;
            break;
        }
        case 'generalDesign': {
            data = GeneralDesign;
            wrapperTitle = firstBlockTitles.childContentfulDesignFirstBlockPageTitleTextNode.title;
            wrapperDescription = firstBlockTitles.childContentfulDesignFirstBlockPageDescriptionTextNode.description;
            const titleParagraph = firstBlockTitles.childContentfulDesignFirstBlockPageTitleParagraphTextNode.titleParagraph;
            const firstBlockText = firstBlockTitles.childContentfulDesignFirstBlockPageFirstBlockTextTextNode.firstBlockText.replace(/{new_line}/g, '\n');
            const secondBlockText = firstBlockTitles.childContentfulDesignFirstBlockPageSecondBlockTextTextNode.secondBlockText.replace(/{new_line}/g, '\n');
            const list = firstBlockTitles.verticalList;
            const notification  = firstBlockTitles.childContentfulDesignFirstBlockPageNotificationTextNode.notification;

            link = 'Проектирование';
            linkTitle = 'design';
            content = <div className={styles.content}>
                    <div className={styles.contentRow}>
                        <div className={styles.contentRowCol}>
                            <p className={styles.contentTitle}>{titleParagraph}</p>
                            <p className={styles.contentDescription}>
                                {firstBlockText}
                            </p>
                        </div>
                        <div className={styles.designImageContainer2}>
                            <Img fluid={firstBlockTitles.firstBlockImage.fluid} className={styles.designImage} src={typeWrapper} />
                        </div>
                    </div>
                    <div className={styles.contentRow}>
                        <div className={styles.designImageContainer}>
                            <Img fluid={firstBlockTitles.secondBlockImage.fluid}  className={styles.designImage2} src={designImage2} />
                        </div>
                        <div className={styles.contentRowCol}>
                            <p className={styles.contentDescription2}>
                                {secondBlockText}
                            </p>

                            <h3 className={styles.verticalEto}>Vertical - это</h3>
                            <ul className={styles.generalProject} style={{paddingInlineStart: "10px"}}>
                                {list && list.map(item => {
                                    const tire = item.indexOf('—') === -1 ? 0: item.indexOf('—');

                                    return <li><b>{item.slice(0, tire)}</b> <span>{item.slice(tire)}</span></li>
                                })}
                                </ul>

                        </div>
                </div>
                <div className={styles.description2}>
                    <span>
                        {notification}
                    </span>
                </div>
            </div>

            break;

        }
        case 'geotechnicalSubstantiation': {
            data = GeotechnicalSubstantation;
            wrapperTitle = thirdBlockTitles.childContentfulDesignThirdPageTitleTextNode.title
            wrapperDescription = thirdBlockTitles.childContentfulDesignThirdPageDescriptionTextNode.description;
            const firstBlockText = thirdBlockTitles.childContentfulDesignThirdPageFirstBlockTextTextNode.firstBlockText.replace(/{new_line}/g, '\n');
            const secondBlockText = thirdBlockTitles.childContentfulDesignThirdPageSecondBlockTextTextNode.secondBlockText.replace(/{new_line}/g, '\n');
            const thirdBlockText = thirdBlockTitles.childContentfulDesignThirdPageThirdBlockTextTextNode.thirdBlockText.replace(/{new_line}/g, '\n');
            const list = thirdBlockTitles.list;
            const notification  = thirdBlockTitles.childContentfulDesignThirdPageNotificationTextNode.notification;
            link = 'Проектирование';
            linkTitle = 'design';

            content = <div className={styles.content}>
                <div className={styles.contentRow}>
                    <div className={styles.contentRowCol}>
                        <p className={styles.contentDescription}>
                           {firstBlockText}
                        </p>
                    </div>
                    <div className={styles.designImageContainer2}>
                        <Img fluid={thirdBlockTitles.firstBlockImage.fluid}  className={styles.designImage} />
                    </div>
                </div>
                <div className={styles.contentRow}>
                    <div className={styles.designImageContainer}>
                        <Img fluid={thirdBlockTitles.secondBlockImage.fluid} className={styles.designImage2} />
                    </div>
                    <div className={styles.contentRowCol}>
                        <p className={styles.contentDescription2}>
                            {secondBlockText}
                        </p>

                        <h3 className={styles.verticalEto}>В геотехническую оценку входит:</h3>
                        <ul className={styles.geoBase} style={{paddingInlineStart: "10px"}}>
                            {list && list.map(item => {
                                const tire = item.indexOf('—') === -1 ? 0: item.indexOf('—');

                                return <li><b>{item.slice(0, tire)}</b> <span>{item.slice(tire)}</span></li>
                            })}

                        </ul>

                    </div>
                </div>
                <div className={styles.contentRow}>
                    <div className={styles.contentRowCol}>
                        <h3 className={styles.geoBaseH3}>Рекомендации к геотехническому мониторингу</h3>
                        <p className={styles.contentDescription}>
                            {thirdBlockText}
                        </p>
                    </div>
                    <div className={styles.designImageContainer2}>
                        <Img fluid={thirdBlockTitles.thirdBlockImage.fluid} className={styles.designImage3} src={typeWrapper} />
                    </div>
                </div>
                <div className={styles.description2}>
                    <span>
                        {notification}
                    </span>
                </div>
            </div>

            break;
        }
        case 'zeroCycle': {
            data = ZeroCycle
            wrapperTitle = secondBlockBuildingTitles.title.title;
            wrapperDescription = secondBlockBuildingTitles.description.description;
            link = 'Строительство';
            linkTitle = 'building';
            description = secondBlockBuildingTitles.firstBlockText.firstBlockText.replace(/{new_line}/g, '\n');
            image = secondBlockBuildingTitles.firstBlockImage;
            break;
        }
        case 'сonstructiveDecisions': {
            data = ConstructiveDecisions
            link = 'Проектирование';
            linkTitle = 'design';

            wrapperTitle = secondBlockTitles.childContentfulDesignSecondPageTitleTextNode.title;
            wrapperDescription = secondBlockTitles.childContentfulDesignSecondPageDescriptionTextNode.description;
            const firstBlockText = secondBlockTitles.childContentfulDesignSecondPageFirstBlockTitleTextNode.firstBlockTitle.replace(/{new_line}/g, '\n');
            const secondBlockText = secondBlockTitles.childContentfulDesignSecondPageSecondBlockTitleTextNode.secondBlockTitle.replace(/{new_line}/g, '\n');
            const thirdBlockText = secondBlockTitles.childContentfulDesignSecondPageThirdBlockTitleTextNode.thirdBlockTitle.replace(/{new_line}/g, '\n');
            const list = secondBlockTitles.list;

            content = <div className={styles.content}>
                <div className={styles.contentRow}>
                    <div className={styles.contentRowCol}>
                        <p className={styles.contentDescription}>
                            {firstBlockText}
                        </p>
                    </div>
                    <div className={styles.designImageContainer2}>
                        <Img fluid={secondBlockTitles.firstBlockImage.fluid} className={styles.designImage} />
                    </div>
                </div>
                <div className={styles.contentRow}>
                    <div className={styles.designImageContainer}>
                        <Img fluid={secondBlockTitles.secondBlockImage.fluid} className={styles.designImage2}/>
                    </div>
                    <div className={styles.contentRowCol}>
                        <p className={styles.contentDescription4}>
                            {secondBlockText}
                        </p>

                        <ul className={styles.constrDec} style={{paddingInlineStart: "10px"}}>
                            {list && list.map(item => {
                                const tire = item.indexOf('—') === -1 ? 0: item.indexOf('—');

                                return <li><b>{item.slice(0, tire)}</b> <span>{item.slice(tire)}</span></li>
                            })}
                        </ul>
                        <p className={styles.contentDescription3}>
                            {thirdBlockText}
                        </p>
                    </div>
                </div>
            </div>
            break;
        }
    }


    return (
        <div className={styles.type} style={{ width: '100%', margin: '0 auto', marginTop: '40px'}}>
            <div className={styles.wrapper}>
                <img src={designImage} alt={wrapperTitle} />
                <p className={styles.title}>{wrapperTitle}</p>
                <p className={styles.description}>{wrapperDescription}</p>
                <Link to={`/${linkTitle}`}>
                    <button className={styles.link} >
                        {link}
                    </button>
                </Link>
            </div>
            <div className={styles.info}>
                {description &&
                <p className={styles.description}>
                    {description}
                </p>}
                {description && <div className={styles.image}>
                                    <Img fluid={image.fluid} alt={wrapperTitle} />
                                </div>
                }

                {content}
            </div>


            <Slider type={linkTitle} items={data} />

        </div>


    );
}
