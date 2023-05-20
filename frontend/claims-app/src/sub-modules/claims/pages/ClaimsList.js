import React from "react";

import ClaimsList from "../components/ClaimsList";

const Claims = () => {
  const CLAIMS_FROM_BACKEND = [{ id: 1 }];

  return <ClaimsList items={CLAIMS_FROM_BACKEND}></ClaimsList>;
};

export default Claims;
