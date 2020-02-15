import React, { useState } from "react";


const Container = () => {
  const [number, setNumber] = useState(0);

  return (
    <div className="container">
      <div className="number"></div>
    </div>
  );
}

export default Container;
