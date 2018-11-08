import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logo: "EmmeiSoft",
      people: 0
    };
    console.log("Header Component Constructor");
  }

  componentWillMount() {
    console.log("Header ComponentWillMount");
  }

  componentDidMount() {
    console.log("ComponentDidMount of Header !!!");
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    console.log("ComponentWillReceiveProps Header Component");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate of Header");
    // console.log(nextProps);

    console.log("prop passed is :" + this.props.prop);

    if (this.state.people <= 10) {
      return true;
    } else {
      console.log("Component cannot render now, because this.state.people=11");
      return false;
    }
  }
  componentWillUpdate() {
    console.log("componentWillUpdate - COMPONENT UPDATED");
  }

  changeLogoHandler = () => {
    this.setState({
      logo: "RatherImran"
    });
  };

  peopleUpdatehandler = () => {
    this.setState({
      ...this.state,
      people: this.state.people + 1
    });
  };

  render() {
    console.log("Rendering in Header !!!");
    return (
      <div>
        <h3>Numerical Prop : {this.props.prop}</h3>
        <h1>{this.state.logo}- World's Awesome Header</h1>
        {this.props.menus.map((menu, index) => (
          <li key={index}>{menu}</li>
        ))}

        <button onClick={this.changeLogoHandler}>Change Logo</button>
        <button onClick={this.peopleUpdatehandler}>
          10 People Allowed - Click
        </button>
        <span>{this.state.people}</span>
      </div>
    );
  }
}
