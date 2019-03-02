import styled from 'styled-components'

const SpeechBubble = styled.div`
	& {position: relative;
	border-radius: .4em;
    width: 75%;
    padding: 10px;
    margin-bottom: 20px;
    }
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-top: 0;
        margin-top: -10px;
    }
`
export const PositiveSpeechBubble = styled(SpeechBubble)`
	& {
	background: lightgreen;
    }
    &:after {
        left: 0;
        border-right-color: lightgreen;
        border-left: 0;
        margin-left: -20px;
    }
`

export const NegativeSpeechBubble = styled(SpeechBubble)`
	& {
	background: red;
    }
    &:after {
        right: 0;
        border-left-color: red;
        border-right: 0;
        margin-right: -20px;
    }
`