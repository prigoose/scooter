import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import scooter from '../icons/scooter.svg';
import glionDolly from '../../data/images/glion-dolly.jpg'
// import ModalExampleScrollingContent from '../Modal'

import '../../App.css';

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      heart: false
    }
  }
  render() {
    const {...modalTriggerProps} = this.props;
    return(
  <Card {...modalTriggerProps}>
    <Card.Content style={{backgroundColor: 'maroon'}}>
      <Card.Header textAlign='center' style={{color: 'white'}}>GLION DOLLY</Card.Header>
    </Card.Content>
    <Card.Content>
    <Image src={glionDolly} style={{marginBottom: 15}}/>
    <Card.Header>Glion Dolly</Card.Header>
      <Card.Meta>
        <span>$499</span>
      </Card.Meta>
      <Card.Description>The Glion Dolly stands out for its portability. It folds up and then can be rolled like a suitcase (or dolly, hence the name), making it perfect for multi-modal scooter commuters to take on a bus or a train.</Card.Description>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
    <Icon link name='heart' color={this.state.heart ? 'pink' : 'grey'} size='large' onClick={() => this.setState({heart: !this.state.heart})}/>
    </div>
    </Card.Content>
  </Card>
)
    }
  }

export default Cards