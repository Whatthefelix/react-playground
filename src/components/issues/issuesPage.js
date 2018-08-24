import React, { Component } from 'react';

import '../../static/stylus/issues/issuesPage.styl';

import IssuesList from '../issues/issuesList';
import FiltersList from '../issues/filtersList';
import IssuesNav from '../issues/issuesNav';

class IssuesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFilter: 'all',
      filters: [
        {
          type: 'all',
          name: 'All Issues'
        }, {
          type: 'open',
          name: 'Open Issues'
        }, {
          type: 'closed',
          name: 'Closed Issues'
        }, {
          type: 'pull_request',
          name: 'Pull Requests'
        }
      ],
      issues: null
    };
  }

  componentDidMount() {
    this.filterIssues(this.state.currentFilter);
  };

  filterIssues(currentFilter) {

    const filteredIssues = this.props.location.state.gitData.filter((issue) => {
      // handle filtering of cases 'all' and 'PR'
      this.setState({ currentFilter });
      if (currentFilter === 'all') {
        return issue;
      } else if (currentFilter === 'pull_request') {
        return issue.pull_request;
      }
      // else if (currentFilter === 'closed') {
        // return issue.close
      // }
      return issue.state === currentFilter;
      // return issue[currentFilter] === issue;
      // if (currentFilter === 'pull_request') {
      //   return issue.pull_request;
      // } else if (currentFilter === 'all') {
      //   return issue;
      // }
      // return issue.state === currentFilter;
    });
    this.setState({ issues: filteredIssues });
  };

  backButton = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
        onClick={() => {this.props.history.goBack()}}>
        <path d="M48 4.8L43.2 0 24 19.2 4.8 0 0 4.8 19.2 24 0 43.2 4.8 48 24 28.8 43.2 48l4.8-4.8L28.8 24 48 4.8z" />
      </svg>
    )
  };

  render() {
    return(
      <div className="issues-page">
        <IssuesNav title='GitHub Issue Viewer' url={this.props.location.state.gitURL} />
        {this.backButton()}
        <FiltersList
          onFilterSelected={(selectedFilter) => {
            this.filterIssues(selectedFilter)
          }}
          filters={this.state.filters}
          currentFilter={this.state.currentFilter}/>
        <IssuesList
          issues={this.state.issues}/>
      </div>
    )
  }
};

export default IssuesPage;
