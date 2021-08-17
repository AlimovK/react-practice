import React, { Component } from 'react'
import './order.css'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="order">
                <h1 className='order-title'>Your Orders</h1>
                <div>{
                    this.props.selected?.map(value=>{
                        return(
                            <div className='selected-list'>
                                <p className='elements'> {value.title}</p>
                                <p className='elements'>{value.price}</p>
                                <button onClick={()=>this.props.onDelete(value.id)}>delete</button>
                            </div>
                        )
                    })
                }</div>
                <div className='total'>
                    total: {this.props?.total} so'm
                </div>
            </div>
        )
    }
}
