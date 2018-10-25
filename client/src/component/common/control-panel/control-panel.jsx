import React, { Component } from "react";
import { connect } from "react-redux";
//external libraries
import Joi from "joi-browser";
import Input from '../input/input';
class ControlPanel extends Component {
  state={
    showAlertMessage:false,
    message:''
  }

  handleAlert=(message)=>{
    this.setState({showAlertMessage:!!message,message});

  }

  renderAlert=()=><div className="alert alert-danger" role="alert" >{this.state.message}</div>

  renderInput=(tableStr)=>{
   return tableStr.map((item, index,arr) => {
      return ( 
      <Input key={index} 
       validate={item.schema} 
       alert={item.alert} 
       alertMessage={this.handleAlert }             
      />)
    })
  }
  

  // shouldComponentUpdate(prev,post){
  //   console.log("?",post)
  //   return false;
  // }
  
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
    console.log(this.state)
    return (
      <ul className="nav nav-pills control-panel">
        <div className="input-group mb-sm-0">
          {this.renderInput(tableStr)}
          {this.renderAddButton()}
        </div>
        { this.state.showAlertMessage && this.renderAlert()}
      </ul>
    );
  }
}
const initialStateFromRedux = state => {
  return { tableStr: state.tableStructure };
};

export default connect(initialStateFromRedux)(ControlPanel);
