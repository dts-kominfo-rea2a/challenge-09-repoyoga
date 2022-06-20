// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css'
import '../data/contacts.json'

const Contact = ({data}) => {
    return (
        <div className='container'>
            <div className='card'>
                <img className='foto' src='{data.photo}' alt='foto'></img>
                <div className='content'>
                    <h2>{data.name}</h2>
                    <p>{data.phone}</p>
                    <p>{data.email}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;