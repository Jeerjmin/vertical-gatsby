import React from 'react'
import styles from './footer.module.css'
import footer from './footer.jpg';

export default class Footer extends React.Component {


    render() {
        const prefix = this.props.template ? '../' : ''
        const {phone, email} = this.props
        return (
            <section className={styles.container} style={{background: 'black'}}>
                    <img src={footer} alt="Контакты" />
                    <div className={styles.contacts}>{email}  /  {phone}</div>

            </section>


        );
    }
}
