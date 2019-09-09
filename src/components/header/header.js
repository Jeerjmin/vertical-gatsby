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
        this.setState({
            visible : true
        });
    }
    closeModal() {
        this.setState({
            visible : false
        });
    }
    render() {
        return (
            <div style={{ maxWidth: 1720,  margin: '0 auto'}}>
                <section className={styles.container}>
                    <Link to={`/`}>
                        <img className={styles.logo} src="assets/logo.svg" />
                    </Link>
                    <div className={styles.menu}>
                        <p className={styles.menuTitle}>МЕНЮ</p>
                        <img className={styles.burger} src="assets/menu.svg" onClick={() => this.openModal()}  />
                    </div>
                </section>
                <Modal visible={this.state.visible} width="1724" height="774" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <Menu/>
                </Modal>
            </div>


        );
    }
}
