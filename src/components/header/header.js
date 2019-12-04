import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'
import Modal from 'react-awesome-modal';
import Menu from "../menu/menu";
import logo from './logo.svg';
import logoWhite from './logo-white.svg';
import menu from './menu.svg';
import menuWhite from './menu-white.svg';
import close from './close-menu.svg';
import closeWhite from './close-menu-white.svg';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            menuHeight: String(650),
            menuWidth: String(1200)
        }
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate = () => {
        this.setState({ menuWidth: String(window.innerWidth), menuHeight: String(window.innerHeight) });
    }


    openModal = () => {
        document.body.style.overflow = 'hidden';

        if (window.innerHeight < 500 && window.innerWidth > 1000) {
            this.setState({
                menuHeight: String(400),
                menuWidth: String(600)
            }, () => {
                this.setState({
                    visible : true
                });
            })
        } else {
            if (window.innerWidth > 1000) {
                this.setState({
                    menuHeight: String(500),
                    menuWidth: String(1200)
                }, () => {
                    this.setState({
                        visible : true
                    });
                })
            } else if (window.innerWidth > 600) {
                this.setState({
                    menuHeight: String( 120),
                    menuWidth: String(700)
                }, () => {
                    this.setState({
                        visible : true
                    });
                })
            } else {
                this.setState({
                    menuHeight: String(100),
                    menuWidth: String(400)
                }, () => {
                    this.setState({
                        visible : true
                    });
                })
            }
        }





    }
    closeModal = () => {
        this.setState({
            visible : false
        });
        document.body.style.overflow = 'unset';
    }
    render() {
        const {template} = this.props
        const prefix = template ? '../' : '';
        const logoUrl = template ? logoWhite : logo;
        const menuUrl = template ? menuWhite : menu;

        return (
            <div className={!template ? styles.header : styles.templateHeader}>
                <section className={styles.container}>
                    <Link to={`/`}>
                        <img className={styles.logo} src={logoUrl} />
                    </Link>
                    {!this.state.visible && (
                        <div onClick={() => this.openModal()} className={styles.menu}>
                            <p  style={template && {color: 'white'}} className={styles.menuTitle}>МЕНЮ</p>
                            <img className={styles.burger} src={menuUrl}   />
                        </div>
                    )}
                    {this.state.visible && (
                        <div onClick={() => this.closeModal()} className={styles.menu}>
                            <p  style={template && {color: 'white'}} className={styles.menuTitle}>ЗАКРЫТЬ</p>
                            <img className={styles.burger} src={template ? closeWhite : close}   />
                        </div>
                    )}
                </section>
                <Modal className={styles.modal} visible={this.state.visible} width={this.state.menuWidth} height={this.state.menuHeight} effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <Menu closeModal={this.closeModal} visible={this.state.visible} prefix={prefix}/>
                </Modal>
            </div>


        );
    }
}
