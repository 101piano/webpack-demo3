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
              .filter((item)=>!item.delete)
              .map((item,index)=>{//item指todoList里的每个元素
      return (
        <li key={index}>
          <TodoItem todo={item}
            onToggle={this.toggle.bind(this)}
            onDelete={this.delete.bind(this)}/>  
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
  toggle(e,todo){
    todo.status=todo.status==='completed' ? '':'completed';
    this.setState(this.state);
  }
  delete(e,todo){
    todo.delete=true;
    this.setState(this.state);
  }
 
}

export default App

let id=0;
function idMaker(){
  id+=1;
  return id;
}












































