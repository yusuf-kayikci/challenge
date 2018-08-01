import React, { Component } from 'react';

export class Query extends React.Component{
    constructor(props){
        super(props);
        this.query = this.query.bind(this);
    }
    query(e){
        e.preventDefault();
        let values = [];
        values.push(document.getElementById('transactiontype').value);
        values.push(document.getElementById('currency').value);
        values.push(document.getElementById('orderby').value);
        console.log(values);
        this.props.query(values);
      }
    render(){

        return(
            <div className="query" >
                <div className= "box">
                    <input type="submit" className = "searchbutton" value="Search" onClick = {this.query}/> 
                </div>      
                <div className = "box">
                    <select id = "orderby" className="box">
                        <option value="0" hidden>Order by</option>
                        <option value="date">date</option>
                        <option value="-date">-date</option>
                    </select>
                </div>
                <div className = "box">
                    <select id = "currency" className="box">
                        <option value="0" hidden>Currency</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>
                <div className = "box">
                    <select id = "transactiontype" className="box">
                        <option value="0" hidden>Transaction type</option>
                        <option value="payment">Payment</option>
                        <option value="credit">Credit</option>
                    </select>
                </div>        


            </div>
        );
        
    }
}