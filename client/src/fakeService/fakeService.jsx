import Joi from 'joi-browser';
import React from 'react';
import ProvideTimeHour from "../component/count-hours/count-hours";

class FakeAPI {

    constructor(){
        this.person=[{
            id: 1,
            pieceNumb: 999991,
            owner: "Marilu",
            reqBy: "Omar Davila",
            hrs: 23,
            inputDate: "2018-09-16 20:18",
            input: ({ hrs, inputDate }) => {
                return <ProvideTimeHour date={{ hrs, inputDate }} />;
            }
        },
        {
            id: 2,
            pieceNumb: 999999,
            owner: "Marilu",
            reqBy: "Pedrito Davila",
            hrs: 13,
            inputDate: "2018-09-16 11:18",
            input: ({ hrs, inputDate }) => {
                return <ProvideTimeHour date={{ hrs, inputDate }} />;
            }
        }];
      this.structure=[
        {
            id: "id",
            label: "Piece Number",
            path: "pieceNumb",
            sort: false,
            editable: false,
            schema: { value: Joi.number().required() },
            alert: true
        },
        {
            id: "id",
            label: "Reposable",
            path: "owner",
            sort: false,
            editable: false,
            schema: { value: Joi.string().required() },
            alert: true
        },
        {
            id: "id",
            label: "Requested by",
            path: "reqBy",
            sort: false,
            editable: false,
            schema: { value: Joi.string().required() },
            alert: true
        },
        {
            id: "id",
            label: "Hours",
            path: "hrs",
            sort: false,
            editable: false,
            schema: { value: Joi.string().required() },
            alert: true
        },
        {
            id: "id",
            label: "Date",
            path: "inputDate",
            sort: false,
            editable: false,
            schema: { value: Joi.string().required() },
            alert: true
        },
        {
            id: "id",
            label: "Estimating time",
            path: "input",
            sort: false,
            editable: false,
            schema: { value: Joi.string().required() },
            alert: true
        }
    ];  
    }

get getStructure(){
    return this.structure;
}

getApiCall=()=> {
    return this.person;
}

}

export default FakeAPI;