import React from 'react'
import withLocation from "../../modules/withLocation";

import styles from './index.module.css'
import About from "./about";
import Team from "./team";
import Objects from "./objects";
import Work from "./work";
import AboutNavigation from "./navigation";

class AboutComponent extends React.Component {


    renderSwitch(type) {


        switch(type) {
            case 'about':
                return <About />;
            case 'team':
                return <Team  />;
            case 'work':
                return <Work />
            case 'object':
                return <Objects />;
            default:
                return <About />;
        }
    }

    render() {

        return (
            <div className={styles.container} style={{ maxWidth: 1720,  margin: '0 auto'}}>
                <div className={styles.wrapper}>
                    <img src="assets/about-wrapper.png" alt="О компании" />
                    <h4 className={styles.title}>О компании</h4>
                    <p className={styles.description}>
                        Мы рады приветствовать Вас на сайте «Вертикаль».
                        Мы - сплоченная команда профессиональных инженеров.
                        Инженерная команда и ее руководство – это основной ресурс, который мы предлагаем Вам!
                    </p>
                </div>
                <AboutNavigation />
                {this.props.param && this.renderSwitch(this.props.param.type)}
            </div>


        );
    }
}

export default withLocation(AboutComponent)
