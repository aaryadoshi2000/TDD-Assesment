// src/App.tsx
import React from 'react';

import CalculatorForm from './calculatorForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>String Calculator</h1>
      <CalculatorForm />
    </div>
  );
};

export default App;
