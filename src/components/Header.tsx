import React from 'react'
import {FaPizzaSlice} from "react-icons/all";

export const Header = () => {
    return <header className='header'>
        <nav>
            <div className='logo'>
<img src='https://cdn-icons-png.flaticon.com/512/906/906334.png' alt='My logo'/>
            </div>
            <div className='settings'>
                <ul>
                    <li>+</li>
                    <li><FaPizzaSlice/></li>
                </ul>
            </div>
        </nav>

    </header>
}