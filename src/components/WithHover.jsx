import { useState } from "react";

const hover = (WrappedComponent) => {
  return function WithHover(props) {
    const [count, setCount] = useState(1);
    const handleHover = () => {
      setCount(count + 1);
    };
    return <WrappedComponent count={count} onHover={handleHover} {...props} />;
  };
};
export default hover;
