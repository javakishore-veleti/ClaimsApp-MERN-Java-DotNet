import React from "react";

import ClaimsList from "../components/ClaimsList";

const Claims = () => {
  const CLAIMS_DATA_FROM_API = [
    {
      id: "u1",
    },
    {
      id: "u2",
    },
    {
      id: "u3",
    },
    {
      id: "u4",
    },
    {
      id: "u5",
    },
  ];

  return <ClaimsList items={CLAIMS_DATA_FROM_API} />;
};

export default Claims;
