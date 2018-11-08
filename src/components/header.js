import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logo: "EmmeiSoft"
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
    console.log(nextProps);
    console.log("ComponentWillReceiveProps Header Component");
  }

  changeLogoHandler = () => {
    this.setState({
      logo: "RatherImran"
    });
  };

  render() {
    console.log("Rendering in Header !!!");
    return (
      <div>
        <h3>Numerical Prop : {this.props.prop}</h3>
        <h1>{this.state.logo}- World's Awesome Header</h1>
        {this.props.menus.map(menu => (
          <li>{menu}</li>
        ))}

        <button onClick={this.changeLogoHandler}>Change Logo</button>
      </div>
    );
  }
}
