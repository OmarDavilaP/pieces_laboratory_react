import React, { Component } from 'react';

const Th = ({ tStructure }) => {
    return (
        tStructure.map((item, index) => {
            return <th key={item.id+"-"+item.path}>{item.label}</th>
        })

    );

}

export default Th;
