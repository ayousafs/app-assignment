import React, { useState } from 'react';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

function App() {
  const [input, setInput] = useState('');  
  const [previousInput, setPreviousInput] = useState(''); 
  const [operator, setOperator] = useState('');  

  const handleNumberClick = (value) => {
    setInput(input + value);
  };

   const handleOperatorClick = (operatorValue) => {
    setPreviousInput(input);
    setInput('');
    setOperator(operatorValue);
  };

    const handleEqualClick = () => {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(input);
    let result = 0;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        break;
    }
    setInput(result.toString());
    setPreviousInput('');
    setOperator('');
  };

  // Function to clear the display
  const handleClearClick = () => {
    setInput('');
    setPreviousInput('');
    setOperator('');
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <Display value={input || '0'} />
      <ButtonPanel
        onNumberClick={handleNumberClick}
        onOperatorClick={handleOperatorClick}
        onEqualClick={handleEqualClick}
        onClearClick={handleClearClick}
      />
    </div>
  );
}

export default App;
