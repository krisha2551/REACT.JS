// old method

// const Props = (props) => {
//   return (
//     <>
//       <h1> this is props</h1>

//       <h1>{props.greeting}</h1>

//       <h1>{props.count}</h1>
//     </>
//   );
// };

// export default Props;

// new method using props

const Props = ({ greeting, count }) => {
  return (
    <>
      <h1> this is props</h1>

      <h1>{greeting}</h1>

      <h1>{count}</h1>
    </>
  );
};

export default Props;
