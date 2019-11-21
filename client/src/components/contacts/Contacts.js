import React, {Fragment, useContext} from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const Contacts = () => {
    const contactContext = useContext(ContactContext)
    const {contacts, filtered} = contactContext

    const contactsArr = filtered ? filtered : contacts

    if (!contacts.length) {
        return <h4>Please, add some contact</h4>
    }
    return (
        <Fragment>
            <TransitionGroup>
                {contactsArr.map(contact =>
                        (
                            <CSSTransition key={contact.id} timeout={400} classNames="item">
                                <ContactItem contact={contact}/>
                            </CSSTransition>
                        )
                )}
            </TransitionGroup>
        </Fragment>
    )
}

export default Contacts