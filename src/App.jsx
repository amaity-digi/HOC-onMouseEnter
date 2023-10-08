import "./App.css";
import SecondComponent from "./components/SecondComponent";
import hover from "./components/WithHover";
// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
function App({count, onHover}) {
  return (
    <div>
      <h2 onMouseEnter={onHover}>Implementation of HOC</h2>
       <span>{count}</span>
       <SecondComponent />
    </div>
  );
}


// eslint-disable-next-line react-refresh/only-export-components
export default hover(App);
