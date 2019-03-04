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
export const GreenSpeechBubble = styled(SpeechBubble)`
	& {
	background: #b2ffd2;
    }
    &:after {
        left: 0;
        border-right-color: #b2ffd2;
        border-left: 0;
        margin-left: -20px;
    }
`

export const RedSpeechBubble = styled(SpeechBubble)`
	& {
	background: #ffb2b2;
    }
    &:after {
        right: 0;
        border-left-color: #ffb2b2;
        border-right: 0;
        margin-right: -20px;
    }
`