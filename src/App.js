import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const calculateExpression = () => {
    try {
      const expression = prompt('Enter the expression:');
      if (expression === null) return;

      const result = eval(expression); 
      alert(`Result: ${result}`); 
    } catch (error) {
      alert('Error in expression');
    }
  };

  return (
    <div className="app-container">
    <div className="calculator-box">
      <h1 className="app-title">Math Expression Calculator</h1>
      <button className="calculate-button" onClick={calculateExpression}>
        Calculate
      </button>
    </div>
  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


export default App;
