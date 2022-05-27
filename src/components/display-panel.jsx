import { useState } from "react";
import Upgrades from "./upgrades";

const Display = () => {
  const [resources, setCoffee] = useState({
    beans: 10,
    money: 0,
    coffee: 0,
    barista: 0,
    coffeeShop: 0,
    factory: 0,
  });


  const [currentSkin, setSkin] = useState({ skin: "White-coffee-cup.png" });

  const [currentName, setName] = useState("Coffee Shop");

  const [prodRunning, setProd] = useState(false)

  const makeCoffee = () => {
    setCoffee((currentResources) => {
      const newResources = { ...currentResources };
      if (newResources.beans < 1) {
        return newResources;
      } else {
        newResources.coffee += 1;
        newResources.money += 3;
        newResources.beans -= 1;
        return newResources;
      }
    });
  };

  const passiveCofProd = () => {
    setCoffee((currentResources) => {
      const newResources = { ...currentResources };
      if (newResources.beans < 1) {
        return newResources;
      } else {
        newResources.coffee += 1 * newResources.barista;
        newResources.money += 3 * newResources.barista;
        newResources.beans -= 1 * newResources.barista;
        return newResources;
      }
    });
  };

  const Prodcoffee = () => {
    setProd((prodRunning) => {
      const newRunning =  [prodRunning];
      if(!newRunning[0]){
        newRunning[0]= true;
        setInterval(passiveCofProd, 10000);
        return newRunning[0];
      }
      return newRunning[0];
    });
  };

  setInterval(Prodcoffee,1000)

  return (
    <main>
      <h2 id="cheeky-header">{currentName}</h2>
      <section id="stats-banner">
        <h3>
          <img src="coin.png" id="coin" alt="Gold coin"></img> {resources.money}
        </h3>
        <h3>
          <img src="bean.png" id="bean" alt="Coffee Bean "></img>{" "}
          {resources.beans}
        </h3>
      </section>
      <h3 id="coffee-counter">Coffees brewed: {resources.coffee}</h3>
      <img
        draggable="false"
        alt="Main Clicker Cup"
        src={currentSkin.skin}
        id="cup"
        onClick={() => makeCoffee()}
      ></img>
      <section id="upgrades-div">
        <Upgrades
          setName={setName}
          currentName={currentName}
          resources={resources}
          setCoffee={setCoffee}
          setSkin={setSkin}
          currentSkin={currentSkin}
        />
      </section>
    </main>
  );
};

export default Display;
