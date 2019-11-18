import React from 'react'
import styles from './footer.module.css'
import footer from './footer.jpg';

export default class Footer extends React.Component {


    render() {
        const prefix = this.props.template ? '../' : ''
        return (
            <section className={styles.container} style={{background: 'black'}}>
                    <img src={footer} alt="Контакты" />
                    <div className={styles.contacts}>info@vertical.spb.ru  /  +7 812.244.0158</div>

            </section>


        );
    }
}
