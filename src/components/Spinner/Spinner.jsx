import React from 'react';

import './Spinner.scss';

function Spinner() {
  return (
    <div className='cs-loader-inner'>
      <label>●</label>
      <label>●</label>
      <label>●</label>
      <label>●</label>
      <label>●</label>
      <label>●</label>
    </div>
  );
}

export default Spinner;
