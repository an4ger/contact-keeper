import React, {Fragment, useContext, useEffect} from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import Spinner from '../layout/Spinner'

const Contacts = () => {
    const contactContext = useContext(ContactContext)
    const {contacts, filtered, getContacts, loading} = contactContext

    const contactsArr = filtered ? filtered : contacts

    useEffect(() => {
        getContacts()
        // es-lint-disable-next-line
    }, [])

    if (loading || contacts === null) {
        return <Spinner/>
    }
    if (contacts && !contacts.length) {
        return <h4>Please, add some contact</h4>
    }
    return (
        <Fragment>
            <TransitionGroup>
                {contactsArr.map(contact =>
                        (
                            <CSSTransition key={contact._id} timeout={400} classNames="item">
                                <ContactItem contact={contact}/>
                            </CSSTransition>
                        )
                )}
            </TransitionGroup>
        </Fragment>
    )
}

export default Contacts