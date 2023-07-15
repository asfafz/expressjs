import React, { Component } from 'react';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numb:0
        }
    }

inc=()=>{
    this.setState({numb:this.state.numb+1})
}
dec=()=>{
    this.setState({numb:this.state.numb-1})
}

neu=()=>{
    this.setState({numb:0})
}


    render() {
        return (  


<div class=" row justify-content-center" >
    <div class="col-md-5" style={{marginTop:'250px',border:'solid 2px black'}}>
                    <div>

                    <h1>React Counter</h1>
                    <h1>{this.state.numb}</h1>
                    <button className='btn btn-success' onClick={this.inc}>Increament</button>
                    <button className='btn btn-danger' onClick={this.dec}>Decreament</button>
                    <button className='btn btn-primary' onClick={this.neu}>Neutral</button>
                    </div></div>
                    </div>            


        );
    }
}

export default Main;
