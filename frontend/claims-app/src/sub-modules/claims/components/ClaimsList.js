import React from "react";

import ClaimsEdit from "./ClaimsEdit";
import Card from "../../shared/components/UIElements/Card";
import "./ClaimsList.css";

const ClaimsList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No claims found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="claims-list">
      {props.items.map((claim) => (
        <ClaimsEdit key={claim.id} id={claim.id} />
      ))}
    </ul>
  );
};

export default ClaimsList;
