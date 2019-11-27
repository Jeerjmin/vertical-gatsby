import React from 'react'
import styles from './projectDesign.module.css'
import Img from "gatsby-image";
import {Link} from "gatsby";

export default ({data, location}) => {

    console.log('this.location', location)

    return (
        <div className={styles.projectDesign} style={{ maxWidth: 1718, margin: '0 auto', marginTop: '40px'}}>
            <div className={styles.container}>
                {data && data.map((item, id) => {
                    return (
                        <Link  key={id} state={{ prevPath: location.pathname + location.search }} to={`/design/${item.node.id}`}>
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
