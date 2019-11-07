import React from 'react'
import styles from './building.module.css'
import Slider from "../slider/slider";
import {Link} from "gatsby";

export default ({data}) => {

    return (
        <div className={styles.building} style={{ maxWidth: 1718, margin: '0 auto', marginTop: '40px'}}>
            <div className={styles.wrapper}>
                <img src="assets/building.jpg" alt="Архитектурно-строительное проектирование" />
                <p className={styles.title}>Строительство коммерческой недвижимости</p>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link to={`/design`}>
                    <button className={styles.link} >
                        Проектирование
                    </button>
                </Link>
            </div>
            <div className={styles.info}>
                <h5>Наши функции в </h5><h5> строительстве</h5>

            </div>

            <div className={styles.types}>
                <Link to={'/type?type=generalContract'}>
                    <div className={styles.generalContract}>
                        <img src="assets/building-1.jpg" alt="Генеральный подряд" />
                        <h6>Генеральный подряд</h6>
                        <p>«Вертикаль» выступает в качестве генерального
                                подрядчика при строительстве объектов различной сложности.
                                Генеральный подряд реализует полный комплекс функций по управлению
                                строительством объекта благодаря умениям и знаниям по эффективному
                                использованию кадровых, финансовых, материальных, технических и временных ресурсов.
                        </p>
                        <div className={styles.buttonContainer}>
                            <button>Перейти</button>
                        </div>
                    </div>
                </Link>
                <Link to={`/type?type=zeroCycle`}>
                    <div className={styles.zeroCycle}>
                        <img src="assets/building-2.png" alt="Нулевой цикл" />
                        <h6>Нулевой цикл</h6>
                        <p>Важной возможностью нашего коллектива является ведение
                                строительства на основе разработанного нами оптимального проекта.
                                Эта возможность доступна далеко не всем, так как многие не владеют
                                опытом практического строительства и собственными инженерно-строительными кадрами.
                        </p>
                        <div className={styles.buttonContainer}>
                            <button>Перейти</button>
                        </div>
                    </div>
                </Link>

            </div>

            {/*<div className={styles.slider}>*/}
            <Slider type="Building" items={data} />
            {/*</div>*/}
        </div>


    );
}
