import React from 'react'
import styles from './projectAll.module.css'
import Img from "gatsby-image";
import {Link} from "gatsby";

export default ({building, design}) => {

    return (
        <div className={styles.projectAll} style={{ margin: '0 auto', marginTop: '40px'}}>
            <div className={styles.container}>
                {building && building.map(item => {
                    return (
                        <Link className={styles.link} to={`/building/${item.node.id}`}>
                            <div className={styles.item}>
                                <Img className={styles.itemImage} alt={item.node.name} fluid={item.node.image.fluid} />
                                <div className={styles.info}>
                                    <div className={styles.title}>
                                        Строительство
                                    </div>
                                    <div className={styles.name}>
                                        {item.node.name}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}

                {design && design.map(item => {
                    return (
                        <Link to={`/design/${item.node.id}`}>
                            <div className={styles.item}>
                                <Img className={styles.itemImage} alt={item.node.name} fluid={item.node.image.fluid} />
                                <div className={styles.info}>
                                    <div className={styles.title}>
                                        Проектирование
                                    </div>
                                    <div className={styles.name}>
                                        {item.node.name}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>


    );
}
