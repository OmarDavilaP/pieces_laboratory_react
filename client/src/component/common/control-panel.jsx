import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "./input";
//external libraries
import Joi from "joi-browser";
class ControlPanel extends Component {
  render() {
    const { tableStr } = this.props;
    return (

      <ul className="nav nav-pills control-panel">
        <div className="input-group mb-sm-0">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <i className="fa-shopping-cart" />
            </a>
          </li>

          {tableStr.map((item, index) => {
            return <Input key={index} validate={item.schema} alert={item.alert} />
          })}
        </div>
      </ul>
    );
  }
}
const initialStateFromRedux = state => {
  return { tableStr: state.tableStructure };
};

export default connect(initialStateFromRedux)(ControlPanel);
