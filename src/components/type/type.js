import React from 'react'
import styles from './type.module.css'
import {Link} from "gatsby";
import Slider from "../slider/slider";
import designImage from './design.jpg';
import typeWrapper from './type-wrapper.png';
import arrowRight from './arrow-right.svg';
import designImage2 from './design2.jpg';

export default ({ConstructiveDecisions, GeneralContract, GeneralDesign, GeotechnicalSubstantation, ZeroCycle, type}) => {

    let wrapperTitle;
    let wrapperDescription;
    let description;
    let link;
    let linkTitle;
    let list;
    let content;
    let data;

    switch (type) {
        case 'generalContract': {
            data = GeneralContract
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
        case 'generalDesign': {
            data=GeneralDesign
            wrapperTitle = 'Генеральное проектирование';
            wrapperDescription =
                'Разработка проекта – важнейший этап жизненного цикла объекта капитального строительства. ' +
                'Решения, закладываемые в проект, определяют стоимость его реализации и эксплуатации, ' +
                'именно поэтому в вопросе выбора генерального проектировщика необходим основательный подход.';
            link = 'Проектирование';
            linkTitle = 'design';
            content = <div className={styles.content}>
                    <div className={styles.contentRow}>
                        <div className={styles.contentRowCol}>
                            <p className={styles.contentTitle}>«Дешевый проект – дорогое строительство»</p>
                            <p className={styles.contentDescription}>
                                Естественным желанием любого предпринимателя является уменьшить издержки на всех этапах реализации проекта.
                                В условиях высокой конкуренции на рынке многие организации в погоне за снижением стоимости разработки проектной
                                документации привлекают малоквалифицированных и/или перегруженных сотрудников.
                                Отсутствие опыта и времени, которые должны быть уделены проекту, приводит к ошибкам и принятию нерациональных решений,
                                что порождает снижение экономической эффективности проекта для Заказчика и инвесторов в момент его реализации.
                                <br/> <br/>
                                Грамотное распределение рабочей нагрузки на специалистов и большой опыт наших сотрудников позволяют
                                нам реализовывать наиболее оптимальные решения, которые дают значительный экономический
                                эффект для всего инвестиционного проекта. Мы знаем, где и как можно сэкономить деньги Заказчика.
                            </p>
                        </div>
                        <div className={styles.designImageContainer2}>
                            <img  className={styles.designImage} src={typeWrapper} />
                        </div>
                    </div>
                    <div className={styles.contentRow}>
                        <div className={styles.designImageContainer}>
                            <img className={styles.designImage2} src={designImage2} />
                        </div>
                        <div className={styles.contentRowCol}>
                            <p className={styles.contentDescription2}>
                                Благодаря профессионализму команды проектировщиков, работающей в тандеме с коллегами из
                                строительного подразделения, уже на начальном этапе работ закладываются оптимальные для
                                каждого конкретного случая проектные решения, в реализации которых мы уверены.
                                <br/> <br/>
                                Проектирование представляет собой сложный процесс непрерывного взаимного обмена
                                информацией между архитекторами, конструкторами, инженерами и другими специалистами,
                                участвующими в разработке проектной и рабочей документации. Современные инструменты
                                управления проектами и технологии информационного моделирования (BIM), используемые
                                в нашей компании, позволяют оптимизировать процессы обмена информацией. Таким образом,
                                мы максимально сокращаем сроки разработки документации и моментально реагируем на
                                ситуации, возникающие при строительстве или же изменении технического задания со
                                стороны Заказчика. Разрабатываемая комплексная трехмерная модель объекта, проверяемая
                                в том числе и автоматизированными средствами, позволяет избежать большей части ошибок
                                и коллизий. Общеизвестно, что чем позднее обнаружена ошибка в документации, тем сложнее
                                и дороже будет ее исправление, поэтому мы уделяем большое внимание качеству
                                разрабатываемой документации как на уровне принимаемых решений, так и при оформлении
                                выпускаемой документации.
                                <br/> <br/>
                                За годы работы нашими специалистами реализованы многочисленные проекты различной
                                степени сложности: жилые дома, автостоянки, гостиницы, спортивные комплексы и другие
                                общественные здания.
                            </p>

                            <h3 className={styles.verticalEto}>Vertical - это</h3>
                            <ul className={styles.generalProject} style={{paddingInlineStart: "10px"}}>
                                    <li><b>Профессионализм</b> <span>– высокая компетентность сотрудников,</span></li>
                                    <li><b>Практичность</b><span> - поиск оптимальных технических и организационных путей,
                                        которые позволяют предлагать наилучшие, как с производственной, так и с проектной точки зрения решения,</span>
                                    </li>
                                    <li><b>Понимание</b><span> - желание и умение разделять ключевые интересы Заказчика,</span></li>

                                    <li>
                                        <b>Технологичность</b><span> - использование технологий виртуального строительства (VDC или BIM) при разработке и проверке трехмерной модели и проектных решений.</span>
                                    </li>
                                </ul>

                        </div>
                </div>
                <div className={styles.description2}>
                    <span>
                        Мы готовы приступить к участию в проекте на любом из его этапов.
                        Оперативно проанализировав исходные данные и выполненные работы, мы сформируем подробный пакет предложений,
                        нацеленных на минимизацию затрат Заказчика. Учтем сроки реализации, неизменность технико-экономических показателей и другие его интересы.
                    </span>
                </div>
            </div>

            break;

        }
        case 'geotechnicalSubstantiation': {
            data = GeotechnicalSubstantation;
            wrapperTitle = 'Геотехническое обоснование';
            wrapperDescription =
                'Проектирование зданий и сооружений – это, ' +
                'пожалуй, основополагающий этап строительства объекта. ' +
                'Именно на этой стадии закладывается базис всех последующих этапов ' +
                'строительных или реконструкционных работ';
            link = 'Проектирование';
            linkTitle = 'design';

            content = <div className={styles.content}>
                <div className={styles.contentRow}>
                    <div className={styles.contentRowCol}>
                        <p className={styles.contentDescription}>
                            Изменилось и их содержание, произошла эволюция от простых расчетов по отдельным сечениям
                            c краткими выводами до сложной многофакторной структуры, включающую пошаговый анализ
                            производства работ нулевого цикла в трехмерной постановке задачи с развернутым набором
                            рекомендаций и необходимых мероприятий. Сегодня геотехническое обоснование находится в
                            тесной связи с такими разделами проектирования как ПОС и КР, и его выполнение требуется
                            практически для каждого строительного объекта.
                            <br/> <br/>
                            Современному строительству характерно все большее заглубление подземной части здания,
                            сопряженное с негативным воздействием на фундаменты и массив грунта основания вблизи зданий
                            и сооружений, в том числе имеющих историческую ценность. В грунтовых условиях, сложенных
                            слабыми тиксотропными грунтами особенно важно на стадии первоначальной разработки проекта
                            принять верные решения на основании расчетов и проработки конструктивных и технологических
                            решений.
                        </p>
                    </div>
                    <div className={styles.designImageContainer2}>
                        <img  className={styles.designImage} src={typeWrapper} />
                    </div>
                </div>
                <div className={styles.contentRow}>
                    <div className={styles.designImageContainer}>
                        <img className={styles.designImage2} src={designImage2} />
                    </div>
                    <div className={styles.contentRowCol}>
                        <p className={styles.contentDescription2}>
                            Строительный рынок предлагает разнообразные решения нулевого цикла и среди этого множества
                            стоимость затрат на данный этап работ может отличаться в разы.
                            <br/> <br/>
                            Принимая во внимание важность экономической составляющей строительства, геотехническое
                            обоснование специалистами ООО «Вертикаль» рассматривается как работа, требующая всесторонних
                            знаний инженера. Приоритетом является поиск точки оптимального конструктивного решения в
                            сочетании с безопасностью ведения строительных работ и экономической эффективности. Для нас
                            важно, чтобы разработанные решения могли быть реализованы практически, а не оставаться на
                            бумаге по причине их высокой стоимости или технической невозможности. В конечном итоге
                            качество геотехнического обоснования влияет на рентабельность объекта, потому что сроки
                            строительства напрямую зависят от технологичности решений.
                        </p>

                        <h3 className={styles.verticalEto}>В геотехническую оценку входит:</h3>
                        <ul className={styles.geoBase} style={{paddingInlineStart: "10px"}}>
                            <li><span>Определение необходимой технологии по выполнению ограждения котлована,
                                производству работ по откопке котлована. При разделении строительства на очереди,
                                расчет ведется с учетом взаимного влияния очередности строительства</span></li>
                            <li><span>Расчет осадок проектируемого комплекса аналитическими методами и численно.
                                При делении здания на секции, учитывается их взаимное влияние и очередность возведения
                            </span></li>
                            <li><span>Определение фактических размеров зоны влияния нового строительства. Разработка
                                рекомендаций по минимизации негативного влияния на примыкающие к площадке строительства
                                здания в том числе объектов культурного наследия</span></li>

                            <li>
                                <span>Определение схемы крепления и усилий в элементах крепления. Разработка необходимых
                                    мероприятий по сохранению окружающей застройки</span>
                            </li>

                            <li>
                                <span>Оценка влияния нагружения основания весом новых конструкций на окружающие здания
                                    в 30-ти метровой зоне влияния, в том числе объектов культурного наследия</span>
                            </li>
                            <li>
                                <span>Для объектов культурного наследия предусмотрена разработка Мероприятий по
                                    сохранности объекта культурного наследия</span>
                            </li>

                        </ul>

                    </div>
                </div>
                <div className={styles.contentRow}>
                    <div className={styles.contentRowCol}>
                        <h3 className={styles.geoBaseH3}>Рекомендации к геотехническому мониторингу</h3>
                        <p className={styles.contentDescription}>
                            Техническое заключение, содержащее расчеты, выводы, схемы крепления котлована
                            и технологию производства работ, рекомендации.
                            <br/> <br/>
                            ООО «Вертикаль» выполняет полный комплекс работ, связанный с анализом решений по нулевому циклу,
                            оценки стоимости строительства, подготовки документации, защиты принятых решений в экспертизе.
                        </p>
                    </div>
                    <div className={styles.designImageContainer2}>
                        <img className={styles.designImage3} src={typeWrapper} />
                    </div>
                </div>
                <div className={styles.description2}>
                    <span>
                        Также специалисты компании могут выполнить геотехнический консалтинг на этапе выбора участка
                        под застройку. Основываясь на объеме предполагаемого строительства, производится оценка
                        ожидаемых затрат и рисков при выполнении нулевого цикла. По сути, это предпроектное
                        геотехническое обоснование, содержащее укрупненные показатели по материалам, стоимости и
                        времени производства работ.
                    </span>
                </div>
            </div>

            break;
        }
        case 'zeroCycle': {
            data = ZeroCycle
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
        case 'сonstructiveDecisions': {
            data = ConstructiveDecisions
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
    }


    return (
        <div className={styles.type} style={{ width: '100%', margin: '0 auto', marginTop: '40px'}}>
            <div className={styles.wrapper}>
                <img src={designImage} alt={wrapperTitle} />
                <p className={styles.title}>{wrapperTitle}</p>
                <p className={styles.description}>{wrapperDescription}</p>
                <Link to={`/${linkTitle}`}>
                    <button className={styles.link} >
                        {link}
                    </button>
                </Link>
            </div>
            <div className={styles.info}>
                {description &&
                <p className={styles.description}>
                    {description}
                </p>}
                {description && <div className={styles.image}>
                    <img src={typeWrapper} alt={wrapperTitle} />
                    </div> }

                {content}
            </div>


            <Slider type='building' items={data} />

        </div>


    );
}
