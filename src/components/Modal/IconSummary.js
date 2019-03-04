import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'

const IconSummary = ({ price, weight, speed, range}) => (
<Grid stackable columns={4} textAlign='center'>
  <Grid.Column>
    <Grid.Row>
      <Icon name='money bill alternate outline' size='huge'/>
    </Grid.Row>
    <Grid.Row>
    <p style={{fontWeight: 'bold'}}>${price}</p>
    </Grid.Row>
  </Grid.Column>
  <Grid.Column>
    <Grid.Row>
    <Icon name='balance scale' size='huge'/>
    </Grid.Row>
    <Grid.Row>
    <p style={{fontWeight: 'bold'}}>{weight} lbs</p>
    </Grid.Row>
  </Grid.Column>
  <Grid.Column>
    <Grid.Row>
    <Icon name='stopwatch' size='huge'/>
    </Grid.Row>
    <Grid.Row>
    <p style={{fontWeight: 'bold'}}>{speed} mph speed</p>
    </Grid.Row>
  </Grid.Column>
  <Grid.Column>
    <Grid.Row>
    <Icon name='battery half' size='huge'/>
    </Grid.Row>
    <Grid.Row>
    <p style={{fontWeight: 'bold'}}>{range} mi / charge</p>
    </Grid.Row>
  </Grid.Column>
</Grid>
)

export default IconSummary