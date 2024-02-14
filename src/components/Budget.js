import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000){
            alert("The Budget shouldnot exceed 20000")
            return;
        }
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if(event.target.value < totalExpenses){
            alert("The Budget shouldnot not be less than the spendings")
            return;
        }
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary d-flex justify-content-between align-items-center'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} className="form-control w-75"></input>
        </div>
    );
};
export default Budget;