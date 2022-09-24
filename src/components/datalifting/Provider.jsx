import React, { useState } from 'react';

const Provider = ({ callback }) => {
  const [val, setVal] = useState(0);

  return <input type="text" value={val} onChange={(e) => { callback(e.target.value); setVal(e.target.value); }}></input>;
};

export default Provider;
