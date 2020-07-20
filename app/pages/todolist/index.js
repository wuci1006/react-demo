import React, { Component } from 'react';
import DoForm from './DoForm';
import DoList from './DoList';
import DoFooter from './DoFooter';
import '../../styles/todolist/index.css';

class Do extends Component {
    state = {
        currentValue: 1,
        passData: [
            {id:1,text:'eating',complete:false,deleteFlag:false},
            {id:2,text:'sleeping',complete:false,deleteFlag:false},
            {id:3,text:'playing',complete:false,deleteFlag:false},
            {id:4,text:'coding',complete:true,deleteFlag:false}
        ]
    }

    //添加新项
    onAddToDo(newItem) {
        console.log(newItem)
        console.log(this.state.passData)
        let newData = this.state.passData.concat(newItem);
        this.setState({ passData: newData });
    }

    //筛选
    chooseValue(id) {
        this.setState({ currentValue: id });
    }

    //改变状态
    changeComplete(id) {
        let newData = this.state.passData.map((item, index) => {
            if (item.id === id) {
                item.complete = !item.complete;
            }
            return item;
        })
        this.setState({ passData: newData })
    }

    //删除
    deleteItem(id) {
        let currentIndex = 0;
        let newData = this.state.passData.map((item) => {
            if (item.id === id) {
                item.deleteFlag = true;  
            }
            return item;
        })
        
        this.setState({ passData: newData })
    }

    render() {
        return (
            <div className='DoContent'>
                <h1>ToDoList Demo with React</h1>
                <div className='DoLine'></div>
                <DoForm 
                    addToDo={this.onAddToDo.bind(this)} />
                <DoList data={this.state.passData} 
                    chooseValue={this.state.currentValue} 
                    changeEvent={this.changeComplete.bind(this)} 
                    deleteEvent={this.deleteItem.bind(this)} />
                <DoFooter 
                    submitChooseValue={this.chooseValue.bind(this)} />
            </div>
        )
    }
}

export default Do;