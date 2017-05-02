import React,{Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component{
  render(){
    return (
      <div className='TodoItem'>
        <input type='checkbox' checked={this.props.todo.status==='completed'}
          onChange={this.toggle.bind(this)}/>
        <span className='title'>{this.props.todo.title}</span>
        <button onClick={this.delete.bind(this)}>删除</button>
      </div>    
    )
  }
  toggle(e,todo){
    console.log(todo);
    this.props.onToggle(e,this.props.todo);
  }
  delete(e,todo){
    console.log(todo);
    this.props.onDelete(e,this.props.todo);
  }
  
}
export default TodoItem