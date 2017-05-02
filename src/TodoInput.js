import React,{Component} from 'react';
import './TodoInput.css';

class TodoInput extends Component{
  render(){
    return(
      <input type='text' value={this.props.content}
        className='TodoInput' 
        placeholder='input sth,Enter'
        onChange={this.changeTitle.bind(this)}
        onKeyPress={this.submit.bind(this)}/>
    )      
  } 
  changeTitle(e){
    console.log('changeTitle'+':'+this.props);
    this.props.onChange(e);
  }
  submit(e){ 
    if(e.key==='Enter'){
      console.log("°´ÏÂÁËenter¼ü");
      this.props.onSubmit(e);
    }
  }
 
}

export default TodoInput