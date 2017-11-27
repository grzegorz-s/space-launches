import React, { Component } from 'react';
import { fetchMoreLaunches } from '../utils/api';
import Loader from '../components/Loader';
import InfiniteScroll from 'react-infinite-scroller';
import CardLink from '../components/CardLink';

import { CardsHld } from '../styled/CardLink';
import {
  BounceBallHld,
  BounceBall
} from '../styled/Loader';

export default class Launches extends Component {
  constructor() {
    super();
    this.state = {
      launches: {},
      loading: true,
      hasMore: true
    }
  }

  async fetchData(page) {
    const launches = await fetchMoreLaunches(page);
    this.setState({
      launches: [...this.state.launches, ...launches],
      loading: false,
      hasMore: Boolean(launches.length)
    });
  }

  componentDidMount () {
    this.fetchData();
  }

  render() {
    const { loading, launches, hasMore } = this.state;

    if (loading) {
      return <Loader />
    }

    return(
      <InfiniteScroll
        pageStart = {1}
        loadMore = {this.fetchData.bind(this)}
        hasMore = {hasMore}
        threshold = {50}
        useWindow={false}
        loader = {
          <BounceBallHld>
            <BounceBall></BounceBall>
            <BounceBall></BounceBall>
          </BounceBallHld>
        }>

        <div>
          <CardsHld>
          {launches.map((launch, i) =>
            
            <CardLink key={i} launch={launch} />
          )}
          </CardsHld>
        </div>
      </InfiniteScroll>
    )
  }
}