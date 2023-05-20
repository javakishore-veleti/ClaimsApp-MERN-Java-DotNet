import React from "react";

import ClaimsEdit from "./ClaimsEdit";
const ClaimsList = (props) => {
  if (props.items.length === 0) {
    return (
      <div class="center">
        <h2>No Claims found</h2>
      </div>
    );
  }
  return (
    <ul>
      {props.items.map((aClaim) => {
        return <ClaimEdit key={aClaim.id} id={aClaim.id}></ClaimEdit>;
      })}
    </ul>
  );
};

export default ClaimsList;
