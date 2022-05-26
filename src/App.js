import "./App.css";
import Header from "./components/header";
import Display from './components/display-panel.jsx'

function App() {
  const shopName = "Default";
  return (
    <div className = "App">
      <Header shopName={shopName} />

      <Display />
    </div>
  );
}

export default App;
