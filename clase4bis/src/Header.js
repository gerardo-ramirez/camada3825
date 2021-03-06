import React from 'react';
import logo from "./logo.svg";

class Header extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        console.log(this.props.title);

        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">{ this.props.title }</h1>
            </header>
        )
    }
}

export default Header;