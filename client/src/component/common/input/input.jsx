import React, { Component } from "react";
import { connect } from "react-redux";
import Joi from "joi-browser";

class Input extends Component {

  constructor(){
    super();
    this.inputElement=React.createRef();
  }

  validateInput = (e, schema) => {
    const inputObj = e.target.value;
    const {error,value} = Joi.validate({value:inputObj}, schema, { abortEarly: false });
    let message=(!!error)?error.message:error;
    this.props.alertMessage(message);
  };
  // shouldComponentUpdate(prev,after){
  //   if(after.errorValidation!=this.errorValidation) return true;
  //   return false;
  // }
  render() {
    const { validate, alert } = this.props;
    return (
       <React.Fragment>
          <input className="form-control"
            type="text"
            onChange={event => this.validateInput(event, validate)}
            ref={this.inputElement}
          />
         </React.Fragment>
    );
  }
}

const StateFromRedux = state => {
  return {
    tableStr: state.tableStructure
  };
};

export default connect(StateFromRedux)(Input);
