import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { CSSTransition, TransitionGroup } from "react-transition-group";

import withLocation from "../../modules/withLocation";

import styles from './index.module.css'
import About from "./about";
import Team from "./team";
import Objects from "./objects";
import Work from "./work";
import AboutNavigation from "./navigation";
import './styles.css';


class AboutComponent extends React.Component {

    componentDidMount () {
        document.body.style.overflow = 'auto'
    }

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

        let title;

        switch (this.props.param.type) {
            case 'about': {
                title = 'О компании';
                break;
            }
            case 'team': {
                title = 'Наша команда';
                break;
            }
            case 'work': {
                title = 'Как мы работаем';
                break;
            }
            case 'object': {
                title = 'Объекты';
                break;
            }
            default: {
                title = 'О компании'
            }
        }

        return (
            <div className={styles.container} style={{ margin: '0 auto'}}>
                <div className={styles.wrapper}>
                    <img src="assets/about-wrapper.png" alt="О компании" />
                    <h4 className={styles.title}>{title}</h4>
                    <p className={styles.description}>
                        Мы рады приветствовать Вас на сайте «Вертикаль».
                        Мы - сплоченная команда профессиональных инженеров.
                        Инженерная команда и ее руководство – это основной ресурс, который мы предлагаем Вам!
                    </p>
                </div>
                <AboutNavigation />
                <TransitionGroup>
                    <CSSTransition
                        key={this.props.param.type}
                        classNames={"slide-back"}
                        timeout={{ enter: 500, exit: 500 }}
                    >
                        {this.props.param && this.renderSwitch(this.props.param.type)}
                    </CSSTransition>
                </TransitionGroup>
            </div>


        );
    }
}

export default withLocation(AboutComponent)
