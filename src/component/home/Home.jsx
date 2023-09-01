import React from "react";
import "./style.scss";
import Bitcon from "../../assets/Bitcoin.png";
import Ethereum from "../../assets/eth2.png";
import ContentWrapper from "../contenWrapper/ContentWrapper";
import HomeCurrency from "./homeCurrency/HomeCurrency";

const Home = () => {
  return (
    <div className="content">
      <ContentWrapper>
        <div className="imgbitcoin">
          <img src={Bitcon} alt="bitcoin" />
        </div>
        <div className="headss">
          <span className="heading">TRACK AND TRADE </span>
          <span className="headingline2">YOUR CRYPTOCURRENCIES</span>
        </div>
        <div className="imgbitcoin">
          <img src={Ethereum} alt="bitcoin" />
        </div>
      </ContentWrapper>
      <div className="showCoins">
        <HomeCurrency />
      </div>
    </div>
  );
};

export default Home;
