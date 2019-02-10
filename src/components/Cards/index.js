import React, { Component } from 'react'
import scooter from '../icons/scooter.svg';
import glionDolly from '../../data/images/glion-dolly.jpg';
import Card from '../Card'
import { Grid } from 'semantic-ui-react'
// import ModalExampleScrollingContent from '../Modal'

import '../../App.css';

let scooters = [1, 2, 3, 4, 5, 6, 7, 8]

const Cards = ({}) => {
    const cards = scooters.map((scooter) =>
    <div>
    <Grid.Column>
    <Card index={scooter} style={{marginTop: 10, marginBottom: 10}}/>
    </Grid.Column>
    </div>
    );
    return (
        <Grid stackable columns={4} centered>
        {cards}
        </Grid>
    )
}

export default Cards;