import React from 'react';
import './App.css';
import BankAccount from './components/BankAccount';
import StyledButton from './components/StyledButton';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BankAccount initialValue={300}/>
        <StyledButton backgroundColor="black" text="Clique aqui" textColor="white"/>
      </div>
    </div>
  );
}

export default App;
