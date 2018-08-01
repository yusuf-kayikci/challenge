import React, { Component } from 'react';

var items;
export class MyTable extends Component{
    render(){
        if(this.props.tr != null){
            items = this.props.tr.map((element, i) => {
                return (  
                    <div class="divTableBody" key={i}>
                        <div className="divTableMaster noHaveDetail">
                            <div class="divTableCell">{element.card.holderName}</div>
                            <div class="divTableCell">{element.brandId}</div>
                            <div class="divTableCell">XXXX {element.card.lastFourDigits}</div>
                            <div class="divTableCell">{element.action}</div>
                            <div class="divTableCell alignright">{element.amount}</div>
                            <div class="divTableCell">{element.currencyCode}</div>
                        </div>
                        <tr className = "divTableDetail noVisibleDetail" >
                            <td colSpan="6" className = "divTableCell">
                                <div className = "subTable">
                                    <div className = "row">
                                        <div className = "cell">
                                            <div className = "row">
                                                <div className = "header">
                                                    ID:
                                                </div>
                                                <div className = "detail">
                                                    {element.id}
                                                </div>
                                            </div>
                                            <div className = "row">
                                                <div className = "header">
                                                    Tracking code:
                                                </div>
                                                <div className = "detail">
                                                    {element.trackingCode}
                                                </div>
                                            </div>
                                            <div className = "row">
                                                <div className = "header">
                                                    Brand ID
                                                </div>
                                                <div className = "detail">
                                                    {element.brandId}
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "cell">
                                        <div className = "row">
                                            <div className = "header">
                                                First 6 digits:
                                            </div>
                                            <div className = "detail">
                                                {element.card.firstSixDigits} XXXX
                                            </div>
                                        </div>
                                            <div className = "row">
                                                <div className = "header">
                                                    Expiry month: 
                                                </div>
                                                <div className = "detail">
                                                    {element.card.expiryMonth}
                                                </div>
                                            </div>
                                            <div className = "row">
                                                <div className = "header">
                                                    Expiry year: 
                                                </div>
                                                <div className = "detail">
                                                    {element.card.expiryYear}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>    
                        </tr>    
                    </div>
                );
              })
        }
        return(
            <div class="divTable">
                <div class="divTableHeading">
                    <div className = "divTableHead">Name</div>
                    <div className = "divTableHead">Brand</div>
                    <div className = "divTableHead">Last 4 Digits</div>
                    <div className = "divTableHead">Transaction Type</div>
                    <div className = "divTableHead alignright">Amount</div>
                    <div className = "divTableHead">Currency</div>
                </div>
                {items}

            </div>
        );
    }
}