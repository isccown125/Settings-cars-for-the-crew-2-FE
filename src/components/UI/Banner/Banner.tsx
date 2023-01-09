import React from 'react';
import './Banner.css'
import { AiOutlineDown } from 'react-icons/ai';

const Banner = () => (
    <div className='banner'>
        <h1>Get your driving experience <br/>on next level.</h1>
        <button>
            <p><strong>GO DOWN</strong></p>
            <a href='/'>
                <AiOutlineDown/>
            </a>
        </button>
    </div>
);

export default Banner;