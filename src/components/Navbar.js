
import React, { Component } from 'react'


export default class NavBar extends Component {
    constructor(){
        super()
    }


    render(){
        return(
            <div>
                <div className='navbar'>
                    <h1 className='app-name'>Game Reviews</h1>
                    <div className='navbar-container'>
                        <button className='navbar-button'>Home</button>
                        <button className='navbar-button'>About</button>
                        <button className='navbar-button'>Support</button>
                    </div>

                </div>

            </div>
        )
    }
}