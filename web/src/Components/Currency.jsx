
import React, { useState, useEffect } from 'react';

const Currency = () => {
  const [currencies, setCurrencies] = useState([]);
  const [conversionRates, setConversionRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(1);

  useEffect(() => {
    const API_KEY = '28e5a2baaa4148ea15f0d6ae';
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setCurrencies(Object.keys(data.conversion_rates));
        setConversionRates(data.conversion_rates);
        setExchangeRate(data.conversion_rates[toCurrency]);
        setConvertedAmount(amount * data.conversion_rates[toCurrency]); // Set initial conversion
      })
      .catch(error => console.error('Error fetching currency data:', error));
  }, []);

  useEffect(() => {
    if (conversionRates[toCurrency] && conversionRates[fromCurrency]) {
      const rate = conversionRates[toCurrency] / conversionRates[fromCurrency];
      setExchangeRate(rate);
      setConvertedAmount(amount * rate);
    }
  }, [fromCurrency, toCurrency, amount, conversionRates]);

  return (
    <div className="bg-blue-100 min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-4 text-center ">Currency Converter</h2>
      <div className="mt-4 text-center text-gray-500 mb-0">
          <p className='text-lg'>&copy; check live rates, check rate alerts & see your currency worth.</p>
        </div>
      <div className="bg-white rounded-md shadow-lg p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-gray-500">Currency :</label>
            <select 
              value={fromCurrency} 
              onChange={(e) => setFromCurrency(e.target.value)} 
              className="w-1/2 p-2 border rounded-md"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-gray-500">To Currency:</label>
            <select 
              value={toCurrency} 
              onChange={(e) => setToCurrency(e.target.value)} 
              className="w-1/2 p-2 border rounded-md"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>
          <div >
            <label className="block mb-2 text-gray-500">Amount:</label>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              className="w-1/2 p-2 border rounded-md"
            />
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-500">Converted Amount:</h3>
          <div className="py-2">
            {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
          </div>
          <div className="py-2">
          <h3 className="text-lg font-semibold text-gray-500">Indicative exchange rate:</h3>
            1 {fromCurrency} = {exchangeRate.toFixed(2)} {toCurrency}
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-4">Exchange Rates</h2>
          <div className="grid grid-cols-4 gap-4">
            {currencies.map((currency) => (
              <div key={currency} className="py-1">
                {currency}: {conversionRates[currency]?.toFixed(2)}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Ways of Conversion:</h3>
          <ul className="list-disc list-inside">
            <li>Bank Transfer</li>
            <li>PayPal</li>
            <li>Currency Exchange Offices</li>
            <li>Credit Card Payments</li>
            <li>Cryptocurrency Exchanges</li>
            <li>Online Money Transfer Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Currency;
