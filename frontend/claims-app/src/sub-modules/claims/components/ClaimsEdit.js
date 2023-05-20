import React from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/components/UIElements/Card";
import "./ClaimsEdit.css";

const ClaimsItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <div>{props.id}</div>
        <Link to={`/${props.id}/places`}></Link>
        <div>{props.id}</div>
      </Card>
    </li>
  );
};

export default ClaimsItem;
