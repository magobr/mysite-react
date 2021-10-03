import React from 'react';

import './style.css';
export default class Table extends React.Component {
    
    render(){
        const { tableHead, tableBody } = this.props
        let tableBodyVal = JSON.parse(tableBody);
        return(
            <div className="Table">
                <div className="table-container">
                    <div className="table-header">
                        <div className="line-table">
                            {tableHead.map((val)=>{
                                return(
                                    <div className="cel" key={val}>{val}</div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="table-body">
                        {tableBodyVal.map((val, i)=>{
                            return(
                                <div className="line-table" key={i}>
                                    <div className="cel" key={val._id}>{i+1}</div>
                                    <div className="cel" key={val.name}>{val.name}</div>
                                    <div className="cel" key={val.email}>{val.email}</div>
                                    <div className="cel" key={i+1}>asdasd</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
    
}
