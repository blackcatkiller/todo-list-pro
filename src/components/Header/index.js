import React from 'react';

import './index.scss';

function MyHeader(props) {
    
    const { openInput } = props;
  return (
      <div className="header">
          <h1>事件代办</h1>
          <span
              className="icon"
              onClick={openInput}
          >&#43;</span>
      </div>
  )
}

export default MyHeader