import { useState } from 'react'
import Upgrades from "./upgrades"

const Display = () => {
    const [resources, setCoffee] = useState({beans: 10, money: 0, coffee: 0})
    const [currentSkin, setSkin] = useState({skin:"White-coffee-cup.png"})

    const makeCoffee = (event) => {
      setCoffee((currentResources) => {
        const newResources = {...currentResources};
        if(newResources.beans < 1) {
          return newResources;
        } else {
          newResources.coffee += 1;
          newResources.money += 3;
          newResources.beans -= 1;
          return newResources;
        }
      });
    };

  return (
    <main>
      <section id="stats-banner">
        <h3><img src="coin.png" id="coin" alt="Gold coin"></img> {resources.money}</h3>
        <h3><img src="bean.png" id="bean" alt="Coffee Bean "></img> {resources.beans}</h3>
      </section>
      <h3 id="coffee-counter">Coffees brewed: {resources.coffee}</h3>
      <img src={currentSkin.skin} id="cup" onClick={()=> makeCoffee()}></img>
      <section id="upgrades-div">
        <Upgrades resources={resources} setCoffee={setCoffee} setSkin={setSkin} currentSkin={currentSkin}/>
      </section>
    </main>
  );
};

export default Display;