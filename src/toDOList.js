import { Component } from "react";

class toDOList extends Component{

    constructor(){
      super()
      this.state = {
        userInput: "",
        toDoList:[]
      }
    }

    onChangeEvent(e){
        this.setState({userInput: e });
    }

    addItem(input){
        if (input === ''){
            alert ("Please, do something today haha...")
        } else {
        let listArray = this.state.toDoList;
        listArray.push(input);
        this.setState({toDoList: listArray, userInput:''})
        }}

    deleteItem(){
            let listArray= this.state.toDoList;
            listArray = []
            this.setState({toDOList: listArray})
        }
    crossedWord(event){
            const li = event.target;
            li.classList.toggle('crossed');
        }
    onFormSubmit(e){
            e.preventDefault();
        }

    render(){
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <input type="text" placeholder="what to do today: "
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}
                    />
                </div>
                <div className="container">
                    <button onClick={() => this.addItem(this.state.userInput)} className="add" >ADD</button>
                </div>
                <ol>
                    {this.state.toDoList.map((item, index) =>(
                        <li  onClick={this.crossedWord} key={index}>
                            {item}
                        </li>
                    ))}
                </ol>
                <div className="container">
                    <button onClick={() => this.deleteItem(this.state.userInput)} className="delete">DELETE</button>
                </div>
            
            </form>
            </div>
        )
    }

}


export default toDOList;