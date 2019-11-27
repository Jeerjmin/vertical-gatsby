import React from 'react'
import Layout from '../components/layouts'
import styles from './building.module.css'
import Img from "gatsby-image";
import {Link} from "gatsby";
import Header from "../components/header/header";
import Container from "../components/container";
import Modal from "react-awesome-modal";
import Gallery from "../components/gallery";
import arrowLeftWhite from './arrow-left-white.svg';

class BuildingTemplate extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            width : 0
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }
    closeModal() {
        this.setState({
            visible : false
        });
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate = () => {
        this.setState({ width: window.innerWidth });
    }


    render() {

        const images = [
            {
                original: 'https://picsum.photos/id/1018/1000/600/',
                thumbnail: 'https://picsum.photos/id/1018/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1015/1000/600/',
                thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
            },
        ];

        const {item} = this.props.pageContext

        return (
            <div className={styles.container}>
                <Img className={styles.wrapper} alt={item.name} fluid={item.image.fluid} />

                <div className={styles.header}>
                    <Header template />
                </div>
                {this.state.width > 1200 &&
                <Link class={styles.linkBack} to={this.props.location.state.prevPath}>
                    <button className={styles.buttonBack}>
                        <img src={arrowLeftWhite}/>
                    </button>
                </Link>
                }
                <div className={styles.box}>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.description}>со встроенно-пристроенными помещениями, объектами дошкольного образования и подземным гаражом</p>
                    <p className={styles.customer} >Заказчик:</p>
                    <p className={styles.customerName}>«NCC — Жилищное строительство»</p>
                    <p className={styles.location}>Местоположение:</p>
                    <p className={styles.locationName}>Санкт-Петербург, Аптекарский проспект, д. 16, литера Б</p>
                    <p className={styles.description2}>Разработка конструктивных решений стадии «Проект» и «Рабочая документация»; полный комплекс расчетов</p>
                    <p className={styles.square}>Площадь проектирования</p>
                    <p className={styles.square2}> S=113 000 м²</p>
                    {this.state.width < 1200 &&
                        <div className={styles.actions}>
                            <Link class={styles.linkBack} to={this.props.location.state.prevPath}>
                                <button className={styles.buttonBack}>
                                    <img src={arrowLeftWhite}/>
                                </button>
                            </Link>
                            <button  onClick={() => this.openModal()} className={styles.galleryLink}>
                                <span>Фото объекта</span>
                            </button>
                        </div>
                   }

                </div>
                {this.state.width > 1200 &&

                <div onClick={() => this.openModal()} className={styles.gallery}>
                    {images.map(el => <Img className={styles.galleryItem} alt={item.name} fluid={item.image.fluid} /> )}
                </div>


                }
                <Modal visible={this.state.visible} width="1724" height="520" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <Gallery/>
                </Modal>
            </div>
        )
    }
}

export default BuildingTemplate


