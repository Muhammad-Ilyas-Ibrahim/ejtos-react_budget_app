import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {
    const { dispatch } = useContext(AppContext);
    const changeHandler = (e) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        });
    }
    return (
        <div className='row'>
            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                <div className="input-group-prepend">
                    <label className="input-group-text bg-success text-white rounded-0" htmlFor="inputGroupSelect03">Currency</label>
                </div>
                <select className="custom-select bg-success text-white" id="inputGroupSelect03" onChange={changeHandler}>
                    <option defaultValue value="£" name="Pound">£ Pound</option>
                    <option value="$" name="Dollar">$ Dollar</option>
                    <option value="€" name="Euro">€ Euro</option>
                    <option value="₹" name="Ruppee">₹ Ruppee</option>
                </select>
            </div>
        </div>
    )
}

export default ChangeCurrency;