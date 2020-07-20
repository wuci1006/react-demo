import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {seconds:0};
    }
    tick(){
        this.setState(state => ({
            seconds:state.seconds + 1
        }));
    }
    componentDidMount(){
        this.interval = setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return (
            <div>
                <p>累加:{this.state.seconds}</p>
                <p>{new Date().toLocaleTimeString()}</p>
                
            </div>
            
        )
    }
}

export default Home;