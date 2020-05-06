import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  state={
  		value1 : Math.floor(Math.random() * 100),
        value2 : Math.floor(Math.random() * 100),
        value3 : Math.floor(Math.random() * 100),
        proposedAnswer :Math.floor(Math.random() * 3),
        numQuestions : 0,
        numCorrect : 0,
    }
	updateValues = ()=>{
    	this.setState(()=>({
        	value1: Math.floor(Math.random() * 100),
          	value2 : Math.floor(Math.random() * 100),
        	value3 : Math.floor(Math.random() * 100),
          	proposedAnswer :Math.floor(Math.random() * 3),
        }))
    }
    checkTrue =(value1,value2,value3)=>{
  		if((value1+value2+value3)==((this.state.proposedAnswer)+(this.state.value1 + this.state.value2 + this.state.value3))){
        	this.setState((currentState)=>({
            	numCorrect: currentState.numCorrect+1
            }))
        }
    	else{
        	this.setState((currentState)=>({
            	numQuestions: currentState.numQuestions+1
            }))
        }
    	this.updateValues();
    }
	checkFalse =(value1,value2,value3)=>{
  		if((value1+value2+value3)!=((this.state.proposedAnswer)+(this.state.value1 + this.state.value2 + this.state.value3))==true){
        	this.setState((currentState)=>({
            	numCorrect: currentState.numCorrect+1
            }))
        }
      	else{
          	this.setState((currentState)=>({
            	numQuestions: currentState.numQuestions+1
            }))
        }
    	this.updateValues();
    }
  
  render() {
    return (	
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer+(this.state.value1 + this.state.value2 + this.state.value3)}`}</p>
          </div>
          <button onClick={()=>this.checkTrue(this.state.value1,this.state.value2,this.state.value3)}>True</button>
          <button onClick={()=>this.checkFalse(this.state.value1,this.state.value2,this.state.value3)}>False</button>
          <p className="text">
            Answers: {this.state.numCorrect}/ Questions: {this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
