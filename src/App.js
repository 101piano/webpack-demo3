import React,{Component} from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      newTodo:'test',
      todoList:[
        {id:1,title:'第一条'},
        {id:2,title:'第2条'}
      ]
    }
  }
  
  render(){
    let todos=this.state.todoList.map((item,index)=>{//item指todoList里的每个元素
      return (
        <li>
          <TodoItem todo={item}/>  
        </li>
      )  
    });
    
    return (
      <div className='.App'>
        <h1>我的待办</h1>
        <TodoInput content={this.state.newTodo}/> 
        <ol>
          {todos}
        </ol>
      </div>
     
    )
    
  }

  
  
}

export default App

