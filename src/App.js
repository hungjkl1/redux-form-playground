import React from 'react';
import ReactDOM from "react-dom";
import MyForm from './components/MyForm';
import './App.css';
import SegmentButton from './components/inputform/segmentButton';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const popResult= async values =>{
  await sleep(500);
  console.log(JSON.stringify(values))
}
const arrayTest=[{name:'Number 1',id:1},{name:'Number 2',id:2},{name:'Number 3',id:3}]
class App extends React.Component{
  render(){
    return(
<div className="App">
    <MyForm onSubmit={popResult}/>
    <SegmentButton arrayTest={arrayTest}/>
    </div>
    )
  }
}

export default App;
