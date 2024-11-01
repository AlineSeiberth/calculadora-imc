import React, { useState } from 'react';
import './index.css';

function CalculadoraIMC() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setMensagem('Baixo peso');
    } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
      setMensagem('Eutrofia (peso adequado)');
    } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
      setMensagem('Sobrepeso');
    } else if (imcCalculado >= 30 && imcCalculado <= 34.9) {
      setMensagem('Obesidade grau 1');
    } else if (imcCalculado >= 35 && imcCalculado <= 39.9) {
      setMensagem('Obesidade grau 2');
    } else {
      setMensagem('Obesidade extrema');
    }
  };

  return (

    <div className="calculadora">
   
      <header className="cabecalho">
        <h1>Calculadora de IMC</h1>
      </header>

      <div className="grupo-entrada">
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Altura em cm"
          className="entrada"
        />
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Peso em kg"
          className="entrada"
        />
        <button onClick={calcularIMC} className="botao">
          Calcular IMC
        </button>

        {imc && (
          <div className="resultado">
            <p>Seu IMC: {imc}</p>
            <p>Classificação: {mensagem}</p>
          </div>
        )}
      </div>

      <footer className="rodape">
        <p>Desenvolvido por: Aline Seiberth Neumann Bastos</p>
      </footer>
    </div>
  );
}

export default CalculadoraIMC;
