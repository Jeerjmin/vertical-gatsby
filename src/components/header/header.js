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
        const {template} = this.props
        const prefix = template ? '../' : '';
        const logoUrl = template ? prefix + 'assets/logo-white.svg' : prefix + 'assets/logo.svg';
        const menuUrl = template ? prefix + 'assets/menu-white.svg' : prefix + 'assets/menu.svg';

        return (
            <div style={{ maxWidth: 1720}}>
                <section className={styles.container}>
                    <Link to={`/`}>
                        <img className={styles.logo} src={logoUrl} />
                    </Link>
                    <div className={styles.menu}>
                        <p  style={template && {color: 'white'}} className={styles.menuTitle}>МЕНЮ</p>
                        <img className={styles.burger} src={menuUrl} onClick={() => this.openModal()}  />
                    </div>
                </section>
                <Modal visible={this.state.visible} width="1724" height="520" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <Menu prefix={prefix}/>
                </Modal>
            </div>


        );
    }
}
