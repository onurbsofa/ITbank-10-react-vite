import './conversorStyle.css'
import { useEffect, useState } from "react"

export default function Conversor() {
    const [exchangeRate, setExchangeRate] = useState(null);
    const [amountInARS, setAmountInARS] = useState("");
    const [amountInUSD, setAmountInUSD] = useState("");
  
    useEffect(() => {
      fetch('https://v6.exchangerate-api.com/v6/a3139d2d33fbda7640b963bf/latest/USD')
        .then((response) => response.json())
        .then((data) => {
          setExchangeRate(data.conversion_rates.ARS);
        });
    }, []);
  
    const handleARSChange = (e) => {
      const arsAmount = e.target.value;
      const usdAmount = (arsAmount / exchangeRate).toFixed(2);
      setAmountInARS(arsAmount);
      setAmountInUSD(usdAmount);
    };
  
    const handleUSDChange = (e) => {
      const usdAmount = e.target.value;
      const arsAmount = (usdAmount * exchangeRate).toFixed(2);
      setAmountInUSD(usdAmount);
      setAmountInARS(arsAmount);
    };
  
    return (
      <div>
        <h1>Coversor De Moneda</h1>
        <div className="converter-container">
          <div className="input-container">
            <label>Peso Argentino (ARS)</label>
            <input
              type="number"
              value={amountInARS}
              onChange={handleARSChange}
            />
          </div>
          <div className="input-container">
            <label>United States Dollar (USD) Oficial</label>
            <input
              type="number"
              value={amountInUSD}
              onChange={handleUSDChange}
            />
          </div>
        </div>
      </div>
    );
  }
