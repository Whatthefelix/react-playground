import React, { Component } from 'react';
import axios from 'axios';

import '../../static/stylus/search/searchPage.styl';

import SearchBar from '../search/searchBar';
import LoadingBar from '../misc/loadingBar';

const API_BASE_URL = 'https://api.github.com/repos';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gitData: [],
      gitURL: '',
      isLoading: false,
      inputValue: '',
      searchTerm: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  };

  handleInputChange(event) {
    this.setState({ searchTerm: event.target.value });
  };

  clearInput() {
    this.setState({ searchTerm: '' });
  };

  async fetchAndShowGitData() {
    // facebook/react
    const urlPath = this.state.searchTerm.split('/').splice(-2).join('/');
    this.setState({ isLoading: true });
    if (urlPath) {
      const gitData = await axios.get(`${API_BASE_URL}/${urlPath}/issues?state=all`)
        .then(response => {
          this.setState({ gitURL: this.state.searchTerm });
          this.setState({ gitData: response.data });
          this.props.history.push({
              pathname: '/issues',
              state: {
                gitData: this.state.gitData,
                gitURL: this.state.gitURL
              }
          });
          return response.data;
        })
        .catch(err => {
          alert('Oops! Looks like you entered an incorrect GitHub repo');
          this.setState({ isLoading: false });
          this.setState({ searchTerm: '' });
          console.log(err);
        });

      return gitData;
    } else {
      this.setState({ isLoading: false });
      this.setState({ searchTerm: '' });
      alert('Oops! Looks like you entered an incorrect GitHub repo');
    }
  };

  render () {
    return (
      <div className="search-page">
        <div className="search-page__content">
          <h1 style={{ display: 'block' }}>GitHub Issue Viewer</h1>
          <SearchBar
            onSearchSubmit={(searchTerm) => {
              this.fetchAndShowGitData(searchTerm);
            }}
            value={this.state.searchTerm}
            onChange={(event) => this.handleInputChange(event)}
            placeHolder={`Paste a link to a GitHub repo!`}
          />
          {this.state.isLoading &&
            <LoadingBar/>
          }
        </div>
      </div>
    )
  }
};

export default Search;
