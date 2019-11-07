import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'
import Modal from 'react-awesome-modal';
import Menu from "../menu/menu";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }
    openModal() {
        document.body.style.overflow = 'hidden';
        this.setState({
            visible : true
        });
    }
    closeModal() {
        this.setState({
            visible : false
        });
        document.body.style.overflow = 'unset';
    }
    render() {
        const {template} = this.props
        const prefix = template ? '../' : '';
        const logoUrl = template ? prefix + 'assets/logo-white.svg' : prefix + 'assets/logo.svg';
        const menuUrl = template ? prefix + 'assets/menu-white.svg' : prefix + 'assets/menu.svg';
        const closeUrl = template ? prefix + 'assets/close-menu.svg' : prefix + 'assets/close-menu.svg';

        return (
            <div className={styles.header}>
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
                            <img className={styles.burger} src={closeUrl}   />
                        </div>
                    )}
                </section>
                <Modal className={styles.modal} visible={this.state.visible} width="1724" height="520" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <Menu visible={this.state.visible} prefix={prefix}/>
                </Modal>
            </div>


        );
    }
}
