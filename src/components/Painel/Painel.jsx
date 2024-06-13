
import React, { useEffect, useState } from 'react';

import { StyledPainel } from "./styles";
import { PainelRes } from '../PainelRes/PainelRes';
import { Lgpd } from '../LGPD/Lgpd';



export function Painel() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [res, setRes] = useState(null);
    const [showPainel2, setShowPainel2] = useState(false);

    const [imcClass, setImcClass] = useState('');
    const [color, setColor] = useState('');

    const [lgpd, setLgpd] = useState(true);

    // useEffect para gravar info lgpd na maquina do cliente
    useEffect(() => {

        if (localStorage.getItem('fechouLgpd') === 'sim') {
            setLgpd(false);
        }
    }, []);

    //função do lgpd
    const hideLgpd = () => {

        setLgpd(false)
        localStorage.setItem('fechouLgpd', 'sim');

    }

    const inputPeso = (e) => {
        let inputValue = e.target.value;

        // Remove qualquer caractere não numérico, exceto o ponto decimal
        inputValue = inputValue.replace(/[^\d.]/g, '');

        // Adiciona o ponto automaticamente após o terceiro ou quarto dígito
        if (inputValue.length > 2) {
            if (inputValue[0] === '1' || inputValue[0] === '2' || inputValue[0] === '3') {
                if (inputValue.length > 3 && !inputValue.includes('.')) {
                    inputValue = inputValue.slice(0, 3) + '.' + inputValue.slice(4);
                }
            } else if (!inputValue.includes('.')) {
                inputValue = inputValue.slice(0, 2) + '.' + inputValue.slice(2);
            }
        }

        // Limita o número de dígitos após o ponto decimal a dois
        const parts = inputValue.split('.');
        if (parts[1] && parts[1].length > 2) {
            inputValue = parts[0] + '.' + parts[1].slice(0, 2);
        }

        setPeso(inputValue);
    };

    const inputAltura = (e) => {
        let inputValue = e.target.value;

        // Remove qualquer caractere não numérico
        inputValue = inputValue.replace(/[^\d]/g, '');

        setAltura(inputValue);
    };

    const calcular = (e) => {
        e.preventDefault();

        const num1 = parseFloat(peso);
        const num2 = parseFloat(altura);

        if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
            const imc = num1 / ((num2 / 100) * (num2 / 100));
            setRes(imc);
            setShowPainel2(true);

            if (imc < 18.5) {
                setImcClass('Magreza');
                setColor('red');
            } else if (imc >= 18.5 && imc <= 24.9) {
                setImcClass('Normal');
                setColor('#00FF19');
            } else if (imc >= 25 && imc <= 29.9) {
                setImcClass('Sobrepeso');
                setColor('yellow');
            } else if (imc >= 30 && imc <= 39.9) {
                setImcClass('Obesidade');
                setColor('orange');
            } else {
                setImcClass('Obesidade Grave');
                setColor('red');
            }
        } else {
            alert('Preencha os campos corretamente para calcular');
        }
    };

    const reset = () => {
        setPeso('');
        setAltura('');
        setRes(null);
        setShowPainel2(false);
        setImcClass('');
        setColor('');
    };

    return (
        <>
            <StyledPainel>

                <div className="painel" style={{ display: res !== null ? 'none' : 'block' }}>
                    <div className="content">
                        <h1>Calculadora do IMC</h1>
                        <p>Preencha os dados para calcular</p>
                        
                        <form onSubmit={calcular}>
                            <input
                                type="text"
                                placeholder="Peso kg"

                                value={peso}
                                onChange={inputPeso}
                            />
                            <input
                                type="text"
                                placeholder="Altura cm"
                                maxlength="3"
                                value={altura}
                                onChange={inputAltura}
                            />
                            <button type="submit">Calcular IMC</button>
                        </form>
                    </div>
                </div>

                <>
                    {showPainel2 && (
                        <PainelRes resultado={res.toFixed(2)} limpar={reset} imcClass={imcClass} color={color} />
                    )}
                </>
                <>
                    {lgpd && (

                        <Lgpd hide={hideLgpd}

                        />)}

                </>
            </StyledPainel>

        </>
    )
}