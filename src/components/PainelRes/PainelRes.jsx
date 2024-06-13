import React from 'react';
import { StyledPanel2 } from "./styles";

export function PainelRes(props) {
  return (
    <StyledPanel2>
      <div className="content-2">
        <h2 className='imc'>Seu IMC é: <br /><span style={{ color: props.color }}>{props.resultado}</span></h2>
        <p className='classifica'>Sua classificação é: <span style={{ color: props.color }}>{props.imcClass}</span></p>
        <button onClick={props.limpar}>Refazer teste</button>
      </div>
    </StyledPanel2>
  );
}