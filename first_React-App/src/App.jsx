import Jsx from "./Jsx";
import State from "./State";
import PrevState from "./PrevState";
import Props from "./Props";

import { ClassComponent, FunctionalComponent } from "./Component";

function App() {
  return (
    <>
      {/* <h1>hello</h1>;<Jsx /> */}
      {/* <Jsx></Jsx> */}
      {/* <State /> */}
      {/* <PrevState /> */}

      {/* <Props greeting={"good morning"} /> */}

      <ClassComponent />
      <FunctionalComponent />
    </>
  );
}

export default App;

// arrow function

// const App = () => {
//   return <h1>hello</h1>;
// };

// export default App;
