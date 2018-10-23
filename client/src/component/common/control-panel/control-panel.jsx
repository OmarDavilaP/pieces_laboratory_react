import React, { Component } from "react";
import { connect } from "react-redux";
//external libraries
import Joi from "joi-browser";
import Input from '../input/input';
class ControlPanel extends Component {
  state={
    showAlertMessage:false
    
  }
  handleAlert=(message)=> {
    this.setState({showAlertMessage:!!message})
    return <div className="alert alert-danger" role="alert" >{message}</div>;
  }

  shouldComponentUpdate(prev,post){
    console.log(post)
    return false;
  }
  
  renderAddButton(){
    return (
      <li className="nav-item">
        <a className="nav-link active" href="#">
          <i className="fa-shopping-cart" />
        </a>
      </li>     
    );
  }
  render() {
    const { tableStr } = this.props;
    return (

      <ul className="nav nav-pills control-panel">
        <div className="input-group mb-sm-0">
          {tableStr.map((item, index) => {
            return( 
            <Input key={index} 
             validate={item.schema} 
             alert={item.alert} 
             alertMessage={this.handleAlert }
             
            />)

          })}
          {this.renderAddButton()}
          { this.showAlertMessage && this.handleAlert()}
        </div>
      </ul>
    );
  }
}
const initialStateFromRedux = state => {
  return { tableStr: state.tableStructure };
};

export default connect(initialStateFromRedux)(ControlPanel);
