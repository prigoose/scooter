import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'

import scooter from '../icons/scooter.svg';
import { HeaderContainer, Logo } from './styledComponents'


class Header extends Component {
  render() {
    return (
        <div>
        <HeaderContainer>
            <Logo
                src={scooter}
                alt="logo"
            />
          <p className="title" style={{color: 'white', fontFamily: 'Fredoka One'}}>Scooter Scout</p>
        </HeaderContainer>
        </div>
    );
  }
}

export default Header;
