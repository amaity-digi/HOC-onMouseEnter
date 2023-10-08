import hover from "./WithHover";

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
function SecondComponent({ count, onHover }) {
  return (
    <div>
      <h3 onMouseEnter={onHover}>SecondComponent Hover using HOC</h3>
      <span>{count}</span>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default hover(SecondComponent);
