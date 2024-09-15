import Header from './Components/Header';
import UserInput from './Components/UserInput';
import Results from './Components/Results';
import { useState } from 'react';
import './App.css';

const INITIAL_INVEST = {Monthly_Investment : 10000,
  Annual_Investment: 200000,
  Returns_Rate : 10,
  Period: 5}

function App() {
  const [userInput, setuserInput] = useState(INITIAL_INVEST)
  console.log(typeof(userInput))
  function handleChange(label,newvalue){
    setuserInput(prevuserInput=>{
        return{
        ...prevuserInput,
        [label] : +newvalue //converts to number
        }
    
    })
  }
  function handleFocus(label){
    setuserInput(prevuserInput=>{
      return{
      ...prevuserInput,
      [label] : '' //converts to number
      }
  
  })
  } 
    return (
    <div className="App">
      <Header className="App-header"/>
      <UserInput placeholder = {INITIAL_INVEST} userInput={userInput} handleChange={handleChange} handleFocus = {handleFocus}/>
      <Results input = {userInput}/>
    </div>
  );
}

export default App;
