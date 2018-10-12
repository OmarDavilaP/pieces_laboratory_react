import React, { Component } from "react";
import moment from "moment";

const ProvideTimeHour = ({ date }) => {
  const hrsT = moment(date.inputDate).add(date.hrs, "hours");
  const dur = moment.duration(hrsT.diff(moment().format("MM-DD-YYYY HH:mm")));
  return (
    <React.Fragment>
      <p>
        {moment(hrsT).format("DD-MM-YYYY HH:mm")}- time to finish {dur.hours()}{" "}
        hrs
      </p>
      <p />
    </React.Fragment>
  );
};

export default ProvideTimeHour;
