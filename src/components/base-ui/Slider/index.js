import React, { Component } from 'react'
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Heading } from '../Heading'
 
export default class SliderFilter extends Component {
    constructor(props) {
        super(props);
        const { sliderMax } = this.props;
        this.state = {
            userMin: 0,
            userMax: sliderMax
        }
    }
    render() {
        const { prefix, header, suffix, sliderMax, handleFilter } = this.props;
        const { userMin, userMax } = this.state;
        return (
            <div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Heading>{header}</Heading>
            </div>
            <div style={{marginLeft: 5, marginRight: 5, marginTop: 10}}>
            <Range
                max={sliderMax}
                defaultValue={[0, sliderMax]}
                onChange={([userMin, userMax]) => {
                    console.log(userMin, userMax)
                    this.setState((prevState) => ({ userMin, userMax }));
                    handleFilter(userMin, userMax)
                }}
            />
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <p>{prefix}{userMin}{' '}{suffix}</p>
                <p>{prefix}{userMax}{' '}{suffix}</p>
            </div>
            </div>
            </div>
       )
    }
}

SliderFilter.defaultProps = {
    max: 1500
}