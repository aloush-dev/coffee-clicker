import { useState } from 'react'

const Display = () => {
    const [resources, makeCoffee] = useState({beans: 10, money: 0})

  return (
        <>
    <h3>Money - ${resources.money}</h3>
    <h3>Beans - {resources.beans}</h3>
      <button onclick={()=>{ makeCoffee(resources.beans - 1)}} >CUP</button>
    </>
  );
};

export default Display;
