import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    let { money } = props; //Destructuring in action
    this.state = {
      isLoading: false,
      money: money,
      prop: 0
    };
    console.log(`${money} within App Constructor !`);
  }

  componentWillMount() {
    console.log("componentWillMount Component");
  }

  componentDidMount() {
    console.log("ComponentDidMount of App !!!");
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log("ComponentWillReceiveProps App Component");
  }

  // Dynamically sending Props
  handlePropSending = () => {
    this.setState({
      ...this.state,
      prop: this.state.prop + 1
    });
  };

  render() {
    console.log("rendering within App !!!");
    return (
      <div className="App">
        <button onClick={this.handlePropSending}>
          Sending Props to Header
        </button>
        <Header
          menus={["home", "about", "services", "blog"]}
          prop={this.state.prop}
        />
        <h2>{this.state.money}</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App money={9199} />, rootElement);
