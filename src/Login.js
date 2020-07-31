import React from 'react';
import { render } from '@testing-library/react';
import { Link, Redirect } from 'react-router-dom';


export default class Login extends React.Component {
    state = {
        email: '',
        password: '',
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        
    }

    render() {
        return (
                <div class="centered">
                    <form className="authorization">
                    <h2>Добро пожаловать в Гринатом!</h2>
                    <input 
                    type="email"
                    className="email" 
                    name="email"          
                    placeholder='Введите почту' 
                    value={this.state.login} 
                    onChange={e => this.change(e)}
                    />
                    <br />
                    <br />
                    <input
                    type="password" 
                    className="password"
                    name="password"
                    placeholder='Введите пароль' 
                    value={this.state.password} 
                    onChange={e => this.change(e)}
                    />
                    <br />
                    <br />
                    
                    <Link to='plan'>
                        <button 
                        className="LoginButton"
                        onClick={(e) => this.onSubmit(e)}>
                        Войти в систему
                        </button>
                    </Link>
                   
                    
                    <Link to="/signup">
                        <button className="RegisterButton">
                            Зарегистрироваться
                        </button>
                    </Link>
                    </form>
                </div>     
        )
    }
    
}