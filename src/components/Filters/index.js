import React, { Component } from 'react';
import Slider from '../base-ui/Slider'
import { Grid } from 'semantic-ui-react'
import { FilterContainer } from './styledComponents'

class Filters extends Component {
  render() {
      const { handleWeightFilter, handlePriceFilter, handleRangeFilter, handleSpeedFilter } = this.props;
    return (
    <FilterContainer>
    <Grid stackable columns={2} celled>
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
            header={'Weight'}
            sliderMax={120}
            suffix={'lbs.'}
            handleFilter={handleWeightFilter}
            />
        </Grid.Column>
    </Grid.Row>
    <Grid.Row>
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
        </FilterContainer>
    );
  }
}

export default Filters;
