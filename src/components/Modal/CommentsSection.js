import React, { Fragment } from 'react'
import { Button, Header, Image, Modal, Grid, Segment, Icon } from 'semantic-ui-react'

import ConditionalRender from '../base-ui/ConditionalRender';
import IconSummary from './IconSummary';
import { NegativeSpeechBubble, PositiveSpeechBubble } from './speechBubbles';

const CommentsSection = ({positive1, positive2, positive3, positive4, negative1, negative2, negative3, negative4}) => (
    <Fragment>
    <ConditionalRender
        shouldRender={positive1}
        text={positive1}
        component={PositiveSpeechBubble}
    />
    <ConditionalRender
    shouldRender={positive2}
    text={positive2}
    component={PositiveSpeechBubble}
/>
    <ConditionalRender
    shouldRender={positive3}
    text={positive3}
    component={PositiveSpeechBubble}
/>
    <ConditionalRender
    shouldRender={positive4}
    text={positive4}
    component={PositiveSpeechBubble}
/>
    <ConditionalRender
    shouldRender={negative1}
    text={negative1}
    component={NegativeSpeechBubble}
/>
    <ConditionalRender
    shouldRender={negative2}
    text={negative2}
    component={NegativeSpeechBubble}
/>
    <ConditionalRender
    shouldRender={negative3}
    text={negative3}
    component={NegativeSpeechBubble}
/>
    <ConditionalRender
    shouldRender={negative4}
    text={negative4}
    component={NegativeSpeechBubble}
/>
</Fragment>
)

export default CommentsSection
