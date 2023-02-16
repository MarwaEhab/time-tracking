import { useState, useEffect } from "react";
import Card from "./components/card";
import MainCard from "./components/mainCard";

function App() {
  const [cardData, setCardData] = useState([]);
  const colors = [
    "#FF8B64",
    "#55C2E6",
    "#FF5E7D",
    "#FF8B64",
    "#55C2E6",
    "#4BCF82",
    "#7335D2",
    "#F1C75B",
    "#4BCF82",
    "#7335D2",
  ];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => setCardData(json));
  }, []);

  return (
    <div className="App">
      <MainCard />
      <div className="CardsBolck">
        {cardData.map((card, index) => (
          <Card card={card} key={index} bgcolor={colors[index]} />
        ))}
      </div>
    </div>
  );
}

export default App;
