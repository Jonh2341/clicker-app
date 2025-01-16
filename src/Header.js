import "./App.css";

function Header() {
  return (
    <header className="header flex items-center place-content-center h-[125px] bg-light-grey-app">
      <div className="box-header flex flex-col justify-center w-[166px] h-[58px] text-white">
        <h1 className="
        title 
        font-mono 
        leading-none 
        font-normal 
        text-[32px] 
        self-start">PUSH UP</h1>
        <h2 className="
        subtitle 
        font-mono 
        leading-none 
        font-light 
        text-[16px] 
        self-end">CLICKER</h2>
      </div>
    </header>
  );
}

export default Header;
