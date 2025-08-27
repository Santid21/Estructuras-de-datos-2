import React from 'react';

const Son = React.memo(({ i, increment }) => {
  console.log('Renderizado:', i);

  return (
    <button
      className="btn btn-primary m-2"
      onClick={() => increment(i)}
    >
      {i}
    </button>
  );
});

export default Son;
