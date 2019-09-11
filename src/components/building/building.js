import React from 'react'
import styles from './building.module.css'
import Slider from "../slider/slider";
import {Link} from "gatsby";

export default ({data}) => {

    return (
        <div className={styles.building} style={{ maxWidth: 1980, margin: '0 auto', marginTop: '40px'}}>
            <div className={styles.wrapper}>
                <img src="assets/building.jpg" alt="Архитектурно-строительное проектирование" />
                <p className={styles.title}>Строительство коммерческой недвижимости</p>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link to={`/design`}>
                    <button className={styles.link} >
                        Проектирование <img className={styles.arrowLink} src="assets/arrow-right.svg" alt="Проектирование" />
                    </button>
                </Link>
            </div>
            <div className={styles.info}>
                <div className={styles.title}>
                    <span style={{color: '#B9261A'}}>Как ?</span> <span>построить</span>
                    <p style={{color: '#2B2A29'}}>коммерческую</p> <p>недвижимость</p>
                </div>
                <div className={styles.description}>
                    <p>
                        Процесс строительства включает в себя все организационные,
                        изыскательские, проектные, строительно-монтажные и пусконаладочные работы,
                        связанные с созданием, изменением или сносом объекта, а также взаимодействие
                        с компетентными органами по поводу производства таких работ.
                        <br/>
                        <br/>
                        <span  style={{ color: '#B9261A'}}>
                           Результатом строительства
                            </span> считается возведённое здание (сооружение) с внутренней отделкой,
                        действующими инженерно-технологическими системами и полным комплектом документации,
                        предусмотренной законом.
                    </p>
                </div>
                <div className={styles.description}>
                    <p>
                        Здания — объемные строительные системы, имеющие надземную и (или) подземную части,
                        включающие в себя  <span  style={{ color: '#B9261A'}}>
                        помещения, сети инженерно-технического обеспечения </span> и
                        системы инженерно-технического обеспечения и предназначенные для проживания и (или)
                        <br/>
                        <br/>
                        Деятельности людей, размещения производства, хранения продукции или содержания животных
                    </p>
                </div>
            </div>

            <button className={styles.moreLink}>
                Читать далее
            </button>




            {/*<div className={styles.slider}>*/}
            <Slider type="Building" items={data} />
            {/*</div>*/}
        </div>


    );
}
