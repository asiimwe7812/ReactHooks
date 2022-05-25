import "./App.css";
import ContextTutorial from "./ContextTutorial";
import Effects from "./Effect";
import Imperative from "./Imperative";
import Layout from "./Layout";
import Reftutorial from "./Reference";
// import Reacthooks from "./reactHooks";
// import Reducers from "./Reducer";

function App() {
  return (
    <div className="App">
      {/* <Reacthooks></Reacthooks> */}
      {/* <Reducers></Reducers> */}
      {/* <Effects></Effects>
      <Reftutorial></Reftutorial>
      <Layout></Layout> */}
      <Imperative />
      <ContextTutorial />
    </div>
  );
}

export default App;
