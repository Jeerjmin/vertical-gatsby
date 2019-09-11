import React from 'react'
import Layout from '../components/layout'
import styles from './building.module.css'
import Img from "gatsby-image";
import {Link} from "gatsby";

class DesignTemplate extends React.Component {
    render() {

        const {item} = this.props.pageContext

        return (
            <div className={styles.container}>
                <Img className={styles.wrapper} alt={item.name} fluid={item.image.fluid} />

                <div className={styles.header}>
                    <Layout template location={this.props.location} />
                </div>
                <Link to={`/projects?type=design`}>
                    <button className={styles.buttonBack}>
                        <img src="../assets/arrow-left-white.svg"/>
                    </button>
                </Link>
                <div className={styles.box}>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.description}>со встроенно-пристроенными помещениями, объектами дошкольного образования и подземным гаражом</p>
                    <p className={styles.customer} >Заказчик</p>
                    <p className={styles.customerName}>«NCC — Жилищное строительство»</p>
                    <p className={styles.location}>Местоположение</p>
                    <p className={styles.locationName}>Санкт-Петербург, Аптекарский проспект, д. 16, литера Б</p>
                    <p className={styles.description2}>Разработка конструктивных решений стадии «Проект» и «Рабочая документация»; полный комплекс расчетов</p>
                    <p className={styles.square}>Площадь проектирования</p>
                    <p className={styles.square2}> S=113 000 м²</p>
                    <button className={styles.galleryLink}>
                        <span>Фото объекта</span>
                        <img src="../assets/arrow-right.svg"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default DesignTemplate


