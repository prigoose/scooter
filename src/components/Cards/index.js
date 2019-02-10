import React from 'react'
import ScooterCard from '../Card'
import { Grid } from 'semantic-ui-react'

import '../../App.css';

let scooters = [1, 2, 3, 4, 5, 6, 7, 8]

const Cards = () => {
    const cards = scooters.map((scooter) =>
    <div>
    <Grid.Column>
    <ScooterCard index={scooter} style={{marginTop: 10, marginBottom: 10}}/>
    </Grid.Column>
    </div>
    );
    return (
        <Grid stackable columns={4} style={{display: 'flex', justifyContent: 'center'}}>
        {cards}
        </Grid>
    )
}

export default Cards;