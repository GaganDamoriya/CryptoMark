import React from "react";
import "./style.scss";
import {
  FaTwitter,
  FaDiscord,
  FaFacebookSquare,
  FaYoutube,
} from "react-icons/fa";
import Bitcoin from "../../assets/Bitcoin.png";
import Ethereum from "../../assets/eth2.png";
import Wallet from "../../assets/bitcoin-wallet.webp";
import TreasureBox from "../../assets/treasure.png";
const Join = () => {
  return (
    <div className="joinUs">
      <div className="center">
        <div className="upperContainer">
          <div className="imgbitcoin">
            <img src={Bitcoin} alt="bitcoin" />
          </div>
          <div className="contentJoin">
            <span>JOIN US VIA</span>
            <span className="discordHeading">DISCORD</span>
            <p>Invest and manage all your crypto at one place</p>
          </div>
          <div className="imgbitcoin">
            <img src={Ethereum} alt="etherium" />
          </div>
        </div>
        <button className="joinVia">Join via Discord</button>
      </div>
      <div className="bottom">
        <img src={TreasureBox} alt="" />
        <div className="middlebottom">
          <div className="footer-icons">
            <div className="socialIcons">
              <FaDiscord />
            </div>
            <div className="socialIcons">
              <FaTwitter />
            </div>
            <div className="socialIcons">
              <FaFacebookSquare />
            </div>
            <div className="socialIcons">
              <FaYoutube />
            </div>
          </div>
          <div className="middlebottomContent">
            <span> Privacy </span>
            <span>Terms of use</span>
          </div>
        </div>
        <img src={Wallet} alt="" />
      </div>
    </div>
  );
};

export default Join;
