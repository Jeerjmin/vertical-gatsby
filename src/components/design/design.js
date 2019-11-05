import React from 'react'
import styles from './design.module.css'
import Slider from "../slider/slider";
import {Link} from "gatsby";

export default ({data}) => {

        return (
            <div className={styles.design} style={{ maxWidth: 1718, margin: '0 auto', marginTop: '40px'}}>
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
                    <h5>Наши функции в </h5><h5> проектировании</h5>
                </div>

                <div className={styles.types}>
                    <Link to={`/type?type=generalDesign`}>
                        <div className={styles.generalDesign}>
                            <img src="assets/building-1.jpg" alt="Генеральное проектирование" />
                            <div className={styles.titleContainer}>
                                <h6>Генеральное проектирование</h6>
                            </div>
                            <div className={styles.descriptionContainer}>
                                <p>Проектирование является профильной деятельностью,
                                где мы зарекомендовали себя как профессионалы своего дела.
                                Проектная деятельность основана не только на опыте проектирования,
                                но и на понимании всех нюансов самого строительного процесса.
                                Поэтому мы гарантируем разработку реализуемых и оптимальных проектов
                                </p>
                            </div>
                            <div className={styles.buttonContainer}>
                                <button>Перейти</button>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/type?type=сonstructiveDecisions`}>
                        <div className={styles.сonstructiveDecisions}>
                            <img src="assets/building-2.png" alt="Конструктивные решение" />
                            <div className={styles.titleContainer}>
                                <h6>Конструктивные решения</h6>
                            </div>
                            <div className={styles.descriptionContainer}>
                                <p>Конструктивные решения – это неотъемлемая
                                составляющая проекта. Согласно действующим
                                нормативам, данный раздел обязательно включается в
                                состав документации по вновь возводимому зданию и
                                содержит графическую и текстовую информацию
                                </p>
                            </div>
                            <div className={styles.buttonContainer}>
                                <button>Перейти</button>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/type?type=geotechnicalSubstantiation`}>
                        <div className={styles.geotechnicalSubstantiation}>
                            <img src="assets/building-3.png" alt="Геотехническое обоснование" />
                            <div className={styles.titleContainer}>
                                <h6>Геотехническое обоснование</h6>
                            </div>
                            <div className={styles.descriptionContainer}>
                                <p>
                                Геотехника объединяет инженерную геологию,
                                занимающуюся исследованием грунтов, механику
                                грунтов, создающую расчетные модели,
                                проектирование фундаментов и подземных сооружений
                                (с учетом особенностей подземных конструкций),
                                технологию производства работ по их устройству и
                                мониторинг за ведением этих работ.
                                </p>
                            </div>
                            <div className={styles.buttonContainer}>
                                <button>Перейти</button>
                            </div>
                        </div>
                    </Link>
                </div>



                {/*<div className={styles.slider}>*/}
                <Slider type="Design" items={data} />
                {/*</div>*/}
            </div>


        );
}
