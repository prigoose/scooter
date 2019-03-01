import React from 'react'
import { Header, Image, Modal, Grid, Segment, Icon } from 'semantic-ui-react'

const ScooterModal = ({open, handleModal, data}) => {
const { name, price, weight, speed, range, image, make, model, description } = data;
return (
  <Modal open={open} closeIcon onClose={handleModal}>
    <Modal.Header style={{textAlign: 'center', backgroundColor: 'maroon', color: 'white'}}>{make}{' '}{model}</Modal.Header>
    <Modal.Content>
      <Modal.Description>
<Grid stackable columns={2}>
  <Grid.Column>
    <Image size='medium' src={image} wrapped />
  </Grid.Column>
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
</Grid>
</Grid>
{description}
<Header as='h3' block style={{backgroundColor: 'green'}}>:)</Header>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)
}

export default ScooterModal

{/* 
</Grid.Column>
<Grid.Column>
<Icon name='balance scale' size='huge'/>
</Grid.Column>
<Grid.Column>
<Icon name='stopwatch' size='huge'/>
</Grid.Column>
<Grid.Column>
<Icon name='battery half' size='huge'/>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column>
<p style={{fontWeight: 'bold'}}>${price}</p>
</Grid.Column>
<Grid.Column>
<p style={{fontWeight: 'bold'}}>{weight} lbs</p></Grid.Column>
<Grid.Column>
<p style={{fontWeight: 'bold'}}>{speed} mph speed</p></Grid.Column>
<Grid.Column>
<p style={{fontWeight: 'bold'}}>{range} mi/charge</p>
</Grid.Column>
</Grid.Row>
<Grid.Row>{description}</Grid.Row>
</Grid> */}