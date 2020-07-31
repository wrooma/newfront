import React from 'react';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import Plan from './Plan.js';
import { rows } from './Plan.js';
import {createData} from './Plan.js';

export default class AddPlan extends React.Component {
    state = {
        name: '',
        position: '',
        head: '',
        hr: '',
        period: '',
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        console.log(rows);
        let name=this.state.name;
        let position=this.state.position;
        let head=this.state.head;
        let hr=this.state.hr;
        let period=this.state.period;
        rows.push(createData(name,position,head,hr,period));
    }
    

    render () {
        
        return (
            <div class="centered">
                <form className="authorization">
                <h2>Добавление плана</h2>
                    <input 
                    type="name"
                    className="name" 
                    name="name"          
                    placeholder='Введите ФИО сотрудника' 
                    value={this.state.name} 
                    onChange={e => this.change(e)}
                    />
                <br />
                <br />
                    <input
                    type="position" 
                    className="position"
                    name="position"
                    placeholder='Введите наименование позиции' 
                    value={this.state.position} 
                    onChange={e => this.change(e)}
                    />
                <br />
                <br />
                    <input
                    type="head" 
                    className="head"
                    name="head"
                    placeholder='Введите ФИО руководителя' 
                    value={this.state.head} 
                    onChange={e => this.change(e)}
                    /> 
                <br />
                <br />
                    <input
                    type="hr" 
                    className="hr"
                    name="hr"
                    placeholder='Введите hr' 
                    value={this.state.hr} 
                    onChange={e => this.change(e)}
                    /> 
                <br />
                <br />
                    <input
                    type="period" 
                    className="period"
                    name="period"
                    placeholder='Введите сроки выполнения' 
                    value={this.state.period} 
                    onChange={e => this.change(e)}
                    />
                <br />
                <br />
                <Link to="/plan">
                    <button className="ReturnButton">
                        Вернуться назад
                    </button>
                </Link>
                <button 
                className="AddPlanSubmit"
                onClick={(e) => this.onSubmit(e)}>
                Добавить сотрудника
                </button>
                </form>
            </div>
        )
    }
}

