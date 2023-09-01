import { useEffect } from "react";
import "./App.css";
import { getCoins } from "./store/homeSlice";
import Navbar from "./component/Navbar";
import Home from "./component/home/home";
import Market from "./component/market/Market";
import { useDispatch } from "react-redux";
import Join from "./component/join/Join";
import Footer from "./component/footer/Footer";
import WhyUs from "./component/whyUs/WhyUs";

var baseUrl = " https://api.coinranking.com/v2/coins";
var apiKey = "coinranking5b8a6b560ab32f5a5c4ade430a1acaf338f8185c47f44975";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch(`${baseUrl}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${apiKey}`,
          "Acess-Control-Allow-Origin": "*",
        },
      });
      const data = await res.json();
      let i = 1;

      const formattedData = data.data.coins.map((coin) => ({
        uid: i++,
        name: coin.name,
        icon: coin.iconUrl,
        price: coin.price,
        id: coin.uuid,
        marketCap: coin.marketCap,
        marketChange: coin.change,
      }));
      dispatch(getCoins(formattedData));

      // console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Navbar />
      <Home />
      <Market />
      <WhyUs />
      <Join />
    </>
  );
}

export default App;
