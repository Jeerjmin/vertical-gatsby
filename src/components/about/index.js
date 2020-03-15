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

import aboutWrapper from "./about-wrapper.png"
import Documents from "./documents";

class AboutComponent extends React.Component {

    componentDidMount () {
        document.body.style.overflow = 'auto'
    }

    renderSwitch(type) {


        const {aboutCompanyTitles, aboutDocuments, aboutOurTeamTitles} = this.props

        switch(type) {
            case 'about': {

                const firstBlockText = aboutCompanyTitles[0].node.firstBlockText.firstBlockText.replace(/{new_line}/g, '\n');
                const secondBlockText = aboutCompanyTitles[0].node.secondBlockText.secondBlockText.replace(/{new_line}/g, '\n');
                const notification = aboutCompanyTitles[0].node.notification.notification.replace(/{new_line}/g, '\n');
                const thirdBlockText = aboutCompanyTitles[0].node.thirdBlockText.thirdBlockText.replace(/{new_line}/g, '\n');

                return <About
                              firstBlockText={firstBlockText}
                              secondBlockText={secondBlockText}
                              notification={notification}
                              thirdBlockText={thirdBlockText}
                />;
            }
            case 'team': {
                const secondTitle = aboutOurTeamTitles[0].secondTitle.secondTitle.replace(/{new_line}/g, '\n');
                const firstBlockText = aboutOurTeamTitles[0].firstBlockText.firstBlockText.replace(/{new_line}/g, '\n');
                const secondBlockText = aboutOurTeamTitles[0].secondBlockText.secondBlockText.replace(/{new_line}/g, '\n');
                const notification = aboutOurTeamTitles[0].notification.notification.replace(/{new_line}/g, '\n');
                const thirdBlockText = aboutOurTeamTitles[0].thirdBlockText.thirdBlockText.replace(/{new_line}/g, '\n');
                return <Team
                        secondTitle={secondTitle}
                        firstBlockText={firstBlockText}
                        secondBlockText={secondBlockText}
                        notification={notification}
                        thirdBlockText={thirdBlockText}
                />;
            }
            case 'work':
                return <Work />
            case 'object':
                return <Objects />;
            case 'documents': {
                const filesLinks = aboutDocuments[0].filesLinks;
                const filesNames = aboutDocuments[0].filesNames;

                return <Documents filesLinks={filesLinks} filesNames={filesNames}/>;
            }
            default:
                return <About />;
        }
    }

    render() {

        let title;
        let description;
        const {aboutCompanyTitles, aboutDocuments, aboutOurTeamTitles} = this.props

        switch (this.props.param.type) {
            case 'about': {
                title = aboutCompanyTitles[0].node.title.title;
                description = aboutCompanyTitles[0].node.description.description.replace(/{new_line}/g, '\n');
                break;
            }
            case 'team': {
                title = aboutOurTeamTitles[0].title.title;
                description = aboutOurTeamTitles[0].description.description.replace(/{new_line}/g, '\n');
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
            case 'documents': {
                title = aboutDocuments[0].title.title;
                description = aboutDocuments[0].description.description.replace(/{new_line}/g, '\n');
                break;
            }
            default: {
                title = 'О компании'
            }
        }

        return (
            <div className={styles.container} style={{ margin: '0 auto'}}>
                <div className={styles.wrapper}>
                    <img src={aboutWrapper} alt="О компании" />
                    <h4 className={styles.title}>{title}</h4>
                    <p className={styles.description}>
                        {description}
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
