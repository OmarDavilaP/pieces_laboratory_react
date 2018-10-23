import React, { Component, Fragment } from 'react';

const Cell = ({ data, tStructure }) => {
    return tStructure.map((column, index) => {

        let renderItem = (typeof data[column.path] == 'function') ? data[column.path](data) : data[column.path];
        return <td key={index} >{renderItem}</td>

    })
}

export default Cell;