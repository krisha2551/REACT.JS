// class component

import { Component } from "react";

class ClassComponent extends Component {
  render = () => {
    return <h1>hello</h1>;
  };
}

const FunctionalComponent = () => {
  return <h1>this is functional component</h1>;
};

export { ClassComponent, FunctionalComponent };
