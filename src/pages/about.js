import React from 'react'
import Layout from '../components/layout'
import AboutComponent from "../components/about";

class AboutContainer extends React.Component {
    render() {

        return (
            <Layout footer location={this.props.location} >
                <AboutComponent/>
            </Layout>
        )
    }
}

export default AboutContainer


