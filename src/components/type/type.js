import React from 'react'
import styles from './type.module.css'
import {Link} from "gatsby";
import Slider from "../slider/slider";

export default ({data, type}) => {

    let wrapperTitle;
    let wrapperDescription;
    let description;
    let link;
    let linkTitle;

    console.log('type', type)

    switch (type) {
        case 'generalContract': {
            wrapperTitle = 'Генеральный подряд';
            wrapperDescription =
                'Проектирование зданий и сооружений – это, ' +
                'пожалуй, основополагающий этап строительства объекта. ' +
                'Именно на этой стадии закладывается базис всех последующих этапов ' +
                'строительных или реконструкционных работ';
            link = 'Строительство';
            linkTitle = 'building';
            description = 'Наше призвание-изучать, придумывать, проектировать, ' +
                'строить, осуществлять строительный контроль, осуществлять экспертизу проектов, ' +
                'консультировать, искать и применять новейшие технологии, выбирать наилучшие варианты ' +
                'решения стоящих перед Вами задач. Мы живем в период времени, когда отточенная и ' +
                'яркая мысль двигает экономику вперед, больше чем деньги, а знания приобретают ' +
                'ключевое значение для успеха всего дела в целом. ' +
                'Именно поэтому мы сосредоточили свое внимание на инженерном деле, ' +
                'специальных знаниях и технологиях. Наше главное конкурентное преимущество – ' +
                'это четкое видение перспективы и комплексное ведение проектов: от замысла до завершения ' +
                'проекта и сдачи его в эксплуатацию. Фундаментальные знания, полученные нашими сотрудниками ' +
                'в учебных заведениях, в совокупности с опытом работы и интеграцией в одной компании, создают объединенный.'
            break;
        }
        case 'generalDesign': {
            wrapperTitle = 'Генеральное проектирование';
            wrapperDescription =
                'Проектирование зданий и сооружений – это, ' +
                'пожалуй, основополагающий этап строительства объекта. ' +
                'Именно на этой стадии закладывается базис всех последующих этапов ' +
                'строительных или реконструкционных работ';
            link = 'Проектирование';
            linkTitle = 'design';
            description = 'Наше призвание-изучать, придумывать, проектировать, ' +
                'строить, осуществлять строительный контроль, осуществлять экспертизу проектов, ' +
                'консультировать, искать и применять новейшие технологии, выбирать наилучшие варианты ' +
                'решения стоящих перед Вами задач. \n \n Мы живем в период времени, когда отточенная и ' +
                'яркая мысль двигает экономику вперед, больше чем деньги, а знания приобретают ' +
                'ключевое значение для успеха всего дела в целом. ' +
                'Именно поэтому мы сосредоточили свое внимание на инженерном деле, ' +
                'специальных знаниях и технологиях. \n \n Наше главное конкурентное преимущество – ' +
                'это четкое видение перспективы и комплексное ведение проектов: от замысла до завершения ' +
                'проекта и сдачи его в эксплуатацию. Фундаментальные знания, полученные нашими сотрудниками ' +
                'в учебных заведениях, в совокупности с опытом работы и интеграцией в одной компании, создают объединенный.'
            break;

        }
        case 'geotechnicalSubstantiation': {
            wrapperTitle = 'Геотехническое обоснование';
            wrapperDescription =
                'Проектирование зданий и сооружений – это, ' +
                'пожалуй, основополагающий этап строительства объекта. ' +
                'Именно на этой стадии закладывается базис всех последующих этапов ' +
                'строительных или реконструкционных работ';
            link = 'Проектирование';
            linkTitle = 'design';
            description = 'Наше призвание-изучать, придумывать, проектировать, ' +
                'строить, осуществлять строительный контроль, осуществлять экспертизу проектов, ' +
                'консультировать, искать и применять новейшие технологии, выбирать наилучшие варианты ' +
                'решения стоящих перед Вами задач. Мы живем в период времени, когда отточенная и ' +
                'яркая мысль двигает экономику вперед, больше чем деньги, а знания приобретают ' +
                'ключевое значение для успеха всего дела в целом. ' +
                'Именно поэтому мы сосредоточили свое внимание на инженерном деле, ' +
                'специальных знаниях и технологиях. Наше главное конкурентное преимущество – ' +
                'это четкое видение перспективы и комплексное ведение проектов: от замысла до завершения ' +
                'проекта и сдачи его в эксплуатацию. Фундаментальные знания, полученные нашими сотрудниками ' +
                'в учебных заведениях, в совокупности с опытом работы и интеграцией в одной компании, создают объединенный.'
            break;
        }
        case 'zeroCycle': {
            wrapperTitle = 'Нулевой цикл';
            wrapperDescription =
                'Проектирование зданий и сооружений – это, ' +
                'пожалуй, основополагающий этап строительства объекта. ' +
                'Именно на этой стадии закладывается базис всех последующих этапов ' +
                'строительных или реконструкционных работ';
            link = 'Строительство';
            linkTitle = 'building';
            description = 'Наше призвание-изучать, придумывать, проектировать, ' +
                'строить, осуществлять строительный контроль, осуществлять экспертизу проектов, ' +
                'консультировать, искать и применять новейшие технологии, выбирать наилучшие варианты ' +
                'решения стоящих перед Вами задач. Мы живем в период времени, когда отточенная и ' +
                'яркая мысль двигает экономику вперед, больше чем деньги, а знания приобретают ' +
                'ключевое значение для успеха всего дела в целом. ' +
                'Именно поэтому мы сосредоточили свое внимание на инженерном деле, ' +
                'специальных знаниях и технологиях. Наше главное конкурентное преимущество – ' +
                'это четкое видение перспективы и комплексное ведение проектов: от замысла до завершения ' +
                'проекта и сдачи его в эксплуатацию. Фундаментальные знания, полученные нашими сотрудниками ' +
                'в учебных заведениях, в совокупности с опытом работы и интеграцией в одной компании, создают объединенный.'
            break;
        }
        case 'сonstructiveDecisions': {
            wrapperTitle = 'Конструктивные решения';
            wrapperDescription =
                'Проектирование зданий и сооружений – это, ' +
                'пожалуй, основополагающий этап строительства объекта. ' +
                'Именно на этой стадии закладывается базис всех последующих этапов ' +
                'строительных или реконструкционных работ';
            link = 'Проектирование';
            linkTitle = 'design';
            description = 'Наше призвание-изучать, придумывать, проектировать, ' +
                'строить, осуществлять строительный контроль, осуществлять экспертизу проектов, ' +
                'консультировать, искать и применять новейшие технологии, выбирать наилучшие варианты ' +
                'решения стоящих перед Вами задач. Мы живем в период времени, когда отточенная и ' +
                'яркая мысль двигает экономику вперед, больше чем деньги, а знания приобретают ' +
                'ключевое значение для успеха всего дела в целом.'  +
                'Именно поэтому мы сосредоточили свое внимание на инженерном деле, ' +
                'специальных знаниях и технологиях. Наше главное конкурентное преимущество – ' +
                'это четкое видение перспективы и комплексное ведение проектов: от замысла до завершения ' +
                'проекта и сдачи его в эксплуатацию. Фундаментальные знания, полученные нашими сотрудниками ' +
                'в учебных заведениях, в совокупности с опытом работы и интеграцией в одной компании, создают объединенный.'
            break;
        }
    }


    return (
        <div className={styles.type} style={{ width: '100%', margin: '0 auto', marginTop: '40px'}}>
            <div className={styles.wrapper}>
                <img src="assets/design.jpg" alt={wrapperTitle} />
                <p className={styles.title}>{wrapperTitle}</p>
                <p className={styles.description}>{wrapperDescription}</p>
                <Link to={`/${linkTitle}`}>
                    <button className={styles.link} >
                        {link} <img className={styles.arrowLink} src="assets/arrow-right.svg" alt={link} />
                    </button>
                </Link>
            </div>
            <div className={styles.info}>
                <p className={styles.description}>
                    {description}
                </p>
                <div className={styles.image}>
                    <img src="assets/type-wrapper.png" alt={wrapperTitle} />
                </div>
            </div>


            <Slider type="Design" items={data} />

        </div>


    );
}
