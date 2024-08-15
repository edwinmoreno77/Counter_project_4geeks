import PropTypes from "prop-types";
import "./App.css";

function App(props) {
  return (
    <>
      <h1>My Counter</h1>
      <span key={props.seconds}>{props.seconds}</span>
    </>
  );
}

export default App;

App.propTypes = {
  seconds: PropTypes.string,
};
