import React from 'react'
import styles from './about.module.css'
import Img from "gatsby-image";

class Team extends React.Component {
    render() {
        const {secondTitle, notification, firstBlockText, secondBlockText, thirdBlockText, image} = this.props

        return (
            <div className={styles.about}>
                <div className={styles.descriptions}>
                    <div>
                        {firstBlockText}
                    </div>
                    <div>
                        {secondBlockText}
                    </div>
                </div>
                <div className={styles.description2}>
                    <span>
                        {notification}
                    </span>
                </div>
                <div className={styles.toCustomers}>
                    <h4>{secondTitle}</h4>
                    <div className={styles.container}>
                        <Img className={styles.img} fluid={image.fluid} alt="Заказчикам" />
                        <div className={styles.text}>
                            {thirdBlockText}
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}


export default Team
