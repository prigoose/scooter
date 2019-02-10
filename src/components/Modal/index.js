import _ from 'lodash'
import React from 'react'
import { Header, Icon, Image, Modal } from 'semantic-ui-react'
import glionDolly from '../../data/images/glion-dolly.jpg'

const ScooterModal = ({open, handleModal}) => (
  <Modal open={open} closeIcon onClose={handleModal}>
    <Modal.Header style={{textAlign: 'center', backgroundColor: 'maroon', color: 'white'}}>Glion Dolly</Modal.Header>
    <Modal.Content image scrolling>
      <Image size='medium' src={glionDolly} wrapped />
      <Modal.Description>
        <Header>Glion Dolly</Header>
        <p>$499</p>
        <p>The Glion Dolly stands out for its portability. It folds up and then can be rolled like a suitcase (or dolly, hence the name), making it perfect for multi-modal scooter commuters to take on a bus or a train.</p>
        <p>A bunch more information</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Content>
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
    <Icon link name='heart' color='grey' size='large'/>
    </div>

    </Modal.Content>
  </Modal>
)

export default ScooterModal