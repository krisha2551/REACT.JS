// import { useState } from "react";

import { useState } from "react";
import Props from "./Props";

const State = () => {
  const [count, setCount] = useState(5);

  //   const handleClick = () => {
  //     setCount(count + 1);
  //   };

  return (
    <>
      <h1>{count}</h1>
      {/* <button onClick={handleClick}>increase</button> */}
      <button onClick={() => setCount(count + 1)}>increase</button>

      <Props greeting={"good afternoon"} count={count} />
    </>
  );
};

export default State;

// const State = () => {
//   const [input, setInput] = useState("");

//   return (
//     <>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />

//       <br />
//       <h1>{input}</h1>
//     </>
//   );
// };

// export default State;
