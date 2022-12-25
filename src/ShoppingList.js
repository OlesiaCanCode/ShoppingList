import { Component } from "react";
import icon from './icon.jpg';


export class ShoppingList extends Component{
    state = {
        userInput: "",
        shoppingList: []
    }

    onChangeEvent(e){
        this.setState({userInput:e})
        console.log(e);
    }

    addItem(input){
        if (input === '') {
            alert ("Please enter an item")
        }
        else{
        let listArray = this.state.shoppingList
        listArray.push(input)
        this.setState({shoppingList: listArray, userInput: ''})
        console.log(listArray);
    }
    }

    deleteItem(){
        let listArray = this.state.shoppingList;
        listArray =[];
        this.setState({shoppingList:listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text"
                placeholder="What do you wany to buy?"
                onChange= {(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>
            <ul>
                {this.state.shoppingList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}><img src={icon} width="40px" alt="icon"/>{item}</li>
                ))}
            </ul>
            <div className="container">
                <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
            </div>
            </form>
            </div>
        )
    }
}