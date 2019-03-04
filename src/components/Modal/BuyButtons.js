import React, { Fragment } from 'react'
import { Button } from 'semantic-ui-react'

export const AmazonButton = ({amazonLink}) => (
    <div>
        <a href={amazonLink} style={{color: 'black'}} target='_blank' rel="noopener noreferrer">
            <Button style={{backgroundColor: '#FF9B00', color: 'black'}}>
                Buy Now (Amazon)
            </Button>
        </a>
    </div>
)

export const OtherBuyButton = ({amazonLink, otherBuyLink}) => {
    const clarification = amazonLink ? ' (Other)' : '';
    return (
        <Button style={{backgroundColor: 'black', color: 'white'}} onPress={() => {}}>{`Buy Now${clarification}`}</Button>
    )
}
