import React from 'react';
import Button from './Button';

const ButtonPanel = ({ onNumberClick, onOperatorClick, onEqualClick, onClearClick }) => {
  return (
    <div className="button-panel">
      <Button label="1" onClick={onNumberClick} />
      <Button label="2" onClick={onNumberClick} />
      <Button label="3" onClick={onNumberClick} />
      <Button label="+" onClick={onOperatorClick} />

      <Button label="4" onClick={onNumberClick} />
      <Button label="5" onClick={onNumberClick} />
      <Button label="6" onClick={onNumberClick} />
      <Button label="-" onClick={onOperatorClick} />

      <Button label="7" onClick={onNumberClick} />
      <Button label="8" onClick={onNumberClick} />
      <Button label="9" onClick={onNumberClick} />
      <Button label="*" onClick={onOperatorClick} />

      <Button label="0" onClick={onNumberClick} />
      <Button label="C" onClick={onClearClick} />
      <Button label="=" onClick={onEqualClick} />
      <Button label="/" onClick={onOperatorClick} />
    </div>
  );
};

export default ButtonPanel;
