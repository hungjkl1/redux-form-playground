import React from 'react';
import MyForm from './components/MyForm';
import './App.css';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const popResult= async values =>{
  await sleep(500);
  console.log(JSON.stringify(values))
}
class App extends React.Component{
  render(){
    return(
<div className="App">
    <MyForm onSubmit={popResult}/>
    </div>
    )
  }
}

export default App;
