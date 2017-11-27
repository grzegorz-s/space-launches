import React, { Component } from 'react';
import { fetchMoreLaunches } from '../utils/api';

const ListingContent = ({launches}) => {
  console.log(launches);
}

export default class Listing extends Component {
  constructor() {
    super();
    this.state = {
      launches: {}
    }
  }

  async fetchData (offset) {
    const launches = await fetchMoreLaunches(offset);
    this.setState({
      launches,
      loading: false
    });
  }

  componentDidMount () {
    this.fetchData(this.props.match.params.launches)
  }

  render() {
    // const { loading, launch } = this.state;
    return(
      <div>
        { <ListingContent launches={launches} /> }
      </div>
    )
  }
}