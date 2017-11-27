import React from "react";
import moment from 'moment';
import { 
  Card, 
  CardTop, 
  CardFlag, 
  CardDate, 
  CardTitle 
} from '../styled/CardLink';

const CardLink = ({launch}) => {

  const availFlags = [
    'AUS',
    'CAN',
    'CHN',
    'FRA',
    'IND',
    'JPN',
    'KAZ',
    'NZL',
    'RUS',
    'UKR',
    'USA',
  ];

  const flagSVG = availFlags.includes(launch.location.countryCode) && require(`../assets/images/flags/${launch.location.countryCode}.svg`);

  return(
    <Card to={`/launch-details/launch-${launch && launch.id}`}>
      <CardTop>
        <CardFlag>
          {flagSVG && 
            <img src={flagSVG} width="30" height="30" alt={launch.location.countryCode} />
          }
        </CardFlag>
        <CardDate>
          { moment(launch.net).format('MMM DD YYYY') }
        </CardDate>
      </CardTop>
      <CardTitle>{launch.name}</CardTitle>
    </Card>
  )
}

export default CardLink;