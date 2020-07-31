import React from 'react';
import { Link } from 'react-router-dom';
import Plan from './Plan.js';
import {rows} from './Plan.js';
import {createData} from './Plan.js';

export default class DeletePlan extends React.Component {
    state = {
        name: '',
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let name=this.state.name;
        rows.splice(rows.indexOf(name, 1));
    }
    

    render () {
        
        return (
            <div class="centered">
                <form className="authorization">
                <h2>Удаление плана</h2>
                <input 
                type="name"
                className="name" 
                name="name"          
                placeholder='Введите ФИО сотрудника'                     
                value={this.state.name} 
                onChange={e => this.change(e)}
                />
                <br/>
                <br/>
                <Link to="/plan">
                    <button className="ReturnButton">
                        Вернуться назад
                    </button>
                </Link>
                <button 
                className="DeletePlanSubmit"
                onClick={(e) => this.onSubmit(e)}>
                Удалить сотрудника
                </button>
                </form>
            </div>
        )
    }
}