import React from 'react'
import styles from './design.module.css'
import Slider from "../slider/slider";
import {Link} from "gatsby";
import design from './design.jpg'
import building1 from './building-1.jpg';
import building2 from './building-2.png';
import building3 from './building-3.png';

export default ({data}) => {

        return (
            <div className={styles.design} style={{ maxWidth: 1718, margin: '0 auto', marginTop: '40px'}}>
                <div className={styles.wrapper}>
                    <img src={design} alt="Архитектурно-строительное проектирование" />
                    <p className={styles.title}>Архитектурно-строительстное проектирование</p>
                    <p className={styles.description}>Проектирование зданий и сооружений – это, пожалуй, основополагающий этап строительства объекта.
                        Именно на этой стадии закладывается базис всех последующих этапов строительных или реконструкционных работ</p>
                    <Link to={`/building`}>
                        <button className={styles.link} >
                            Строительство
                        </button>
                    </Link>
                </div>

                <div className={styles.info}>
                    <h5>Наши функции в </h5><h5> проектировании</h5>
                </div>

                <div className={styles.types}>
                    <Link to={`/type?type=generalDesign`}>
                        <div className={styles.generalDesign}>
                            <img src={building1} alt="Генеральное проектирование" />
                                    <h6>Генеральное проектирование</h6>
                                    <p>Проектирование является профильной деятельностью,
                                    где мы зарекомендовали себя как профессионалы своего дела.
                                    Проектная деятельность основана не только на опыте проектирования,
                                    но и на понимании всех нюансов самого строительного процесса.
                                    Поэтому мы гарантируем разработку реализуемых и оптимальных проектов
                                    </p>
                                    <div className={styles.buttonContainer}>
                                        <button>Перейти</button>
                                    </div>
                        </div>
                    </Link>
                    <Link to={`/type?type=сonstructiveDecisions`}>
                        <div className={styles.сonstructiveDecisions}>
                            <img src={building2} alt="Конструктивные решение" />
                                    <h6>Конструктивные решения</h6>
                                    <p>Конструктивные решения – это неотъемлемая
                                    составляющая проекта. Согласно действующим
                                    нормативам, данный раздел обязательно включается в
                                    состав документации по вновь возводимому зданию и
                                    содержит графическую и текстовую информацию
                                    </p>
                                    <div className={styles.buttonContainer}>
                                        <button>Перейти</button>
                                    </div>
                        </div>
                    </Link>
                    <Link to={`/type?type=geotechnicalSubstantiation`}>
                        <div className={styles.geotechnicalSubstantiation}>
                            <img src={building3} alt="Геотехническое обоснование" />
                                <h6>Геотехническое обоснование</h6>
                                <p>
                                Геотехника объединяет инженерную геологию,
                                занимающуюся исследованием грунтов, механику
                                грунтов, создающую расчетные модели,
                                проектирование фундаментов и подземных сооружений
                                (с учетом особенностей подземных конструкций),
                                технологию производства работ по их устройству и
                                мониторинг за ведением этих работ.
                                </p>
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
