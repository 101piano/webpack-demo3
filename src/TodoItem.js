import React,{Component} from 'react';

class TodoItem extends Component{
  render(){
    return (
      <div>
        <input type='checkbox' checked={this.props.status}
          onChange={this.toggle.bind(this)}/>
        <span>{this.props.todo.title}</span>
      </div>    
    )
  }
  toggle(e,todo){
    console.log(todo);
    this.props.onToggle(e,this.props.todo);
  }
  
  
}
export default TodoItem