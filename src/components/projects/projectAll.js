import React from 'react'
import styles from './projectAll.module.css'
import Img from "gatsby-image";
import {Link} from "gatsby";

export default ({building, design, location}) => {

    return (
        <div className={styles.projectAll} style={{ margin: '0 auto', marginTop: '40px'}}>
            <div className={styles.container}>
                {building && building.map((item, id) => {
                    return (
                        <Link key={id} state={{ prevPath: location.pathname + location.search }} className={styles.link} to={`/building/${item.node.id}`}>
                            <div className={styles.item}>
                                {item.node && !item.node.avatar && <div  className={styles.itemNonImage}   />}
                                {item.node && item.node.avatar && <Img  className={styles.itemImage} alt={item.node.name} fluid={item.node.avatar.fluid} />}
                                {/*<div className={styles.info}>*/}
                                {/*    <div className={styles.title}>*/}
                                {/*        Строительство*/}
                                {/*    </div>*/}
                                {/*    <div className={styles.name}>*/}
                                {/*        {item.node.name}*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className={styles.hover}>
                                    <p className={styles.title}>Строительство</p>
                                    <p className={styles.name}>{item.node.name}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}

                {design && design.map((item, id) => {
                    return (
                        <Link key={id} state={{ prevPath: location.pathname + location.search }} to={`/design/${item.node.id}`}>
                            <div className={styles.item}>
                                {item.node && !item.node.avatar && <div  className={styles.itemNonImage}   />}
                                {item.node && item.node.avatar && <Img  className={styles.itemImage} alt={item.node.name} fluid={item.node.avatar.fluid} />}
                                {/*<div className={styles.info}>*/}
                                {/*    <div className={styles.title}>*/}
                                {/*        Строительство*/}
                                {/*    </div>*/}
                                {/*    <div className={styles.name}>*/}
                                {/*        {item.node.name}*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className={styles.hover}>
                                    <p className={styles.title}>Проектирование</p>
                                    <p className={styles.name}>{item.node.name}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>


    );
}
