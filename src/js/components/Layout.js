import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component{
    constructor(){
        super();
        this.state = {name: "doldol"};
    }
    render(){
        setTimeout(
            () => {this.setState({name: "Hello"});}
        , 1000);
        let components = [<Header />, <Footer />];
        return(
            <div>
                {this.state.name}
                {components}
            </div>
        );
    }
}