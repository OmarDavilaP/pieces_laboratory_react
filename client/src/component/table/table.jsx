import React, { Component } from 'react';
import PropTypes from 'prop-types'


import Th from './th';
import Cell from './cell'
class Table extends Component {

    renderCell = (data, tStructure) => {
        return data.map(item => <tr key={item.id}><Cell data={item} tStructure={tStructure} /></tr>
        )
    }

    render() {
        const { data, tStructure } = this.props
        return (
            <table className="table container">
                <thead>
                    <tr><Th tStructure={tStructure} /></tr>
                </thead>
                <tbody>
                    {this.renderCell(data, tStructure)}
                </tbody>
            </table>
        );


    }

}

/*const tablePropType=PropTypes.arrayOf(PropTypes.shape({
    header:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    maxString:PropTypes.number.isRequired,
}));

Table.propTypes={
    data:tablePropType
}*/

export default Table;