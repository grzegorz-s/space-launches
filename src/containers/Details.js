import React, { Component } from 'react';
import { fetchLaunch } from '../utils/api';
import MyGoogleMap from '../components/MyGoogleMap';
import Loader from '../components/Loader';
import placeholderImg from '../assets/images/002-space-shuttle-1.svg';

import { 
  DetailsHeader, 
  DetailsHeaderPlaceholder
} from '../styled/Details';

import { 
  ButtonsSmallHld, 
  ButtonSmall 
} from '../styled/Buttons';

import { 
  Title,
  MainTitle,
  UnorderedList
} from '../styled/Typo';

import { 
  Container
} from '../styled/AppLayout';

const DetailsContent = ({launch}) => {  
  const string = 'placeholder';
  const imageLink = launch.rocket.imageURL;
  const hasPlaceholder = imageLink.includes(string);
  console.log(launch);

  return(
    <div>
      <Container>
        { hasPlaceholder ? (
          <DetailsHeaderPlaceholder>
            <img src={ placeholderImg } alt="SpaceShip"/>
          </DetailsHeaderPlaceholder>
          ) : (
          <DetailsHeader image={imageLink} />
        )}

        { launch.vidURLs ? (
          <ButtonsSmallHld>
          {launch.vidURLs.map(function (vidUrl, i) {
            return (
              <ButtonSmall key={i} href={vidUrl} target="_blank">Live Stream {i + 1}</ButtonSmall>
            )
          })}
          </ButtonsSmallHld>       
        ) : false }

        <MainTitle>{launch.name}</MainTitle>
        <Title>Takeoff location</Title>
        <UnorderedList>
          <li>{launch.location.name}</li>
        </UnorderedList>

        <Title>Rocket specifics</Title>
        <UnorderedList>
          <li>Rocket {launch.rocket.name}</li>
          <li>Read more about <a href={launch.rocket.wikiURL} target="_blank">{launch.rocket.name}</a></li>
        </UnorderedList>

        <Title>Rocket Agency</Title>
        {launch.rocket.agencies.map(function (agency, i) {
          return (
            <UnorderedList key={i}>
              <li>Name {agency.name} abbr. {agency.abbrev}</li>
              <li>Agency link <a href={agency.infoURL} target="_blank">{agency.abbrev}</a></li>
            </UnorderedList>
          )
        })}

        <Title>pads info</Title>
        <UnorderedList>
          <li>{launch.location.pads[0].name}</li>
          <li>GPS {launch.location.pads[0].latitude} {launch.location.pads[0].longitude}</li>
          {launch.location.pads[0].wikiURL ? (
            <li><a href={launch.location.pads[0].wikiURL} target="_blank">Read more about pad</a></li>
          ) : ('')}
          
        </UnorderedList>
      </Container>
      <MyGoogleMap
        isMarkerShown
        lat={launch.location.pads[0].latitude}
        lng={launch.location.pads[0].longitude}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRB1fERudcU-jWtT4HyErHTPcdIxYrhhs&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      launch: {},
      loading: true
    }
  }

  async fetchData (launchId) {
    const launch = await fetchLaunch(launchId);
    this.setState({
      launch,
      loading: false
    });
  }

  componentDidMount () {
    this.fetchData(this.props.match.params.launch)
  }

  render() {
    const { loading, launch } = this.state;
    return(
      <div>
        { loading ? <Loader /> : <DetailsContent  launch={launch} /> }
      </div>
    )
  }
}