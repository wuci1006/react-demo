import React,{Component} from 'react';
import '../../styles/todolist/index.css';

class DoFooter extends Component{
    //全部
    handleAll(){
        let all = this.refs.all.value;
        this.props.submitChooseValue(all);
    }
    //还未完成
    handleActive(){
        let active = this.refs.active.value;
        this.props.submitChooseValue(active);
    }
    //已完成
    handleComplete(){
        let complete = this.refs.complete.value;
        this.props.submitChooseValue(complete);
    }
    render(){
        return (
            <div className="footContent">
                <h2>Show</h2>
                <button type="submit" className="footBtn" value="1" ref="all" 
                    onClick={this.handleAll.bind(this)}>全部</button>
                <button type="submit" className="footBtn" value="2" ref="active" 
                    onClick={this.handleActive.bind(this)}>还未完成</button>
                <button type="submit" className="footBtn" value="3" ref="complete" 
                    onClick={this.handleComplete.bind(this)}>已完成</button>
            </div>
        )
    }
}

export default DoFooter;