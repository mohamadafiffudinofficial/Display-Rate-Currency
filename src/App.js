import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { API_PATH } from "./apiPath";
import { Skeleton } from './components/skeleton';

const WE_BUY = 'WE BUY';
const EXCHANGE_RATE = 'EXCHANGE RATE';
const WE_SELL = 'WE SELL';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = () => {
    axios
      .get(API_PATH)
      .then((res) => {
        setData(Object.entries(res.data.rates));
      })
      .catch((err) => {
        console.log(err)
        setError(true);
      });
  };

  const SellPrice = (value, rate) => parseInt(value) - (rate / 100) * value;
  const BuyPrice = (value, rate) => parseInt(value) + (rate / 100) * value;


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="container mx-auto w-full h-screen flex items-center">
      <div className="w-full shadow-lg">
          <table className="w-full font-serif">
            <thead>
              <tr className="text-md font-semibold uppercase tracking-wide text-left bg-red-100">
                <th className="px-4 py-3"></th>
                <th className="px-4 py-3 text-green-500">{WE_BUY}</th>
                <th className="px-4 py-3 text-yellow-500">{EXCHANGE_RATE}</th>
                <th className="px-4 py-3 text-red-500">{WE_SELL}</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.length === 0 || error ? 
                <Skeleton/>
              :
              (
                data.map((value,idx) => (
                  <tr className="text-gray-600 bg-red-50" key={idx}>
                    <td className="px-4 py-3 text-gray-700 font-semibold border">
                      {value[0]}
                    </td>
                    <td className="px-4 py-3 text-ms border">
                      {value[1]}
                    </td>
                    <td className="px-4 py-3 text-ms border">
                      {BuyPrice(value[1], 2.5)}
                    </td>
                    <td className="px-4 py-3 text-ms border">
                      {SellPrice(value[1], 2.5)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
      </div>
    </section>
  );
}

export default App;
