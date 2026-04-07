import { useEffect, useState } from "react";
import "./App.css";

const currencyNames: any = {
  840: "USD",
  978: "EUR",
  985: "PLN",
  826: "GBP",
  756: "CHF",
};

export default function App() {
  const [rates, setRates] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.monobank.ua/bank/currency")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRates(data);
      });
  }, []);

  const format = (num: any) =>
    typeof num === "number" ? num.toFixed(4) : "-";

  return (
    <div className="page">
      <div className="card">
        <h1>Средний курс валют в банках</h1>

        <div className="header">
          <span>Валюта</span>
          <span>Покупка</span>
          <span>Продажа</span>
        </div>

        {rates
          .filter(
            (item) =>
              item.currencyCodeB === 980 &&
              currencyNames[item.currencyCodeA]
          )
          .map((item, i) => (
            <div className="row" key={i}>
              <div className="currency">
                {currencyNames[item.currencyCodeA]}
              </div>

              <div>
            {item.rateBuy
                ? format(item.rateBuy)
                : format(item.rateCross)}
            </div>

            <div>
            {item.rateSell
                ? format(item.rateSell)
                : format(item.rateCross)}
            </div>
            </div>
          ))}
      </div>
    </div>
  );
}