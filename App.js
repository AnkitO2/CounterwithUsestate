// import React, { useState } from "react";
// import Product from "./Product";
// import Navbar from "./Navbar";
// import { Container } from "reactstrap";
// function App() {
//   const [isActive, setIsActive] = useState(false);
//   return (
//     <>
//       <Container>
//         {isActive ? (
//           <Product setIsActive={setIsActive} />
//         ) : (
//           <Navbar setIsActive={setIsActive} />
//         )}
//       </Container>
//     </>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { Button } from 'reactstrap';
function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
    </div>
  );
}
export default Counter;