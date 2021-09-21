import React from 'react';

import './style.css';
export default class Table extends React.Component {
    
    render(){
        const { tableHead, tableBody } = this.props
        return(
            <div className="Table">
                <div className="table-container">
                    <div className="table-header">
                        <div class="line-table">
                            {tableHead.map((val)=>{
                                return(
                                    <div className="cel">{val}</div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="table-body">
                        <div className="line-table">
                            {tableBody.map((val)=>{
                                return(
                                    <div className="cel">{val}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}
