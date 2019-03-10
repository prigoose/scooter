import React from 'react'
import { Button, Header, Image, Modal, Grid, Segment, Icon } from 'semantic-ui-react'

import IconSummary from './IconSummary';
import CommentsSection from './CommentsSection';
import ConditionalRender from '../base-ui/ConditionalRender';
import { AmazonButton, OtherBuyButton } from './BuyButtons';

const ScooterModal = ({open, handleModal, data}) => {
const { amazonLink, otherBuyLink, name, price, weight, speed, range, image, make, model, description, positive1, positive2, positive3, positive4, negative1, negative2, negative3, negative4 } = data;
return (

  <Modal open={open} closeIcon onClose={handleModal}>
    <Modal.Header style={{textAlign: 'center', backgroundColor: '#fcd300'}}>{make}{' '}{model}</Modal.Header>
    <Modal.Content>
      <Modal.Description>
<div style={{boxShadow:'0px 0px 0px 1px lightgrey inset'}}>
<Grid stackable columns={2} celled>
  <Grid.Column textAlign='center'>
    <Image size='medium' src={image} wrapped />
  </Grid.Column>
  <Grid.Column style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <IconSummary 
      speed={speed} 
      range={range} 
      price={price} 
      weight={weight}
    />
    <p style={{fontSize: 20, marginTop: 15}}>{description}</p>
  </Grid.Column>
</Grid>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 30}}>
  <CommentsSection
    positive1={positive1}
    positive2={positive2}
    positive3={positive3}
    positive4={positive4}
    negative1={negative1}
    negative2={negative2}
    negative3={negative3}
    negative4={negative4}
  />
  <div style={{display: 'flex', justifyContent: 'center', marginTop: 10}}>
  <ConditionalRender 
    shouldRender={amazonLink}
    component={AmazonButton}
    amazonLink={amazonLink}
  />
  <ConditionalRender
    shouldRender={otherBuyLink}
    component={OtherBuyButton}
    amazonLink={amazonLink}
    otherBuyLink={otherBuyLink}
  />
  </div>
  <p style={{fontSize: 10, marginTop: 20, marginBottom: 10}}>Comments on this site are collected from around the internet, including Amazon, Reddit, and personal blogs.</p>
  </div>
  </div>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)
}

export default ScooterModal