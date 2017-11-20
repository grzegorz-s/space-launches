import React from 'react';

import { NavToggle, NavToggleBar, NavBody, NavLinkEl, NavLinkHld } from '../styled/Nav';

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: false
    };
  }

  toggleVisible() {
    const visible = !this.state.visible;
    this.setState({visible});
  }

  render() {
    const { visible } = this.state;
    const navClass = visible ? "is-active" : "";

    return(
      <div>
        
        <NavToggle className={navClass} onClick={this.toggleVisible.bind(this)}>
          <NavToggleBar />
          <NavToggleBar />
          <NavToggleBar />
        </NavToggle>

        <NavBody className={navClass}>
          <NavLinkHld>
            <NavLinkEl exact to="/" onClick={this.toggleVisible.bind(this)}>Home</NavLinkEl>
            <NavLinkEl to="/launches" onClick={this.toggleVisible.bind(this)}>More Launches</NavLinkEl>
          </NavLinkHld>
        </NavBody>
      </div>
    )
  }
}