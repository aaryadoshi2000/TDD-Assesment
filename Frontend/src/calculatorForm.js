// CalculatorForm.js
import React, { useState } from 'react';
import { calculateSum } from './api';

const CalculatorForm = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const sum = await calculateSum(input);
      
      setResult(`Result: ${sum}`);
      setError('');
    } catch (err) {
      setResult('');
      setError(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers separated by commas or newlines"
        />
        <button type="submit">Calculate</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && <p>{result}</p>}
    </div>
  );
};

export default CalculatorForm;
