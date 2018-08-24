import React from 'react';

import '../../static/stylus/issues/issuesListItem.styl';

import IssuesLabelsList from '../issues/issuesLabelsList';

const IssuesListItem = (props) => {
  const labels = props.labels.map((label) => {
    return label.name;
  });

  return(
    <div className="issue-list-item"
      onClick={() => {
        if (props.issueUrl) {
          window.open(props.issueUrl, '_blank');
        }
      }}>
      <div className="issue-list-item__title">
        {props.title}
        <div className="issue-list-item__icon">
          {props.issueStateIcon}
        </div>
      </div>
      <div className="issue-list-item__body">
        {props.body ? props.body : 'No Description Provided'}
      </div>
      <div className="issue-list-item__labels">
        <IssuesLabelsList labels={labels}/>
      </div>
    </div>
  )
};

export default IssuesListItem;
