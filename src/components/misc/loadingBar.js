import React from 'react';

import '../../static/stylus/misc/loadingBar.styl';

const LoadingBar = (props) => {
  return (
    <div className="loading">
      <div className="loading__bar"></div>
      <div className="loading__bar"></div>
      <div className="loading__bar"></div>
      <div className="loading__bar"></div>
    </div>
  )
};

export default LoadingBar;
