import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import glionDolly from '../../data/images/glion-dolly.jpg'
import ScooterModal from '../Modal'
import '../../App.css';

class ScooterCard extends Component {
  constructor() {
    super();
    this.state = {
      heart: false,
      modal: false,
    }
    this.handleFavorite=this.handleFavorite.bind(this);
    this.handleModal=this.handleModal.bind(this);
  }
  handleFavorite(e) {
    console.log('this.state.modal: ', this.state.modal)
    e.stopPropagation()
    this.setState({heart: !this.state.heart})
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
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
    <Icon link name='heart' color={this.state.heart ? 'red' : 'grey'} size='large' onClick={this.handleFavorite}/>
    </div>
    </Card.Content>
  </Card>
    <ScooterModal open={this.state.modal} handleModal={this.handleModal}/> 
    </div>
)
    }
  }

export default ScooterCard