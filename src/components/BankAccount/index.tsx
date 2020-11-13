import React from 'react';
import './index.css';

interface IProps {
    initialValue: number;
}

function BankAccount(props: IProps){
    const [moneyAccount, setMoneyAccount] = React.useState(props.initialValue);
    const [inputValue, setInputValue] = React.useState(0);
    const [showValue, setShowValue] = React.useState(true);

    function hideMoney(){ 
       setShowValue(!showValue);
    }
    
    return(
        <div className="momDiv">
            Depositar Dinheiro
            <div className="inBtn">
                <input className="inputValue" onChange={(e) => setInputValue(parseInt(e.target.value))} type="number" placeholder="Depositar valor"/>
                <button className="btnDeposit" onClick={() => setMoneyAccount(moneyAccount+inputValue)}>Depositar</button>
            </div>
            <div>
                <div className="value" style={{display: showValue ? 'block' : 'none'}}>{moneyAccount}</div>
                <div><button className="btnShow" onClick={hideMoney}>{showValue ? 'Esconder' : 'Mostrar'}</button></div>
            </div>
        </div>
    );
}

export default BankAccount;