import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import ScooterModal from '../Modal'

class ScooterCard extends Component {
  constructor() {
    super();
    this.state = {
      modal: true,
    }
    this.handleModal=this.handleModal.bind(this);
  }
  handleModal() {
    this.setState({modal: !this.state.modal})
  }
  render() {
    const {data, ...modalTriggerProps} = this.props;
    const { image, make, model, price, description} = data;
    return(
      <div>
  <Card {...modalTriggerProps} link >
    <Card.Content onClick={this.handleModal}>
    <Image src={image} style={{marginBottom: 15}}/>
    <Card.Header>
    {make}{' '}{model}
    </Card.Header>
      <Card.Meta>
        <span>${price}</span>
      </Card.Meta>
      <Card.Description>
      {description}
      </Card.Description>
    </Card.Content>
  </Card>
    <ScooterModal 
    open={this.state.modal} 
    handleModal={this.handleModal}
    data={data}
    /> 
    </div>
)
    }
  }

export default ScooterCard