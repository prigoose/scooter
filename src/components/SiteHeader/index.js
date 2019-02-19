import React, { Component } from 'react';
import scooter from '../icons/scooter.svg';
import { HeaderContainer, Logo, } from './styledComponents'

class Header extends Component {
  render() {
    return (
        <div>
        <HeaderContainer>
            <Logo
                src={scooter}
                alt="logo"
            />
          <p className="title">The Micromobility Guide</p>
        </HeaderContainer>
        </div>
    );
  }
}

export default Header;
