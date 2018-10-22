import React, { Component } from "react";
//components
import Table from "./component/table/table";
import ControlPanel from "./component/common/control-panel/control-panel";
import FakeAPI from "./fakeService/fakeService";
//external librarires
import { connect } from "react-redux";

class App extends Component {

  constructor(){
    super();
    this.myApi= new FakeAPI();
  }

  state = {
    dTable: [],
    tableStructure: []
  }

  componentDidMount = () => {
    const structure = this.myApi.getStructure;
    const apiCall = this.myApi.getApiCall();
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
