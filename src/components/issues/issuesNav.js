import React from 'react';

import '../../static/stylus/issues/issuesNav.styl';

const IssuesNav = (props) => {

  return (
    <div className="issue-nav">
      <div className='issue-nav__title'>
        {props.title}
      </div>
      <div className='issue-nav__url'>
        {props.url}
      </div>
    </div>
  )
};

export default IssuesNav;
