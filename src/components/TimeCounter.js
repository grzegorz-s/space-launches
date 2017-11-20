import React from 'react';

import { CounterElementHld, CounterElement, CounterElementText } from '../styled/TimeCounter';


export default class TimeCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  countDown() {
    const timer = setInterval(() => {
      if (!this.props.time) return;

      const countDownDate = new Date(this.props.time).getTime();
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.setState({
        days,
        hours,
        minutes,
        seconds
      });

    }, 1000);

    this.setState({
      timer
    })
  }

  componentDidMount() {
    this.countDown();
  } 

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {    
    return(
      <CounterElementHld>
        <CounterElement>{this.state.days} <CounterElementText>Days</CounterElementText></CounterElement>
        <CounterElement>{this.state.hours} <CounterElementText>Hours</CounterElementText> </CounterElement>
        <CounterElement>{this.state.minutes} <CounterElementText>Minutes</CounterElementText> </CounterElement>
        <CounterElement>{this.state.seconds} <CounterElementText>Seconds</CounterElementText></CounterElement>
      </CounterElementHld>
    );
  }
}