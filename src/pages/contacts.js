import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Home from "../components/home/home";
import Contacts from "../components/contacts/contacts";

class ContactsContainer extends React.Component {
    render() {


        console.log('posts', )

        return (
            <Layout footer={false} location={this.props.location} >
                <Contacts/>
            </Layout>
        )
    }
}

export default ContactsContainer


