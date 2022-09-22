import "./App.scss";
import ControllerBar from "./component/ControllerBar";
import TableBoxes from "./component/TableBoxes";
import Test2 from "./component/Test2";

function App() {
  return (
    <div className="App">
      <div className="App-container test1">
        <h3>Test 1: Create list boxes</h3>
        <ControllerBar />
        <TableBoxes />
      </div>
      <div className="App-container test2">
        <h3>Test 2: Find that value of the path that has the most value</h3>
        <Test2 />
      </div>
    </div>
  );
}

export default App;
