import React, { Component } from 'react';
import Slider from '../base-ui/Slider'
import { Button, Grid } from 'semantic-ui-react'
import { FilterContainer } from './styledComponents'

class Filters extends Component {
  render() {
      const { openCloseFilters, handleWeightFilter, handlePriceFilter, handleRangeFilter, handleSpeedFilter } = this.props;
    return (
    <FilterContainer>
    <Grid stackable columns={4}>
    <Grid.Row>
        <Grid.Column>
        <Slider
            header={'Price'}
            sliderMax={3800}
            prefix={'$'}
            handleFilter={handlePriceFilter}
            />
        </Grid.Column>
        <Grid.Column>
        <Slider
            header={'Scooter Weight'}
            sliderMax={120}
            suffix={'lbs.'}
            handleFilter={handleWeightFilter}
            />
        </Grid.Column>
        <Grid.Column>
        <Slider
                header={'Speed'}
                sliderMax={50}
                suffix={'mph'}
                handleFilter={handleSpeedFilter}
                />
        </Grid.Column>
        <Grid.Column>
        <Slider
            header={'Range'}
            sliderMax={75}
            suffix={'miles'}
            handleFilter={handleRangeFilter}
            />
        </Grid.Column>
    </Grid.Row>
        </Grid>
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: 15}}>
        <Button
        basic
        size='large'
        color='blue'
          content='Apply'
          onClick={openCloseFilters}
        />
        </div>
        </FilterContainer>
    );
  }
}

export default Filters;
