import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';



function createData(name, position, head, hr, period) {
    return { name, position, head, hr, period};
}
const rows = [
    
]
export {rows};
export {createData};
export default class Plan extends React.Component {
    
    render () {
        
        return (
            <div>
                <div className="plan">
                    <TableContainer component={Paper}>
                        <Table className="table" aria-label="simple table">
                            <TableHead className="TableHead">
                                <TableRow className="HeaderText">
                                    <TableCell><b className="b">ФИО сотрудника</b></TableCell>
                                    <TableCell align="right"><b className="b">Позиция</b></TableCell>
                                    <TableCell align="right"><b className="b">Руководитель</b></TableCell>
                                    <TableCell align="right"><b className="b">HR</b></TableCell>
                                    <TableCell align="right"><b className="b">Период</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">{row.name}</TableCell>
                                        <TableCell align="right">{row.position}</TableCell>
                                        <TableCell align="right">{row.head}</TableCell>
                                        <TableCell align="right">{row.hr}</TableCell>
                                        <TableCell align="right">{row.period}</TableCell>
                                    </TableRow>
                                )))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className="AddPlanButton">
                    <Link to="/addplan">
                    <button className="AddPlan">
                        Добавить план
                    </button>
                    </Link>
                </div>
                <div className="DeletePlanButton">
                    <Link to="/deleteplan">
                    <button className="DeletePlan">
                        Удалить план
                    </button>
                    </Link>
                </div>
            </div>
        )
    }
}