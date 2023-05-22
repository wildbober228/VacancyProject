import React from 'react';
import {Link} from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
    //разбить по end liny как в дизайне
    return (
        <div>
            <header className="top-bar">
                <h2 className='logo'>Jobored</h2>
                <nav className='navigation'>
                    <Link to="/">Поиск вакансий </Link>
                    <Link to="/favorite">Избранное </Link>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;
