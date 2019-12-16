import React from 'react'
import styles from './documents.module.css'

class Documents extends React.Component {

    open = (url) => {
        window.open(url)
    }


    render() {


        return (
            <div className={styles.documents}>
                <h4 onClick={() => this.open('https://onedrive.live.com/?authkey=%21AG5JcPyeGmJMS%5Fw&cid=BC03DA86024FDDAA&id=BC03DA86024FDDAA%2117848&parId=BC03DA86024FDDAA%2117847&o=OneUp')}>Отчёт о проведении специальной оценки условий труда</h4>
                <h4 onClick={() => this.open('https://onedrive.live.com/?authkey=%21AG5JcPyeGmJMS%5Fw&cid=BC03DA86024FDDAA&id=BC03DA86024FDDAA%2117850&parId=BC03DA86024FDDAA%2117847&o=OneUp')} >Свидетельство СРО (проектирование)</h4>
                <h4 onClick={() => this.open('https://onedrive.live.com/?authkey=%21AG5JcPyeGmJMS%5Fw&cid=BC03DA86024FDDAA&id=BC03DA86024FDDAA%2117851&parId=BC03DA86024FDDAA%2117847&o=OneUp')}>Свидетельство СРО (строительство)</h4>
                <h4 onClick={() => this.open('https://onedrive.live.com/?authkey=%21AG5JcPyeGmJMS%5Fw&cid=BC03DA86024FDDAA&id=BC03DA86024FDDAA%2117849&parId=BC03DA86024FDDAA%2117847&o=OneUp')}>Специальная оценка условий труда</h4>
            </div>


        );
    }
}


export default Documents
