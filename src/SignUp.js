import React from 'react';
import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';

export default class SignUp extends React.Component {
    state = {
        name: '',
        position: '',
        access: ''
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
                    <h2>какой-то текст или еще что-нибудь</h2>
                    <br/>
                    <input type="name" className="name" name="name" placeholder='Введите имя' 
                    value={this.state.name} 
                    onChange={e => this.change(e)}
                    />
                    <br/>
                    <br/>
                    <input type="position" className="position" name="position" placeholder='Введите должность' 
                    value={this.state.position} 
                    onChange={e => this.change(e)}
                    />
                    <br/>
                    <br/>
                    <input type="access" className="access" name="access" placeholder='Введите уровень доступа' 
                    value={this.state.access} 
                    onChange={e => this.change(e)}
                    />
                    <br/>
                    <br/>
                    <Link to="/">
                        <button 
                        className="RegisterButton"
                        onClick={(e) => this.onSubmit(e)}>
                        Зарегистрироваться
                        </button>
                    </Link> 
                    </form>
                </div>     
        )
    }
    
}