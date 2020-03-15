import React from 'react'
import Layout from '../components/layouts'
import Contacts from "../components/contacts/contacts";
import {graphql} from "gatsby";
import get from "lodash/get";

class ContactsContainer extends React.Component {
    render() {

        const allContentfulAboutOurTeam = get(this, 'props.data.allContentfulContacts.nodes[0]');


        return (
                <Contacts contactsTitles={allContentfulAboutOurTeam}/>
        )
    }
}

export const contactsItemQuery = graphql`
query contactsItemQuery {
    allContentfulContacts {
        nodes {
            phone {
                phone
            }
            email {
                email
            }
            adressName {
                adressName
            }
            addressLink {
                addressLink
            }
            schedule
        }
    }
}
`

export default ContactsContainer


