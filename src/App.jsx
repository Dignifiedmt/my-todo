import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [lmp, setLmp] = useState('');
  const [result, setResult] = useState(null);

  // Function to add days to a date object
  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const calculateEDD = (e) => {
    e.preventDefault();
    if (!name || !lmp) {
      alert('Please enter both your name and the LMP date.');
      return;
    }

    const lmpDate = new Date(lmp);
    const edd = addDays(lmpDate, 280);
    const earlyRange = addDays(edd, -14);
    const lateRange = addDays(edd, 14);

    setResult({
      edd: formatDate(edd),
      earlyRange: formatDate(earlyRange),
      lateRange: formatDate(lateRange),
    });
  };

  return (
    <div className="container">
      <h1>EDD Calculator</h1>
      <form onSubmit={calculateEDD} className="form">
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lmp">Last Menstrual Period (LMP):</label>
          <input
            id="lmp"
            type="date"
            value={lmp}
            onChange={(e) => setLmp(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn">Calculate EDD</button>
      </form>

      {result && (
        <div className="result">
          <h2>Congratulations {name}!</h2>
          <p>
            Based on your (LMP) Your expected to give birth on (EDD) which is: <strong>{result.edd}</strong>.
          </p>
          <p>
            However, babies can arrive earlier or later. Expect your baby anytime between{' '}
            <strong>{result.earlyRange}</strong> and <strong>{result.lateRange}</strong>.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
