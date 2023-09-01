import React from "react";
import { useState, useEffect } from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import ContentWrapper from "../contenWrapper/ContentWrapper";

const Market = () => {
  const { coins } = useSelector((state) => state?.home);
  const [cryptoList, setCryptoList] = useState([]);

  useEffect(() => {
    if (coins) {
      const initialItems = coins.slice(0, 10);
      setCryptoList(initialItems);
    }
  }, [coins]);

  const handleChange = (i) => {
    let b = i * 10;
    let a = b - 10;
    setCryptoList(coins.slice(a, b));
  };
  function round(num, decimalPlaces = 0) {
    num = Math.round(num + "e" + decimalPlaces);
    return Number(num + "e" + -decimalPlaces);
  }
  return (
    <div className="market">
      <div className="contentwrappermarket">
        <h2 className="heading1">Market Update</h2>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Market Change (%)</th>
                <th>Price ($)</th>
                <th>MarketCap ($)</th>
              </tr>
            </thead>
            <tbody>
              {cryptoList?.map((coin) => {
                return (
                  <tr className="cryptocoins" key={coin.uid}>
                    <td>{coin?.uid}</td>
                    <td>
                      <img src={coin.icon} alt="" />
                      {coin?.name}
                    </td>
                    <td
                      style={{ color: coin.marketChange > 0 ? "green" : "red" }}
                    >
                      {coin.marketChange} %
                    </td>
                    <td>$ {round(coin.price, 2)}</td>
                    <td>$ {coin.marketCap}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <nav>
            <ul className="pageslinks">
              {Array.from({ length: Math.ceil(coins.length / 10) }).map(
                (_, index) => (
                  <li
                    className="pages"
                    key={index}
                    onClick={() => handleChange(index + 1)}
                  >
                    {index + 1}
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Market;
