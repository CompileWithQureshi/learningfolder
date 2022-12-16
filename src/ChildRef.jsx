import React from "react";

const ChildRef = React.forwardRef((props, ref) => {
  return (
    <>
      <input ref={ref} type="text" />
    </>
  );
});

export default ChildRef;
