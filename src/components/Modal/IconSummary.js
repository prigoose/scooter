import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'

const IconSummary = ({ price, weight, speed, range}) => (
<Grid stackable relaxed columns={4} textAlign='center'>
  <Grid.Column stretched>
    <Grid.Row>
      <Icon name='money bill alternate outline' size='huge'/>
    </Grid.Row>
    <Grid.Row>
    <p style={{fontSize: 20, fontWeight: 'bold'}}>${price}</p>
    </Grid.Row>
  </Grid.Column>
  <Grid.Column stretched>
    <Grid.Row>
    <Icon name='balance scale' size='huge'/>
    </Grid.Row>
    <Grid.Row>
    <p style={{fontSize: 20, fontWeight: 'bold'}}>{weight} lbs</p>
    </Grid.Row>
  </Grid.Column>
  <Grid.Column stretched>
    <Grid.Row>
    <Icon name='stopwatch' size='huge'/>
    </Grid.Row>
    <Grid.Row>
    <p style={{fontSize: 20, fontWeight: 'bold'}}>{speed} mph speed</p>
    </Grid.Row>
  </Grid.Column>
  <Grid.Column stretched>
    <Grid.Row>
    <Icon name='battery full' size='huge'/>
    </Grid.Row>
    <Grid.Row>
    <p style={{fontSize: 20, fontWeight: 'bold'}}>{range} mi / charge</p>
    </Grid.Row>
  </Grid.Column>
</Grid>
)

export default IconSummary