import React from 'react'
import styles from './about.module.css'

class Objects extends React.Component {

    render() {

        window.location.href = '/projects'

        return (
            <div className={styles.about}>
            </div>


        );
    }
}


export default Objects
