import React from 'react'
import Layout from '../components/layout'
import Contacts from "../components/contacts/contacts";

class ContactsContainer extends React.Component {
    render() {

        return (
            <Layout footer={false} location={this.props.location} >
                <Contacts/>
            </Layout>
        )
    }
}

export default ContactsContainer


