import React from "react";

import { v4 } from "uuid";

const Integrating = () => {
  const id = v4();
  return (
    <>
      <h1>Unique id is :</h1>
      <h2>{id}</h2>

      <div style={{ color: "Red" }}>
        <h3>Refresh for new id</h3>
      </div>
    </>
  );
};
export default Integrating;
