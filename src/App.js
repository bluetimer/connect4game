import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello My React App</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div class="cointainer">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
  function Square() {
    return (
      <div id="square">
        {" "}
        <div id="whitecircle"> </div>{" "}
      </div>
    );
  }
}
