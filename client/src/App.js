import React, { Component } from "react";
//components
import Table from "./component/table/table";
import ControlPanel from "./component/common/control-panel";
import { getStructure, getApiCall } from "./fakeService/fakeService";
//external librarires
import moment from "moment";
import { connect } from "react-redux";
import Joi from "joi-browser";

class App extends Component {

  state = {
    dTable: [],
    tableStructure: []
  }

  componentDidMount = () => {
    let test = getStructure();
    const structure = getStructure();
    const apiCall = getApiCall();
    console.log(structure)

    this.setState({ dTable: apiCall });
    this.props.handleStructure(structure);
  };

  render() {
    const { dTable } = this.state;
    const { tableStr } = this.props;
    if (dTable.length === 0) return false;
    return (
      <div className="App container">
        <ControlPanel />
        <Table data={dTable} tStructure={tableStr} />
      </div>
    );
  }
}
const stateFromRedux = state => {
  return { tableStr: state.tableStructure };
};

const mapDispatch = dispatch => {
  return {
    handleStructure: str => dispatch({ type: "HANDLESTR", data: str })
  };
};

export default connect(
  stateFromRedux,
  mapDispatch
)(App);
