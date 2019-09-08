import React from 'react'
import styles from './footer.module.css'

export default class Footer extends React.Component {


    render() {
        return (
            <section className={styles.container} style={{ maxWidth: 1980, background: 'black',  margin: '0 auto', marginTop: '40px'}}>
                    <img src="assets/footer.jpg" alt="Контакты" />
                    <div className={styles.contacts}>info@vertical.spb.ru  /  +7 812.244.0158</div>

            </section>


        );
    }
}
