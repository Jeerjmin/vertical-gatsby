import React from 'react'
import styles from './projectDesign.module.css'
import Img from "gatsby-image";
import {Link} from "gatsby";

export default ({data}) => {

    console.log('this.data', data)

    return (
        <div className={styles.projectDesign} style={{ maxWidth: 1980, margin: '0 auto', marginTop: '40px'}}>
            <div className={styles.container}>
                {data && data.map(item => {
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
