// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1 className='title'>Call a Friend</h1>
            <p className='tagline'>your friendly contact app</p>
            <p className='titik'>...........................................................</p>
        </div>
    )
}

export default Header;