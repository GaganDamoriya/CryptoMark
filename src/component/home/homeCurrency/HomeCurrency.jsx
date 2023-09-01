import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

const HomeCurrency = () => {
  const { coins } = useSelector((state) => state?.home);
  const iconsHome = coins.slice(0, 4);

  function round(num, decimalPlaces = 0) {
    num = Math.round(num + "e" + decimalPlaces);
    return Number(num + "e" + -decimalPlaces);
  }

  return (
    <div className="showCoins">
      {iconsHome.map((coin) => {
        return (
          <div className="coinss" key={coin.uid}>
            <img src={coin.icon} alt="" />
            <div>
              {coin.name}{" "}
              <span style={{ color: coin.marketChange > 0 ? "green" : "red" }}>
                {coin.marketChange}
              </span>
              <div>$ {round(coin.price, 2)}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeCurrency;
