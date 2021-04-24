import React from 'react';
import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate'
import Card from '../Card/Card'
const ExpenseItems = props => {
    
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.product}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItems;