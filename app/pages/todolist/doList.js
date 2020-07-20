import React,{Component} from 'react';
import DoText from './DoText';

class DoList extends Component{

    //删除
    handleDelete(id){
        this.props.deleteEvent(id);
    }

    //改变
    handleChange(id){
        this.props.changeEvent(id);
    }

    render(){
        var doValue = this.props.chooseValue;
        const currentText = this.props.data.map(({id,text,complete,deleteFlag},index)=>{
            if(doValue == '1' && deleteFlag === false){
                return(
                    <DoText key={index} id={id} text={text} complete={complete} 
                        changeComplete={this.handleChange.bind(this)} 
                        deleteComplete={this.handleDelete.bind(this)}/>
                )
            }
            if(doValue == '2' && complete === false && deleteFlag === false){
                return(
                    <DoText key={index} id={id} text={text} complete={complete} 
                        changeComplete={this.handleChange.bind(this)} 
                        deleteComplete={this.handleDelete.bind(this)}/>
                )
            }
            if(doValue == '3' && complete === true && deleteFlag === false){
                return(
                    <DoText key={index} id={id} text={text} complete={complete} 
                        changeComplete={this.handleChange.bind(this)} 
                        deleteComplete={this.handleDelete.bind(this)}/>
                )
            } 
        })

        return(
            <div>{currentText}</div>
        )
    }
}

export default DoList;