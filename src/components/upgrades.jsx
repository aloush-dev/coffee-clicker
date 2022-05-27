const Upgrades = (props) => {
    
    const buyBeans = (increment) => {
        props.setCoffee((currentResources) => {
          const newResources = {...currentResources};
          if(newResources.money < increment*2) {
            return newResources;
          } else {
            newResources.money -= increment*2;
            newResources.beans += increment;
            return newResources;
          }
        });
      };

    return (
        <section id="upgrade-panel">
            <h3>Bean market</h3>
            <button onClick={() => buyBeans(1)}><img src="bean.png" id="bean" alt="Coffee Bean "></img>1</button>
            <button onClick={() => buyBeans(10)}>Buy 10 beans</button>
            <button onClick={() => buyBeans(100)}>Buy 100 beans</button>
        </section>
        
    )
}

export default Upgrades;