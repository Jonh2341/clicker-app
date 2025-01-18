import "./App.css";
import Header from "./Header";
import StatsBlock from "./StatsBlock";

function App() {
  return (
    <>
      <div className="w-100 h-screen bg-grey-app">
        <Header/>
        <StatsBlock/>
      </div>
    </>
  );
}

export default App;
