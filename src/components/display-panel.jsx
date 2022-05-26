import { useState } from 'react'
import Upgrades from "./upgrades"

const Display = () => {
    const [resources, setCoffee] = useState({beans: 10, money: 0})

    const makeCoffee = (event) => {
      setCoffee((currentResources) => {
        const newResources = {...currentResources};
        if(newResources.beans < 1) {
          return newResources;
        } else {
          newResources.money += 5;
          newResources.beans -= 1;
          return newResources;
        }
      });
    };

  return (
    <main>
      <section id="stats-banner">
        <h3><img src="coin.png" id="coin" alt="Gold coin"></img> {resources.money}</h3>
        <h3>Beans: {resources.beans}</h3>
      </section>
      <img src="cup.png" id="cup" onClick={()=> makeCoffee()}></img>
      <Upgrades resources={resources} setCoffee={setCoffee}/>
    </main>
  );
};

export default Display;