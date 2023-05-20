import React from "react";
const ClaimsEdit = (props) => {
  return (
    <li className="claims-edit">
      <div className="claims-edit__container">
        <div className="claims-edit__id">
          <h2>{props.id}</h2>
        </div>
      </div>
    </li>
  );
};

export default ClaimsEdit;
