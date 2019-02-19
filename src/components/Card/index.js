import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import glionDolly from '../../data/images/GlionDolly/main.jpg'
import ScooterModal from '../Modal'

class ScooterCard extends Component {
  constructor() {
    super();
    this.state = {
      heart: false,
      modal: false,
    }
    this.handleModal=this.handleModal.bind(this);
  }
  handleModal() {
    this.setState({modal: !this.state.modal})
  }
  render() {
    const {...modalTriggerProps} = this.props;
    return(
      <div>
  <Card {...modalTriggerProps} link >
    <Card.Content onClick={this.handleModal}>
    <Image src={glionDolly} style={{marginBottom: 15}}/>
    <Card.Header>
    Glion Dolly
    </Card.Header>
      <Card.Meta>
        <span>$499</span>
      </Card.Meta>
      <Card.Description>
      The Glion Dolly stands out for its portability. It folds up and then can be rolled like a suitcase (or dolly, hence the name), making it perfect for multi-modal scooter commuters to take on a bus or a train.
      </Card.Description>
    </Card.Content>
  </Card>
    <ScooterModal open={this.state.modal} handleModal={this.handleModal}/> 
    </div>
)
    }
  }

export default ScooterCard