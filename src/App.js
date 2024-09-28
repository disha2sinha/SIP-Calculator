import Header from './Components/Header';
import UserInput from './Components/UserInput';
import Results from './Components/Results';
import { useState } from 'react';
import './App.css';

const INITIAL_INVEST = {Monthly_Investment : 10000,
  Annual_Investment: 200000,
  Returns_Rate : 10,
  Period: 5}

const periodisValid = INITIAL_INVEST.Period >= 1;

function App() {
  const [userInput, setuserInput] = useState(INITIAL_INVEST)
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
      [label] : ''
      }
  
  })
  } 
    return (
    <div className="App">
      <Header className="App-header"/>
      <UserInput placeholder = {INITIAL_INVEST} userInput={userInput} handleChange={handleChange} handleFocus = {handleFocus}/>
      {!periodisValid && <p>Please Enter Duration greater than 0. </p>}
      {periodisValid && <Results input = {userInput}/>}
    </div>
  );
}

export default App;
