import React from 'react'
import styles from './about.module.css'
import './styles.css';
import toCustomers from './toCustomers.jpg';

class About extends React.Component {


    render() {


        return (
            <div className={styles.about}>

                <div className={styles.descriptions}>
                   <div>
                       Наше призвание-изучать, придумывать, проектировать, строить, осуществлять строительный контроль,
                       осуществлять экспертизу проектов, консультировать, искать и применять новейшие технологии, выбирать
                       наилучшие варианты решения стоящих перед Вами задач. Мы живем в период времени, когда отточенная и
                       яркая мысль двигает экономику вперед, больше чем деньги, а знания приобретают ключевое значение для
                       успеха всего дела в целом. Именно поэтому мы сосредоточили свое внимание на инженерном деле,
                       специальных знаниях и технологиях.
                   </div>
                    <div>
                        Наше главное конкурентное преимущество – это четкое видение перспективы и комплексное ведение
                        проектов: от замысла до завершения проекта и сдачи его в эксплуатацию. Фундаментальные знания,
                        полученные нашими сотрудниками в учебных заведениях, в совокупности с опытом работы и интеграцией
                        в одной компании, создают объединенный интеллект.
                    </div>
                </div>
                <div className={styles.description2}>
                    <span>
                    Инжиниринговая Компания ­ это современная строительная организация,
                    построенная по принципу инженерностроительного холдинга полного цикла.
                    Основным принципом работы компании является использование накопленных инженерных знаний и системная
                    интеграция проверенных профессиональных ресурсов и передовых технологий
                    </span>
                </div>
                <div className={styles.toCustomers}>
                    <h4>Заказчикам</h4>
                    <div className={styles.container}>
                        <img src={toCustomers} alt="Заказчикам" />
                        <div className={styles.text}>
                            <div>
                                В течение последних 7 лет мы оказываем помощь своим клиентам, выступая в качестве генерального подрядчика,
                                технического заказчика, проектировщика или специалиста по техническому надзору.
                            </div>
                            <div>
                                Заказчиками нашей компании являются известные в городе компании.
                                Среди организаций, доверивших «Вертикаль» проектирование и строительство……...
                            </div>
                            <div>
                                На сегодня «Вертикаль» успешно реализовано свыше … проектов, что подтверждено отзывами наших Заказчиков.
                                Мы помогаем реализовывать и контролировать строительные процессы и возводить дома, строить офисные центры,
                                инженерные коммуникации. Наш портфель проектов постоянно расширяется, ежедневно обогащая нас новыми знаниями и возможностями.
                                Мы готовы к новым свершениям.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default About
