import React, { Component } from 'react';

class Menu extends Component{
    render(){
        return (
            <ul>
                <li><a href='/'>Create</a></li>
                <li><a href='/'>Read</a></li>
                <li><a href='/'>Update</a></li>
                <li><a href='/'>Delete</a></li>
            </ul>
        );
    }
}

export default Menu;