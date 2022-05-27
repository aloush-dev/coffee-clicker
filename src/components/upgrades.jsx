const Upgrades = (props) => {
  const buyBeans = (increment) => {
    props.setCoffee((currentResources) => {
      const newResources = { ...currentResources };
      if (newResources.money < increment) {
        return newResources;
      } else {
        newResources.money -= increment;
        newResources.beans += increment;
        return newResources;
      }
    });
  };

  const buyCupSkin = (skinName) => {
    const costObj = {
      "Blue-coffee-cup.png": 200,
      "White-coffee-cup.png": 100,
      "Purple-coffee-cup.png": 300,
      "Flower-coffee-cup.png": 400,
      "Cat-coffee-cup.png": 600,
      "Sky-coffee-cup.png": 1000,
    };

    props.setSkin((currentSkin) => {
      const newSkin = { ...currentSkin };

      props.setCoffee((currentResources) => {
        const newResources = { ...currentResources };

        if (newResources.money < costObj[skinName]) {
          return newResources;
        } else {
          newResources.money -= costObj[skinName];
          newSkin.skin = skinName;

          return newResources;
        }
      });
      return newSkin;
    });
  };

  const buyCoffeeProd = (thingToBuy) => {
    props.setCoffee((currentResources) => {
      const newResources = { ...currentResources };
      if (thingToBuy === "barista") {
        if (newResources.money < 100) {
          return newResources;
        } else {
          newResources.money -= 100;
          newResources.barista += 1;
          return newResources;
        }
      }
    });
  };

  const changeName = (inputName) => {
    props.setName((currentName)=>{
      let newName = { ...currentName }

      newName = inputName

      return newName
    })
  }

  return (
    <section id="upgrade-panel">
      <div className="bean-market">
        <h3 className="first-row">Bean market</h3>
        <button className="second-row" onClick={() => buyBeans(1)}>
          <img src="coin.png" className="upgrade-coin" alt="Gold coin"></img>1
          =&gt; <img src="bean.png" id="bean" alt="Coffee Bean "></img>1
        </button>
        <button className="third-row" onClick={() => buyBeans(10)}>
          <img src="coin.png" className="upgrade-coin" alt="Gold coin"></img>10
          =&gt; <img src="bean.png" id="bean" alt="Coffee Bean "></img>10
        </button>
        <button className="forth-row" onClick={() => buyBeans(100)}>
          <img src="coin.png" className="upgrade-coin" alt="Gold coin"></img>100
          =&gt; <img src="bean.png" id="bean" alt="Coffee Bean "></img>100
        </button>
      </div>
      <div className="coffee-production">
        <h3 className="first-row">Coffee production</h3>
        <button className="second-row" onClick={() => buyCoffeeProd("barista")}>
          <img src="coin.png" className="upgrade-coin" alt="Gold coin"></img>100
          =&gt; Barista
        </button>
        <button className="third-row" onClick={() => buyCoffeeProd("coffeeShop")}>
          <img src="coin.png" className="upgrade-coin" alt="Gold coin"></img>500
          =&gt; Coffee shop
        </button>
        <button className="forth-row" onClick={() => buyCoffeeProd("factory")}>
          <img src="coin.png" className="upgrade-coin" alt="Gold coin"></img>
          6000 =&gt; Factory
        </button>
      </div>
      <div className="bean-production">
        <h3 className="first-row">Bean production</h3>
        <button className="second-row" onClick={() => buyCoffeeProd("barista")}>
          <img src="coin.png" className="upgrade-coin" alt="Gold coin"></img>1000
          =&gt; Plant pot
        </button>
        <button className="third-row" onClick={() => buyCoffeeProd("coffeeShop")}>
          <img src="coin.png" className="upgrade-coin" alt="Gold coin"></img>10000
          =&gt; Garden
        </button>
        <button className="forth-row" onClick={() => buyCoffeeProd("factory")}>
          <img src="coin.png" className="upgrade-coin" alt="Gold coin"></img>
          50000 =&gt; Field
        </button>
      </div>
      <div className="cosmetics">
        <h3 className="first-row">Cosmetics upgrades</h3>
        <form className="second-row">
          <select
            defaultValue="Cup skins"
            id="cup-skins"
            onChange={(event) => buyCupSkin(event.target.value)}
            name="cups"
          >
            <option value="White-coffee-cup.png">White - cost 100</option>
            <option value="Blue-coffee-cup.png">Blue - cost 200</option>
            <option value="Purple-coffee-cup.png">Purple - cost 300</option>
            <option value="Flower-coffee-cup.png">Flower - cost 400</option>
            <option value="Cat-coffee-cup.png">Cat? - cost 600</option>
            <option value="Sky-coffee-cup.png">Sky - cost 1000</option>
          </select>
        </form>
        <form onSubmit={(event)=>changeName(event.target.value)} 
        className="forth-row">
          <label id="rename-label" >Rename coffee shop</label>
          <input onChange={(event)=>props.setName(event.target.value)}></input>
          <button type="submit">&gt;</button>
        </form>
      </div>
    </section>
  );
};

export default Upgrades;
