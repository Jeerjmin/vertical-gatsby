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
import closeImage from './close-menu.svg';
import closeImageBlack from './close-menu-black.svg';

class DesignTemplate extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            width : 0,
            imageIndex: 0
        }
    }

    openModal(i) {
        this.setState({
            visible : true,
            imageIndex: i
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
    };

    back = () => {
        window.history.back()
    };

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
            <div>
                <div className={styles.container}>
                    {item && !item.avatar && <div  style={{background: "grey"}} className={styles.wrapper}   />}
                    {item && item.avatar && <Img  className={styles.wrapper} alt={item.name} fluid={item.avatar.fluid} />}

                    <div className={styles.header}>
                        <Header template />
                    </div>
                    {this.state.width > 1400 &&
                    (<>
                        <div class={styles.linkBack} >
                        <button onClick={this.back} className={styles.buttonBack}>
                            <img src={arrowLeftWhite}/>
                        </button>
                    </div>

                        </>
                    )}
                    {item && item.name && <p className={styles.name}>{item.name}</p> }
                    {item && item.works && <p className={styles.type}>{item.works.map((el, i) => {
                        if (i + 1 === item.works.length) {
                            return el
                        } else {
                            return el + ", "
                        }
                    })}</p> }
                    {item && item.customer && <p className={styles.customer} >Заказчик:</p> }
                    {item && item.customer && <p className={styles.customerName}>{item.customer}</p> }
                    {item && item.address && item.address !== ' ' && <p className={styles.location}>Местоположение:</p>}
                    {item && item.address && item.address !== ' ' && <p className={styles.locationName}>{item.address}</p> }
                    {item && item.area && item.area !== ' ' && <p className={styles.square}>S={item.area} м²</p>}
                    {item && item.list && <ul className={styles.description2}>
                        {item.list.map(el => <li>{el}</li>)}
                    </ul> }
                    {item && item.about && item.about.about && <p onClick={() => this.openMoreDetail()} className={styles.moreDetails}>Подробнее о проекте</p>}
                    {this.state.width < 1400 &&
                        <div className={styles.actions}>
                            <div class={styles.linkBack} >
                                <button onClick={this.back} className={styles.buttonBack}>
                                    <img src={arrowLeftWhite}/>
                                </button>
                            </div>

                            {item.photos && item.photos.length > 0 && <button  onClick={() => this.openModal()} className={styles.galleryLink}>
                                <span>Фото объекта</span>
                            </button>}
                        </div>
                    }
                    {this.state.width > 1400 && item.photos && item.photos.length > 0 &&
                        <div className={styles.gallery}>
                            {item.photos && item.photos.map((el, i) => {
                                    if (i >=4) {
                                        return null
                                    } else {
                                        return <div onClick={() => this.openModal(i)}><Img key={i} className={styles.galleryItem} alt={item.name} fluid={el.fluid}/></div>
                                    }
                                }
                            )}
                        </div>
                    }
                    <Modal visible={this.state.visible} width="1724" height="100%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                        <img onClick={() => this.closeModal()} src={closeImage} className={styles.close}/>
                        <Gallery imageIndex={this.state.imageIndex} images={item.photos}/>
                    </Modal>

                    <Modal visible={this.state.visibleDetail} width="80%" height="60%" effect="fadeInUp" onClickAway={() => this.closeMoreDetail()}>
                        <img onClick={() => this.closeMoreDetail()} src={closeImage} className={styles.detailsClose}/>
                        <div className={styles.modalDetails}>
                            <div className={styles.customerTitle}>Заказчикам</div>
                            <p>
                                {item && item.about && item.about.about}
                            </p>
                        </div>
                    </Modal>
                </div>
                {this.state.width < 1400 && item.photos && item.photos.length > 0 &&
                <div  className={styles.galleryBottom}>
                    {item.photos.map((el, i) => {
                            if (i >=4 ) {
                                return null
                            } else {
                                return <div className={styles.galleryItemBoottomContainer} onClick={() => { this.openModal(i) }}><Img className={styles.galleryItemBottom} alt={item.name} fluid={el.fluid} /></div>
                            }
                        }
                    )}
                </div>
                }
            </div>
        )
    }
}

export default DesignTemplate


