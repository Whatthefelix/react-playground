import React from 'react';

const IssuesLabelsList = (props) => {
  const styles = {};

  styles.span = {
    fontSize: '9px',
    fontWeight: 'light',
    color: '#FFF',
    backgroundColor: '#E91E63',
    padding: '5px',
    height: '10px',
    borderRadius: '5px',
    margin: '10px',
    display: 'inline-block',
    lineHeight: '1'
  };

  styles.circle = {
    width: '4px',
    height: '4px',
    borderRadius: '25px',
    backgroundColor: '#FFF',
    display: 'inline-block',
    marginRight: '4px',
    verticalAlign: 'middle'
  };

  const labels = props.labels.map((label) => {
    return (
      <div key={label} style={styles.span}>
        <div style={styles.circle}></div>
        {label}
      </div>
    )
  });

  return (
    <div>
      {labels}
    </div>
  )
};

export default IssuesLabelsList;
