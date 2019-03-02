import React from 'react'
import { Button, Header, Image, Modal, Grid, Segment, Icon } from 'semantic-ui-react'

import { NegativeSpeechBubble, PositiveSpeechBubble } from './styledComponents';

const ScooterModal = ({open, handleModal, data}) => {
const { name, price, weight, speed, range, image, make, model, description, positive1, positive2, positive3, negative1, negative2, negative3 } = data;
return (

  <Modal open={open} closeIcon onClose={handleModal}>
    <Modal.Header style={{textAlign: 'center', backgroundColor: 'maroon', color: 'white'}}>{make}{' '}{model}</Modal.Header>
    <Modal.Content>
      <Modal.Description>
<Grid stackable columns={2}>
  <Grid.Column textAlign='center'>
    <Image size='medium' src={image} wrapped />
  </Grid.Column>
  <Grid.Column>
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
  <Grid.Row>
{description}
  </Grid.Row>
</Grid>
</Grid.Column>
</Grid>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <PositiveSpeechBubble>{positive1}</PositiveSpeechBubble>
  <PositiveSpeechBubble>{positive2}</PositiveSpeechBubble>
  <PositiveSpeechBubble>{positive3}</PositiveSpeechBubble>
  <NegativeSpeechBubble>{negative1}</NegativeSpeechBubble>
  <NegativeSpeechBubble>{negative2}</NegativeSpeechBubble>
  <NegativeSpeechBubble>{negative3}</NegativeSpeechBubble>
  <Button>Buy Now</Button>
  </div>
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