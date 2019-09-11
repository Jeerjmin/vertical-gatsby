import React from 'react'
import styles from './design.module.css'
import Slider from "../slider/slider";
import {Link} from "gatsby";

export default ({data}) => {

        return (
            <div className={styles.design} style={{ maxWidth: 1980, margin: '0 auto', marginTop: '40px'}}>
                <div className={styles.wrapper}>
                    <img src="assets/design.jpg" alt="Архитектурно-строительное проектирование" />
                    <p className={styles.title}>Архитектурно-строительстное проектирование</p>
                    <p className={styles.description}>Проектирование зданий и сооружений – это, пожалуй, основополагающий этап строительства объекта.
                        Именно на этой стадии закладывается базис всех последующих этапов строительных или реконструкционных работ</p>
                    <Link to={`/building`}>
                        <button className={styles.link} >
                            Строительство <img className={styles.arrowLink} src="assets/arrow-right.svg" alt="Строительство" />
                        </button>
                    </Link>
                </div>
                <div className={styles.info}>
                    <div className={styles.title}>
                        <p style={{color: '#B9261A'}}>Стадии проектирования</p>
                        <p style={{color: '#2B2A29'}}>или разработки проекта здания</p>
                    </div>
                    <div className={styles.description}>
                        <p>
                            Процесс проектирования или разработки проекта
                            здания или иного сооружения включает в себя
                            следующие стадии:
                            <br/>
                            <br/>
                            <span  style={{ fontWeight: 'bold', fontSize: '20px', color: '#B9261A'}}>
                            1.
                            </span> Сбор и анализ исходных данных, необходимых
                            для проектирования. Сюда входят работы по
                            выбору земельного участка, оформление
                            технико-экономического обоснования;
                            <br/>
                            <br/>
                            <span  style={{fontWeight: 'bold', fontSize: '20px', color: '#B9261A'}}>
                            2.
                            </span> Разработка технического задания на проект
                            здания. Каждый пункт технического задания
                            обсуждается с Заказчиком, при этом учитываются
                        </p>
                    </div>
                    <div className={styles.description}>
                        <p>
                            положения утвержденного
                            технико-экономического обоснования;
                            <br/>
                            <br/>
                            <span  style={{ fontWeight: 'bold', fontSize: '20px', color: '#B9261A'}}>
                            3.
                            </span> Разработка эскизного проекта «ЭП» будущего
                            здания на выбранном участке строительства;
                            <br/>
                            <br/>
                            <span  style={{ fontWeight: 'bold', fontSize: '20px', color: '#B9261A'}}>
                            4.
                            </span> Разработка Проекта планировки территории
                            <br/>
                            <br/>
                            <span  style={{ fontWeight: 'bold', fontSize: '20px', color: '#B9261A'}}>
                            5.
                            </span> Оформление технических условий, которые
                            после выдачи и вступления в силу будут
                            представлять собой основу разработки всех
                            проектных документов на строительство здания;
                        </p>
                    </div>
                </div>

                <button className={styles.moreLink}>
                    Читать далее
                </button>




                {/*<div className={styles.slider}>*/}
                <Slider type="Design" items={data} />
                {/*</div>*/}
            </div>


        );
}
