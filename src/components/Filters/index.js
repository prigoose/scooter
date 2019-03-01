import React, { Component } from 'react';
import Slider from '../base-ui/Slider'
import { Grid } from 'semantic-ui-react'
import { FilterContainer } from './styledComponents'
import CheckboxGroup from '../base-ui/CheckboxGroup'

class Filters extends Component {
  render() {
      const { handleWeightFilter, handlePriceFilter, handleRangeFilter, handlePowerFilter, handleSpeedFilter, handleTypeFilter } = this.props;
    return (
    <FilterContainer>
    <Grid stackable columns={2} celled>
    <Grid.Row>
        <Grid.Column>
            <CheckboxGroup
                title={'Mobility Type'}
                options={['Scooter', 'Skateboard', 'Alternative']}
                handleFilter={handleTypeFilter}
            />
        </Grid.Column>
        <Grid.Column>
        <Slider
            header={'Speed'}
            sliderMax={1500}
            suffix={'mph'}
            handleFilter={handleSpeedFilter}
            />
        </Grid.Column>
    </Grid.Row>
    <Grid.Row>
        <Grid.Column>
            <Slider
            header={'Price'}
            sliderMax={1500}
            prefix={'$'}
            handleFilter={handlePriceFilter}
            />
        </Grid.Column>
        <Grid.Column>
        <Slider
            header={'Range'}
            sliderMax={1500}
            suffix={'miles'}
            handleFilter={handleRangeFilter}
            />
        </Grid.Column>
    </Grid.Row>
    <Grid.Row>
        <Grid.Column>
            <Slider
            header={'Weight'}
            sliderMax={40}
            suffix={'lbs.'}
            handleFilter={handleWeightFilter}
            />
        </Grid.Column>
        <Grid.Column>
        <Slider
            header={'Motor Power'}
            sliderMax={1500}
            suffix={'m'}
            handleFilter={handlePowerFilter}
            />
        </Grid.Column>
    </Grid.Row> 
        </Grid>
        </FilterContainer>
    );
  }
}

export default Filters;
