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
      filters: {
        displayFilters: true,
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
      },
      filteredScooters: scooters,
    }
    this.filterScooters = this.filterScooters.bind(this);
    this.openCloseFilters = this.openCloseFilters.bind(this);
    this.handlePriceFilter = this.handlePriceFilter.bind(this);
    this.handleSpeedFilter = this.handleSpeedFilter.bind(this);
    this.handleRangeFilter = this.handleRangeFilter.bind(this);   
    this.handleWeightFilter = this.handleWeightFilter.bind(this);
    this.handlePowerFilter = this.handlePowerFilter.bind(this);
    this.handleTypeFilter = this.handleTypeFilter.bind(this);
  }

  async openCloseFilters() {
    const { displayFilters } = this.state;
    this.setState({displayFilters: !displayFilters})
  }

  filterScooters(filters) {
    const filteredScooters = scooters.filter(scooter => {
      const { minPrice, maxPrice, minSpeed, maxSpeed, minRange, maxRange, minWeight, maxWeight, minPower, maxPower} = filters;

      const inPriceRange = scooter.price > minPrice && scooter.price < maxPrice;
      const inSpeedRange = scooter.speed > minSpeed && scooter.speed < maxSpeed;
      const inRangeRange = scooter.range > minRange && scooter.range < maxRange;
      const inWeightRange = scooter.weight > minWeight && scooter.weight < maxWeight;
      return inPriceRange && inSpeedRange && inRangeRange && inWeightRange;
    });
    return filteredScooters;
  }
  
  handleFilter(filterChanges) {
    const newFilters = {
      ...this.state.filters,
      ...filterChanges,
    };
    const filteredScooters = this.filterScooters(newFilters)
    this.setState({ filteredScooters, 
      newFilters,
    });
  }

  handlePriceFilter(minPrice, maxPrice) {
    this.handleFilter({ minPrice, maxPrice, });
  }

  handleSpeedFilter(minSpeed, maxSpeed) {
    this.handleFilter({ minSpeed, maxSpeed });
  }

  handleRangeFilter(minRange, maxRange) {
    this.handleFilter({ minRange, maxRange });
  }

  handleWeightFilter(minWeight, maxWeight) {
    this.handleFilter({ minWeight, maxWeight });
  }

  handlePowerFilter(minPower, maxPower) {
    this.handleFilter({ minPower, maxPower });
  }

  handleTypeFilter(option) {
    this.handleFilter({ [option]: !this.state[option] })
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
              openCloseFilters={(this.openCloseFilters)}
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
