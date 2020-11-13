import React from 'react';
import './index.css';

interface IStyledButton{
    backgroundColor: string;
    text: string;
    textColor: string;
}

function StyledButton(props: IStyledButton){
    const backgroundColor = {
        backgroundColor: props.backgroundColor,
        color: props.textColor
    }

    return (
        <div className="momDiv">
            Custom Button
            <button className="btn" style={Object.assign({}, backgroundColor)}>{props.text}</button>
        </div>
    );
}

StyledButton.defaultProps = {
    backgroundColor: "white",
    text: "Não clique aqui"
}

export default StyledButton;