const Upgrades = (props) => {
    
    const buyBeans = (increment) => {
        props.setCoffee((currentResources) => {
          const newResources = {...currentResources};
          if(newResources.money < increment) {
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
        "Sky-coffee-cup.png": 1000
      }

      props.setSkin((currentSkin) => {

        const newSkin = {...currentSkin};

        props.setCoffee((currentResources) => {

          const newResources = {...currentResources};

          if(newResources.money < costObj[skinName]){

            return newResources;

          } else {

            newResources.money -= costObj[skinName];
            newSkin.skin = skinName;
            
            return newResources;
          }
        })
        return newSkin;
      })
    }

    return (
        <section id="upgrade-panel">
          <div className="bean-market">
            <h3>Bean market</h3>
            <button onClick={() => buyBeans(1)}><img src="bean.png" id="bean" alt="Coffee Bean "></img>1</button>
            <button onClick={() => buyBeans(10)}><img src="bean.png" id="bean" alt="Coffee Bean "></img>10</button>
            <button onClick={() => buyBeans(100)}><img src="bean.png" id="bean" alt="Coffee Bean "></img>100</button>
          </div>
          <div className="coffee-production">
            <h3>Coffee production</h3>
            <button onClick={() => buyBeans(1)}>Barrista</button>
            <button onClick={() => buyBeans(10)}>Coffee shop</button>
            <button onClick={() => buyBeans(100)}>Factory</button>
          </div>
          <div className="bean-production">
            <h3>Bean production</h3>
          </div>
          <div className="cosmetics">
            <h3>Cosmetics upgrades</h3>
            <form>
              <select className="cup-skins" onChange={(event) => buyCupSkin(event.target.value)} name="cups">
              <option disabled hidden selected>Cup skins</option>
                <option value="White-coffee-cup.png">White - cost 100</option>
                <option value="Blue-coffee-cup.png">Blue - cost 200</option>
                <option value="Purple-coffee-cup.png">Purple - cost 300</option>
                <option value="Flower-coffee-cup.png">Flower - cost 400</option>
                <option value="Cat-coffee-cup.png">Cat? - cost 600</option>
                <option value="Sky-coffee-cup.png">Sky - cost 1000</option>
              </select>
            </form>
          </div>
        </section>
        
    )
}

export default Upgrades;