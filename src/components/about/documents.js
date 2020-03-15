import React from 'react'
import styles from './documents.module.css'

class Documents extends React.Component {

    open = (url) => {
        window.open(url)
    }


    render() {

        const {filesLinks, filesNames} = this.props
        const files = filesLinks && filesLinks.map((link, i) => {
            return <h4 onClick={() => this.open(link)}>{filesNames[i]}</h4>
        });

        return (
            <div className={styles.documents}>
                {files}
            </div>


        );
    }
}


export default Documents
