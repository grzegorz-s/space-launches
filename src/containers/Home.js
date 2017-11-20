import React from 'react';
import moment from 'moment';
import { fetchNextLaunches } from '../utils/api';

import AppHeader from '../components/AppHeader';
import TimeCounter from '../components/TimeCounter';

import { MainTitle, Title, DateText } from '../styled/Typo';
import { CounterElementText } from '../styled/TimeCounter';
import { ButtonsHld, Button, ButtonPrimary } from '../styled/Buttons';


export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      launches: []
    }
  }

  async fetchLaunches() {
    const launches = await fetchNextLaunches();
    this.setState({
      launches
    });
  }

  componentDidMount () {
    this.fetchLaunches();
  }

  render() {
    const { launches } = this.state;
  
    return(
      <div>
        <AppHeader />
        <div className="wrapper wrapper--bottom">
          <MainTitle>Next space launch</MainTitle>
          <TimeCounter time={launches[0] && launches[0].net} />

          {launches.map(function (launch, i) {
            return (
              <div key={launch.id}>
                <DateText>
                  <CounterElementText>{ moment(launch.net).format('MMM DD YYYY') }</CounterElementText>
                </DateText>
                
                <Title>
                  { launch.name } <br />      
                </Title>
              </div>
            )
          })}

          <ButtonsHld>
            <Button to={`/launch-details/launch-${launches[0] && launches[0].id}`}>Show details</Button>
            <ButtonPrimary to="/launches">More launches</ButtonPrimary>
          </ButtonsHld>
        </div>
      </div>
    )
  }
}
