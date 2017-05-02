import React,{Component} from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      newTodo:'',
      todoList:[]
    }
  }
  
  render(){
    let todos=this.state.todoList
              .map((item,index)=>{//item指todoList里的每个元素
      return (
        <li key={index}>
          <TodoItem todo={item}/>  
        </li>
      )  
    });
    
    return (
      <div className='.App'>
        <h1>我的待办</h1>
        <TodoInput content={this.state.newTodo} 
          onChange={this.changeTitle.bind(this)}
          onSubmit={this.addTodo.bind(this)}/> 
        <ol>
          {todos}
        </ol>
      </div>    
    )
    
  }
  changeTitle(e){
    this.setState({
      newTodo:e.target.value,
      todoList:this.state.todoList
    });
  }
  addTodo(e){
    this.state.todoList.push({
      id: idMaker(),
      title: e.target.value,
      status: null,
      deleted: false
    });
    this.setState({
      newTodo:'',
      tododList:this.state.todoList
    }); 
  }
 
}

export default App

let id=0;
function idMaker(){
  id+=1;
  return id;
}












































