import React, { Fragment } from 'react'

import { RedSpeechBubble, GreenSpeechBubble } from './styledComponents';

export const PositiveSpeechBubble = ({text}) => (
  <GreenSpeechBubble>{text}</GreenSpeechBubble>
)

export const NegativeSpeechBubble = ({text}) => (
    <RedSpeechBubble>{text}</RedSpeechBubble>
  )