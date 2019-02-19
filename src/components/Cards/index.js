import React from 'react'
import ScooterCard from '../Card'
import { Grid } from 'semantic-ui-react'
import { CardsContainer } from './styledComponents'

const Cards = ({ scooters }) => {
    const cards = scooters.map((scooter, index) =>
    <div key={index}>
    <Grid.Column>
    <ScooterCard  style={{marginTop: 10, marginBottom: 10}}/>
    </Grid.Column>
    </div>
    );
    return (
        <CardsContainer>
        <Grid stackable columns={4} style={{display: 'flex', justifyContent: 'space-between'}}>
        {cards}
        </Grid>
        </CardsContainer>
    )
}

export default Cards;