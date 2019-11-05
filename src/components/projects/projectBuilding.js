import React from 'react'
import styles from './projectBuilding.module.css'
import Img from "gatsby-image";
import {Link} from "gatsby";

export default ({data}) => {

    return (
        <div className={styles.projectBuilding} style={{ maxWidth: 1718, margin: '0 auto', marginTop: '40px'}}>
            <div className={styles.container}>
                {data && data.map(item => {
                    return (
                        <Link to={`/building/${item.node.id}`}>
                            <div className={styles.item}>
                                <Img className={styles.itemImage} alt={item.node.name} fluid={item.node.image.fluid} />
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
            </div>
        </div>


    );
}
