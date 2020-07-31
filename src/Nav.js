import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav () {
    return (
        <div className="image">
            <div className="header"> 
                <nav className="navigation">
                <img className="logo" src="https://greenatom.ru/local/templates/main_page/assets/images/logo.png"></img>
                    <ul className="navlinks">
                        <Link to="/">
                            <li>Главная</li>
                        </Link>                  
                        <Link to="/login">
                            <li>Войти</li>
                        </Link>
                        <Link to="/signup">
                            <li>Зарегистрироваться</li>
                        </Link>
                    </ul>                    
                </nav>
            </div> 
        </div>
                      
    )
}

export default Nav;