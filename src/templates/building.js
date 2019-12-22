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
import closeImage from "./close-menu.svg";

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

    openMoreDetail() {
        this.setState({
            visibleDetail : true
        });
    }
    closeMoreDetail() {
        this.setState({
            visibleDetail : false
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

        console.log('this.props.location.state.prevPath', this.props.pageContext)


        return (
            <div className={styles.container}>
                {item && !item.avatar && <div  style={{background: "grey"}} className={styles.wrapper}   />}
                {item && item.avatar && <Img  className={styles.wrapper} alt={item.name} fluid={item.avatar.fluid} />}

                <div className={styles.header}>
                    <Header template />
                </div>
                {this.state.width > 1200 &&
                <Link class={styles.linkBack} to={(this.props.location.state && this.props.location.state.prevPath) || '/building'}>
                    <button className={styles.buttonBack}>
                        <img src={arrowLeftWhite}/>
                    </button>
                </Link>
                }
                <div className={styles.box}>
                    {item && item.name && <p className={styles.name}>{item.name}</p> }
                    {item && item.works && <p className={styles.type}>{item.works}</p> }
                    {item && item.customer && <p className={styles.customer} >Заказчик:</p> }
                    {item && item.customer && <p className={styles.customerName}>{item.customer}</p> }
                    {item && item.address && <p className={styles.location}>Местоположение:</p>}
                    {item && item.address && <p className={styles.locationName}>item.address</p> }
                    {item && item.area && <p className={styles.square}>S={item.area} м²</p>}
                    <ul className={styles.description2}>
                        <li>Разработка конструктивных решений стадии «Проект»</li>
                        <li>Разработка конструктивных решений стадии «Проект»</li>
                        <li>Разработка конструктивных решений стадии «Проект»</li>
                        <li>Разработка конструктивных решений стадии «Проект»</li>
                    </ul>
                    {item && item.about && <p onClick={() => this.openMoreDetail()} className={styles.moreDetails}>Подробнее о проекте</p>}
                    {this.state.width < 1200 &&
                        <div className={styles.actions}>
                            <Link class={styles.linkBack} to={(this.props.location.state && this.props.location.state.prevPath) || '/building'}>
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
                    {item.avatar && images.map(el => <Img className={styles.galleryItem} key={el.id} alt={item.name} fluid={item.avatar.fluid} /> )}
                </div>


                }
                <Modal visible={this.state.visible} width="1724" height="100%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <img onClick={() => this.closeModal()} src={closeImage} className={styles.close}/>
                    <Gallery/>
                </Modal>

                <Modal visible={this.state.visibleDetail} width="80%" height="60%" effect="fadeInUp" onClickAway={() => this.closeMoreDetail()}>
                    <img onClick={() => this.closeMoreDetail()} src={closeImage} className={styles.detailsClose}/>
                    <div className={styles.modalDetails}>
                        <div className={styles.customerTitle}>Заказчикам</div>
                        <p>
                            {item && item.about}
                        </p>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default BuildingTemplate


