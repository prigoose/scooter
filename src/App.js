import React, { Component } from 'react';
import Cards from './components/Cards';
import Header from './components/SiteHeader'
import Filters from './components/Filters'
import ConditionalRender from './components/base-ui/ConditionalRender'
import { AppWrapper, FilterContainer, ContentWrapper } from './styledComponents'
import { Button } from 'semantic-ui-react'
import { scooters } from './data/scooters'
class App extends Component {
  constructor() {
    super();
    this.state = {
      displayFilters: false,
      filtersAdded: false,
      Scooter: true,
      Skateboard: true,
      Alternative: true,
      minPrice: 0,
      maxPrice: 1500,
      minWeight: 0,
      maxWeight: 1500,
      minSpeed: 0,
      maxSpeed: 1500,
      minRange: 0,
      maxRange: 1500,
      minPower: 0,
      maxPower: 1500,
      filteredScooters: scooters
    }
    this.openCloseFilters = this.openCloseFilters.bind(this);
    this.handlePriceFilter = this.handlePriceFilter.bind(this);
    this.handleSpeedFilter = this.handleSpeedFilter.bind(this);
    this.handleRangeFilter = this.handleRangeFilter.bind(this);   this.handleWeightFilter = this.handleWeightFilter.bind(this);
    this.handlePowerFilter = this.handlePowerFilter.bind(this);
    this.handleTypeFilter = this.handleTypeFilter.bind(this);
  }
  async openCloseFilters() {
    const { displayFilters } = this.state;
    this.setState({displayFilters: !displayFilters})
  }
  handleFilter(min, max) {
    const { minPrice, maxPrice, minSpeed, maxSpeed, minRange, maxRange, minWeight, maxWeight, minPower, maxPower} = this.state;
    const filteredScooters = scooters.filter(scooter => 
    (scooter.price > minPrice && scooter.price < maxPrice &&
    scooter.speed > minSpeed && scooter.speed < maxSpeed &&
    scooter.range > minRange && scooter.range < maxRange &&
    scooter.weight > minWeight && scooter.weight < maxWeight
    ))
    this.setState({filteredScooters})
  }
  async handlePriceFilter(minPrice, maxPrice) {
    await this.setState({minPrice, maxPrice})
    this.handleFilter();
  }
  async handleSpeedFilter(minSpeed, maxSpeed) {
    await this.setState({minSpeed, maxSpeed})
    this.handleFilter();
  }
  async handleRangeFilter(minRange, maxRange) {
    await this.setState({minRange, maxRange})
    this.handleFilter();
  }
  async handleWeightFilter(minWeight, maxWeight) {
    await this.setState({minWeight, maxWeight})
    this.handleFilter();
  }
  async handlePowerFilter(minPower, maxPower) {
    await this.setState({minPower, maxPower})
    this.handleFilter();
  }
  async handleTypeFilter(option) {
    await this.setState({[option]: !this.state[option]})
    this.handleFilter()
  }
  render() {
    const { displayFilters, filteredScooters, Scooter, Skateboard, Alternative } = this.state;
    return (
      <AppWrapper>
        <Header/>
        <ContentWrapper>
        <FilterContainer>
        <Button
          content='Add Filters'
          toggle
          active={displayFilters}
          onClick={this.openCloseFilters}
          style={{marginTop: 20, color: 'black'}}
          size='big'
        />
        <ConditionalRender 
          shouldRender={displayFilters}
          component={Filters}
          openCloseFilters={this.openCloseFilters}
          handlePriceFilter={this.handlePriceFilter}
          handleSpeedFilter={this.handleSpeedFilter}
          handleRangeFilter={this.handleRangeFilter}
          handlePowerFilter={this.handlePowerFilter}
          handleWeightFilter={this.handleWeightFilter}
          handleTypeFilter={this.handleTypeFilter}
        />
        </FilterContainer>
        <Cards 
          scooters={filteredScooters}
        />
        </ContentWrapper>
      </AppWrapper>
    );
  }
}

export default App;
