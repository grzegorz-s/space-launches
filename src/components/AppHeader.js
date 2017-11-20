import React from "react";

import PlanetEarthSvg from '../assets/images/003-planet-earth.svg';
import MoonSvg from '../assets/images/001-moon.svg';

import { AppBody, Header } from '../styled/AppBody';
import { Space, Earth, Moon } from '../styled/SolarSystem';

const AppHeader = () => (
  <AppBody>
    <Header>
      <Space>
        <Earth>
          <img src={ PlanetEarthSvg } alt="PlanetEarth"/>
        </Earth>

        <Moon>
          <img src={ MoonSvg } alt="Moon"/>
        </Moon>
      </Space>          
    </Header>
  </AppBody>
);

export default AppHeader;
