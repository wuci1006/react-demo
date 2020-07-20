import React,{Component} from 'react';
import '../../styles/todolist/index.css';

class DoForm extends Component{

    //提交事件
    handleSubmit(event){
        event.preventDefault();
        let text  = this.refs.inputText.value;
        if(!text.trim()){
            alert('input can not be null');
            return;
        }
        this.props.addToDo({id:5,text,complete:false});
    }

    render(){
        return(
            <form className="formContent" onSubmit={this.handleSubmit.bind(this)}>
                <div className="formInput">
                    <input placeholder="todo" ref="inputText" />
                </div>
                <button type="submit" className="formBtn">添加</button>
            </form>
        )
    }
}

export default DoForm;