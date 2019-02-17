import React, { Component } from 'react'
import { Input, Menu, Segment, Icon } from 'semantic-ui-react'
import { RangeSlider } from '@appbaseio/reactivesearch';
import Card from '../Card'
import Cards from '../Cards'
import Grid from '../Grid'

export default class MenuExampleTabularOnTop extends Component {
  state = { activeItem: 'Browse All' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div style={{width: '98vw' }}>
        <Menu small icon attached='top' tabular>
          <Menu.Item name='Browse All' active={activeItem === 'Browse All'} onClick={this.handleItemClick} >
          <Icon name='home'/>
          </Menu.Item>
          <Menu.Item
            name='Favorites'
            active={activeItem === 'Favorites'}
            onClick={this.handleItemClick}
          >
          <Icon name='heart'/>
          </Menu.Item>
        </Menu>

        <Segment attached='bottom'>
          {/* <RangeSlider
          componentId="RangeSliderSensor"
          dataField="guests"
          title="Guests"
          range={{
            "start": 0,
            "end": 10
          }}
          /> */}
          {this.state.activeItem === 'Browse All' ? <Cards/> : 'Need to build out favorites'}
        </Segment>
      </div>
    )
  }
}