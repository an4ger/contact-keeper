import React, {useContext, useEffect, useRef} from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactFilter = () => {
    const contactContext = useContext(ContactContext)
    const text = useRef('')
    const {filterContacts, clearFilter, filtered} = contactContext

    useEffect(() => {
        if (filtered === null) {
            text.current.value = ''
        }
    })

    const onChange = e => {
        const value = text.current.value
        if (value !== '') {
            filterContacts(value)
        } else {
            clearFilter()
        }
    }
    return (
        <form>
            <input type="text" ref={text} placeholder="Filter contacts..." onChange={onChange}/>
        </form>
    )
}

export default ContactFilter
