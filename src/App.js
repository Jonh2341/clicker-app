import "./App.css";
import Header from "./Header";
import StatsBlock from "./StatsBlock";
import FooterContainer from "./FooterContainer";

function App() {
  return (
    <>
      <div className="w-full bg-grey-app">
        <Header />
        <StatsBlock />
        <FooterContainer />
      </div>
    </>
  );
}

export default App;
