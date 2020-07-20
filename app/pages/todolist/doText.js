import React,{Component} from 'react';
import '../../styles/todolist/index.css';

class DoText extends Component{
    //改变
    dealComplete(){
        this.props.changeComplete(this.props.id);
    }
    //处理
    dealDelete(){
        this.props.deleteComplete(this.props.id);
    }
    render(){
        return(
            <div className="todoContent">
                <div className="todoWrap">
                    <span className="todoText" onClick={this.dealComplete.bind(this)}>
                        
                        <span className={this.props.complete ? 'line' : ''}>{this.props.text}</span>
                    </span>
                    <span className="todoText">
                        {this.props.complete ? '已完成' : '未完成'}
                    </span>
                    <span className="todoText">{this.props.id}</span>
                    <span className="todoBtn" onClick={this.dealDelete.bind(this)}>删除</span>
                </div>
            </div>
        )
    }
}

export default DoText;