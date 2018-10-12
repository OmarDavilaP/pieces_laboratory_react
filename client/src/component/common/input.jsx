import React, { Component } from "react";
import { connect } from "react-redux";
import Joi from "joi-browser";

class Input extends Component {

  state = {
    alertMessage: {}
  }

  handleAlert() {
    return <div className="alert alert-danger" role="alert" />;
  }

  validateInput = (e, schema) => {
    const inputObj = { value: e.target.value };
    const validation = Joi.validate(inputObj, schema, { abortEarly: false });
  };

  render() {
    const { validate, alert } = this.props;
    return (
      <input className="form-control"
        type="text"
        onKeyUp={event => this.validateInput(event, validate)}
      />
    );
  }
}

const StateFromRedux = state => {
  return {
    tableStr: state.tableStructure
  };
};

export default connect(StateFromRedux)(Input);
